/* ─────────────────────────────────────────────────────────────────────────
   Namzilabs motion engine — deterministic, seekable timelines for HTML video.

   Every frame is a pure function of time: `tl.render(t)` puts every element
   exactly where it belongs at `t` seconds. That is what lets tools/render-video
   step the page frame by frame at 60fps and get a perfectly smooth MP4 — no
   screen recorder, no dropped frames — and it is also what lets you open the
   same HTML file in a browser and watch it live:

     R  replay        F  fullscreen        Space  pause / resume

   The cursor hides after 3s of stillness and the key hint fades after 4s, so a
   screen recording of the live page stays clean too.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ── easing ───────────────────────────────────────────────────────────── */

  // cubic-bezier(x1,y1,x2,y2) — a port of WebKit's UnitBezier solver, so the
  // curves here are exactly the curves CSS would draw.
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (t) => ((ax * t + bx) * t + cx) * t;
    const sy = (t) => ((ay * t + by) * t + cy) * t;
    const dx = (t) => (3 * ax * t + 2 * bx) * t + cx;
    function solve(x) {
      let t = x;
      for (let i = 0; i < 8; i++) {
        const err = sx(t) - x;
        if (Math.abs(err) < 1e-7) return t;
        const d = dx(t);
        if (Math.abs(d) < 1e-7) break;
        t -= err / d;
      }
      let lo = 0, hi = 1;
      t = x;
      for (let i = 0; i < 60; i++) {
        const v = sx(t);
        if (Math.abs(v - x) < 1e-7) break;
        if (x > v) lo = t; else hi = t;
        t = (lo + hi) / 2;
      }
      return t;
    }
    return (x) => (x <= 0 ? 0 : x >= 1 ? 1 : sy(solve(x)));
  }

  // A damped spring, normalised to settle inside [0,1]. ~10% overshoot.
  function spring(stiff = 13, damp = 0.58) {
    const wd = stiff * Math.sqrt(1 - damp * damp);
    return (x) => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      return 1 - Math.exp(-damp * stiff * x) * (Math.cos(wd * x) + ((damp * stiff) / wd) * Math.sin(wd * x));
    };
  }

  const ease = {
    linear: (x) => x,
    out: bezier(0.16, 1, 0.3, 1),        // text + UI entries: fast, then silk
    outSoft: bezier(0.22, 1, 0.36, 1),
    back: bezier(0.34, 1.56, 0.64, 1),   // graphics that need weight
    inOut: bezier(0.65, 0, 0.35, 1),     // camera moves, morphs
    inOutSoft: bezier(0.45, 0, 0.2, 1),
    in: bezier(0.55, 0, 1, 0.45),        // exits: quicker than entries
    spring: spring(13, 0.58),
    springSoft: spring(11, 0.72),
    springBouncy: spring(15, 0.42),
    bezier,
    springOf: spring,
  };

  /* ── values ───────────────────────────────────────────────────────────── */

  const DEFAULTS = { opacity: 1, x: 0, y: 0, z: 0, scale: 1, sx: 1, sy: 1, rotate: 0, rx: 0, ry: 0, blur: 0, bright: 1, sat: 1, clip: [0, 0, 0, 0], round: 0, draw: 1 };

  function hexToRgb(h) {
    const s = h.replace("#", "");
    const n = parseInt(s.length === 3 ? s.split("").map((c) => c + c).join("") : s, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function lerp(a, b, e) {
    if (typeof a === "number" && typeof b === "number") return a + (b - a) * e;
    if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => v + (b[i] - v) * e);
    if (typeof a === "string" && typeof b === "string" && a[0] === "#" && b[0] === "#") {
      const A = hexToRgb(a), B = hexToRgb(b);
      return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * e)).join(",")})`;
    }
    return e < 1 ? a : b;
  }

  function apply(el, s) {
    const st = el.style;
    if ("opacity" in s) st.opacity = String(Math.max(0, Math.min(1, s.opacity)));
    if ("x" in s || "y" in s || "z" in s || "scale" in s || "sx" in s || "sy" in s || "rotate" in s || "rx" in s || "ry" in s) {
      const x = s.x ?? 0, y = s.y ?? 0, z = s.z ?? 0, sc = s.scale ?? 1;
      const sx = (s.sx ?? 1) * sc, sy = (s.sy ?? 1) * sc;
      const base = el.dataset.base || "";
      const persp = "rx" in s || "ry" in s ? "perspective(1600px) " : "";
      st.transform = `${persp}${base} translate3d(${x}px, ${y}px, ${z}px) rotateX(${s.rx ?? 0}deg) rotateY(${s.ry ?? 0}deg) rotate(${s.rotate ?? 0}deg) scale(${sx}, ${sy})`;
    }
    if ("blur" in s || "bright" in s || "sat" in s) {
      const f = [];
      if (s.blur) f.push(`blur(${s.blur.toFixed(2)}px)`);
      if ("bright" in s && s.bright !== 1) f.push(`brightness(${s.bright})`);
      if ("sat" in s && s.sat !== 1) f.push(`saturate(${s.sat})`);
      st.filter = f.join(" ");
    }
    if ("clip" in s) {
      const [t, r, b, l] = s.clip;
      st.clipPath = `inset(${t}% ${r}% ${b}% ${l}% round ${s.round ?? 0}px)`;
    }
    if ("draw" in s) {
      // SVG stroke drawing — the path needs pathLength="1"
      st.strokeDasharray = "1 1";
      st.strokeDashoffset = String(1 - s.draw);
    }
    if ("w" in s) st.width = `${s.w}px`;
    if ("h" in s) st.height = `${s.h}px`;
    if ("color" in s) st.color = s.color;
    if ("bg" in s) st.background = s.bg;
    for (const k in s) if (k.startsWith("--")) st.setProperty(k, String(s[k]));
  }

  function resolve(target, root = document) {
    if (!target) return [];
    if (typeof target === "string") return Array.from(root.querySelectorAll(target));
    if (target instanceof Element) return [target];
    return Array.from(target);
  }

  /* ── timeline ─────────────────────────────────────────────────────────── */

  class Timeline {
    constructor({ duration = 10, tail = 1.5 } = {}) {
      this.duration = duration;   // the main sequence
      this.tail = tail;           // ambient hold rendered after it
      this.tracks = [];
      this.calls = [];
      this.hooks = [];
      this._sorted = true;
    }
    /** Animate props of target(s) from `from` to `to`, starting at `at` for `dur` seconds. */
    add(target, { at = 0, dur = 0.6, ease: e = ease.out, from = {}, to = {} } = {}) {
      for (const el of resolve(target)) this.tracks.push({ el, at, dur, ease: e, from, to });
      this._sorted = false;
      return this;
    }
    /** Same, applied to each target in turn, `gap` seconds apart. */
    stagger(target, opts, gap = 0.06) {
      resolve(target).forEach((el, i) => this.add(el, { ...opts, at: (opts.at ?? 0) + i * gap }));
      return this;
    }
    /** Jump props instantly at `at`. */
    set(target, at, props) {
      return this.add(target, { at, dur: 0, to: props });
    }
    /** Run fn(progress 0..1) across a window — counters, typing, paths. Same `key` = later call wins. */
    call(at, dur, fn, { ease: e = ease.linear, key } = {}) {
      this.calls.push({ at, dur, fn, ease: e, key });
      this._sorted = false;
      return this;
    }
    /** fn(t) every frame, with absolute time — ambient micro-motion that never stops. */
    every(fn) {
      this.hooks.push(fn);
      return this;
    }
    render(t) {
      if (!this._sorted) {
        this.tracks.sort((a, b) => a.at - b.at);
        this.calls.sort((a, b) => a.at - b.at);
        this._sorted = true;
      }
      const state = new Map();
      for (const tr of this.tracks) {
        let s = state.get(tr.el);
        if (!s) state.set(tr.el, (s = {}));
        const keys = new Set([...Object.keys(tr.from), ...Object.keys(tr.to)]);
        for (const k of keys) {
          const rec = s[k] || (s[k] = { v: undefined, started: false });
          if (t >= tr.at) {
            const p = tr.dur <= 0 ? 1 : Math.min(1, (t - tr.at) / tr.dur);
            const e = tr.ease(p);
            const a = k in tr.from ? tr.from[k] : rec.v !== undefined ? rec.v : DEFAULTS[k];
            const b = k in tr.to ? tr.to[k] : a;
            rec.v = lerp(a, b, e);
            rec.started = true;
          } else if (!rec.started && rec.v === undefined) {
            rec.v = k in tr.from ? tr.from[k] : tr.dur === 0 && k in tr.to ? DEFAULTS[k] ?? tr.to[k] : DEFAULTS[k] ?? tr.to[k];
          }
        }
      }
      for (const [el, s] of state) {
        const flat = {};
        for (const k in s) if (s[k].v !== undefined) flat[k] = s[k].v;
        apply(el, flat);
      }
      const byKey = new Map();
      for (const c of this.calls) {
        if (c.key) {
          const cur = byKey.get(c.key);
          if (t >= c.at || !cur) byKey.set(c.key, c);
          continue;
        }
        const p = c.dur <= 0 ? (t >= c.at ? 1 : 0) : Math.max(0, Math.min(1, (t - c.at) / c.dur));
        c.fn(c.ease(p), t);
      }
      for (const c of byKey.values()) {
        const p = c.dur <= 0 ? (t >= c.at ? 1 : 0) : Math.max(0, Math.min(1, (t - c.at) / c.dur));
        c.fn(c.ease(p), t);
      }
      for (const h of this.hooks) h(t);
    }
  }

  /* ── helpers ──────────────────────────────────────────────────────────── */

  function fmt(n, { decimals = 0, prefix = "", suffix = "", comma = true } = {}) {
    const fixed = Math.abs(n).toFixed(decimals);
    let [int, dec] = fixed.split(".");
    if (comma) int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${n < 0 ? "−" : ""}${prefix}${int}${dec ? "." + dec : ""}${suffix}`;
  }

  /** A counter: returns fn(p) that writes the interpolated number into el. */
  function counter(el, from, to, opts = {}) {
    const node = typeof el === "string" ? document.querySelector(el) : el;
    return (p) => {
      node.textContent = fmt(from + (to - from) * p, opts);
    };
  }

  /** Wrap each word of el in a clipping mask so it can rise into place. Returns the inner spans. */
  function splitWords(el) {
    const node = typeof el === "string" ? document.querySelector(el) : el;
    const out = [];
    const walk = (n) => {
      for (const child of Array.from(n.childNodes)) {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          for (const part of parts) {
            if (!part) continue;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); continue; }
            const mask = document.createElement("span");
            mask.className = "wmask";
            const inner = document.createElement("span");
            inner.className = "wi";
            inner.textContent = part;
            mask.appendChild(inner);
            frag.appendChild(mask);
            out.push(inner);
          }
          n.replaceChild(frag, child);
        } else if (child.nodeType === 1 && !child.classList.contains("wmask")) {
          if (child.tagName === "EM" || child.tagName === "BR") {
            if (child.tagName === "EM") {
              const mask = document.createElement("span");
              mask.className = "wmask";
              n.replaceChild(mask, child);
              const inner = document.createElement("span");
              inner.className = "wi";
              inner.appendChild(child);
              mask.appendChild(inner);
              out.push(inner);
            }
          } else walk(child);
        }
      }
    };
    walk(node);
    return out;
  }

  /** Inline the connector marks: <span class="mark" data-src="stripe"></span>. */
  function hydrateMarks(root = document) {
    const marks = window.NZ_MARKS || {};
    for (const el of root.querySelectorAll(".mark[data-src]")) {
      const m = marks[el.dataset.src];
      if (!m) continue;
      el.innerHTML = m.svg
        ? m.svg
        : `<span class="tile" style="background:${m.color}">${m.short}</span>`;
      if (!el.title) el.setAttribute("aria-label", m.name || el.dataset.src);
    }
  }

  /** The Namzilabs mark as an inline SVG (the chosen concept: two circles, one lens). */
  const LOGO = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#14141c"/><circle cx="26" cy="32" r="13" fill="none" stroke="#fff" stroke-width="3.6"/><circle cx="38" cy="32" r="13" fill="none" stroke="#fff" stroke-width="3.6"/><path d="M32 20.4a13 13 0 0 1 0 23.2a13 13 0 0 1 0-23.2Z" fill="#568cff"/></svg>`;
  function hydrateLogos(root = document) {
    for (const el of root.querySelectorAll(".logo:not([data-keep])")) el.innerHTML = LOGO;
  }

  /* ── mount: capture hooks + live viewer ──────────────────────────────── */

  function mount(tl, { width, height } = {}) {
    hydrateMarks();
    hydrateLogos();
    const canvas = document.querySelector(".canvas");
    const W = width || canvas.offsetWidth;
    const H = height || canvas.offsetHeight;
    const params = new URLSearchParams(location.search);
    const capture = params.has("capture");

    window.__meta = { duration: tl.duration, tail: tl.tail, width: W, height: H };
    window.__render = (t) => tl.render(t);
    window.__ready = Promise.all([
      document.fonts.ready,
      ...Array.from(document.images).map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())),
    ]).then(() => {
      tl.render(0);
      return true;
    });

    if (capture) {
      document.documentElement.classList.add("capture");
      return;
    }

    // live viewer
    const viewer = document.createElement("div");
    viewer.className = "viewer";
    canvas.parentNode.insertBefore(viewer, canvas);
    viewer.appendChild(canvas);
    const fit = () => {
      const k = Math.min(innerWidth / W, innerHeight / H);
      canvas.style.transform = `scale(${k})`;
      canvas.style.margin = `${(H * k - H) / 2}px ${(W * k - W) / 2}px`;
    };
    fit();
    addEventListener("resize", fit);

    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "R replay · F fullscreen · Space pause";
    document.body.appendChild(hint);
    setTimeout(() => (hint.style.opacity = "0"), 4000);

    let cursorTimer;
    const wake = () => {
      document.body.style.cursor = "";
      clearTimeout(cursorTimer);
      cursorTimer = setTimeout(() => (document.body.style.cursor = "none"), 3000);
    };
    addEventListener("mousemove", wake);
    wake();

    let start = null, paused = false, pausedAt = 0;
    window.__ready.then(() => {
      start = performance.now();
      const frame = (now) => {
        if (!paused) tl.render((now - start) / 1000);
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
    addEventListener("keydown", (e) => {
      if (e.key === "r" || e.key === "R") { start = performance.now(); paused = false; }
      if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
      if (e.key === " ") {
        e.preventDefault();
        if (paused) { start = performance.now() - pausedAt * 1000; paused = false; }
        else { pausedAt = (performance.now() - start) / 1000; paused = true; }
      }
    });
  }

  /** For static posts: hydrate marks and logos, then signal the renderer. */
  function still() {
    hydrateMarks();
    hydrateLogos();
    window.__ready = Promise.all([
      document.fonts.ready,
      ...Array.from(document.images).map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())),
    ]).then(() => true);
  }

  window.NZ = { ease, bezier, spring, Timeline, counter, fmt, splitWords, hydrateMarks, hydrateLogos, mount, still, LOGO };
})();

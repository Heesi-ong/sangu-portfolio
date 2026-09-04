/* =============================================================================
   SangU portfolio — motion layer (GSAP)
   Pure enhancement. If GSAP is missing or the visitor asked for reduced motion,
   app.js never adds `.motion-ready`, so content stays visible and this file
   only wires the progress rail + header state.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.__reduceMotion || /(?:^|[?&])motion=off(?:&|$)/.test(location.search);
  var g = window.gsap;
  var main = document.getElementById('main');
  var header = document.getElementById('site-header');
  var rail = document.getElementById('scroll-rail-fill');

  function nativeScrollState() {
    var y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 12);
    if (rail) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      rail.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
    }
  }

  if (reduce || !g) {
    window.addEventListener('scroll', nativeScrollState, { passive: true });
    nativeScrollState();
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href="#top"]');
      if (a) { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }
    });
    return;
  }

  /* --------------------------------------------------------- plugins --- */
  [window.ScrollTrigger, window.ScrollSmoother, window.SplitText].forEach(function (p) {
    if (p) { try { g.registerPlugin(p); } catch (e) {} }
  });
  var ST = window.ScrollTrigger;
  var EASE = 'power3.out';

  if (!ST) { // ScrollTrigger is the backbone; without it, stay static but safe
    window.addEventListener('scroll', nativeScrollState, { passive: true });
    return;
  }

  // From here on motion is committed: reveal targets hide until triggered.
  document.documentElement.classList.add('motion-ready');
  var bailed = false;
  function bailToVisible() {
    if (bailed) return;
    bailed = true;
    document.documentElement.classList.remove('motion-ready');
    document.querySelectorAll('[data-anim]').forEach(function (el) {
      el.classList.add('is-inview');
      // A g.from() may have already stamped inline opacity/transform via
      // immediateRender before its trigger ever fired — clear it or the element
      // stays invisible for good.
      g.set(el, { clearProps: 'opacity,transform,translate,rotate,scale,x,y' });
    });
    document.querySelectorAll('[data-split]').forEach(function (el) {
      el.style.opacity = 1;
      g.set(el.querySelectorAll('div, span'), { clearProps: 'transform,opacity' });
    });
  }
  // Watchdog: GSAP's rAF ticker is frozen while the tab is hidden. If it never
  // started ticking, reveal everything so a backgrounded load is never blank.
  setTimeout(function () { if (g.ticker.frame < 8) bailToVisible(); }, 3500);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && ST) ST.refresh();
  });

  /* ----------------------------------------------- smooth scroll shell --- */
  var smoother = null;
  (function build() {
    if (!window.ScrollSmoother) return;
    var wrapper = document.createElement('div');
    wrapper.id = 'smooth-wrapper';
    var content = document.createElement('div');
    content.id = 'smooth-content';
    var footer = document.querySelector('.site-footer');
    main.parentNode.insertBefore(wrapper, main);
    wrapper.appendChild(content);
    content.appendChild(main);
    if (footer) content.appendChild(footer);
    try {
      smoother = window.ScrollSmoother.create({
        wrapper: wrapper, content: content,
        smooth: 1.15, effects: true, normalizeScroll: true, smoothTouch: 0
      });
      window.__smoother = smoother;
      document.documentElement.classList.add('has-smooth-scroll');
    } catch (e) {
      if (footer) document.body.appendChild(footer);
      wrapper.parentNode.insertBefore(main, wrapper);
      wrapper.remove();
      smoother = null;
    }
  })();

  function scrollY() { return smoother ? smoother.scrollTop() : window.scrollY; }
  function scrollTop(instant) {
    if (smoother) smoother.scrollTo(0, !instant);
    else window.scrollTo({ top: 0, behavior: instant ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href="#top"]');
    if (a) { e.preventDefault(); scrollTop(false); }
  });

  if (!smoother) {
    window.addEventListener('scroll', nativeScrollState, { passive: true });
  } else if (ST) {
    ST.create({
      start: 0, end: 'max',
      onUpdate: function (self) {
        if (header) header.classList.toggle('is-scrolled', self.scroll() > 12);
      }
    });
  }

  /* -------------------------------------------------- ambient canvas --- */
  (function canvasField() {
    var c = document.getElementById('bg-canvas');
    if (!c) return;
    var ctx = c.getContext('2d');
    var dots = [], w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var mx = 0.5, my = 0.5;
    function resize() {
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
      c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px';
      var count = Math.min(160, Math.round((innerWidth * innerHeight) / 26000));
      dots = [];
      for (var i = 0; i < count; i++) {
        dots.push({ x: Math.random() * w, y: Math.random() * h, z: 0.3 + Math.random() * 1.6, r: 0.6 + Math.random() * 1.6 });
      }
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; });
    function accent() {
      return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c15f3c';
    }
    var col = accent();
    window.addEventListener('theme:changed', function () { setTimeout(function () { col = accent(); }, 80); });
    (function loop() {
      ctx.clearRect(0, 0, w, h);
      var ox = (mx - 0.5) * 42 * dpr, oy = (my - 0.5) * 42 * dpr;
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        ctx.globalAlpha = 0.08 + 0.15 * (d.z / 1.9);
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(d.x + ox * d.z, d.y + oy * d.z, d.r * d.z, 0, 6.2832);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    })();
  })();

  /* --------------------------------------------------- custom cursor --- */
  (function cursor() {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    var el = document.getElementById('cursor');
    if (!el) return;
    var xTo = g.quickTo(el, 'x', { duration: 0.32, ease: 'power3' });
    var yTo = g.quickTo(el, 'y', { duration: 0.32, ease: 'power3' });
    window.addEventListener('pointermove', function (e) {
      el.classList.add('is-active');
      xTo(e.clientX); yTo(e.clientY);
      el.classList.toggle('is-hovering', !!e.target.closest('a, button, [data-tilt], [data-magnetic]'));
    });
    document.addEventListener('mouseleave', function () { el.classList.remove('is-active'); });
  })();

  /* ----------------------------------------------- tilt + glass sheen --- */
  (function tilt() {
    var TILT = 7, store = new WeakMap();
    window.addEventListener('pointermove', function (e) {
      var card = e.target.closest('[data-tilt]');
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--px', (px * 100) + '%');
      card.style.setProperty('--py', (py * 100) + '%');
      var q = store.get(card);
      if (!q) {
        g.set(card, { transformPerspective: 900, transformStyle: 'preserve-3d' });
        q = {
          rx: g.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' }),
          ry: g.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' })
        };
        store.set(card, q);
      }
      q.ry((px - 0.5) * TILT * 2);
      q.rx((0.5 - py) * TILT * 2);
    });
    window.addEventListener('pointerout', function (e) {
      var card = e.target.closest('[data-tilt]');
      if (card && !card.contains(e.relatedTarget)) g.to(card, { rotationX: 0, rotationY: 0, duration: 0.6, ease: 'power3' });
    });
  })();

  /* ------------------------------------------------------- magnetic --- */
  (function magnetic() {
    var store = new WeakMap();
    window.addEventListener('pointermove', function (e) {
      var m = e.target.closest('[data-magnetic]');
      if (!m) return;
      var r = m.getBoundingClientRect();
      var q = store.get(m);
      if (!q) {
        q = { x: g.quickTo(m, 'x', { duration: 0.4, ease: 'power3' }), y: g.quickTo(m, 'y', { duration: 0.4, ease: 'power3' }) };
        store.set(m, q);
      }
      q.x((e.clientX - (r.left + r.width / 2)) * 0.28);
      q.y((e.clientY - (r.top + r.height / 2)) * 0.28);
    });
    window.addEventListener('pointerout', function (e) {
      var m = e.target.closest('[data-magnetic]');
      if (m && !m.contains(e.relatedTarget)) g.to(m, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
    });
  })();

  /* ============================================ per-route lifecycle --- */
  var triggers = [], tweens = [], splits = [], effects = [];

  function clearRoute() {
    triggers.forEach(function (t) { t.kill(); });
    tweens.forEach(function (t) { t.kill && t.kill(); });
    effects.forEach(function (e) { if (e && e.kill) e.kill(); });
    splits.forEach(function (s) { try { s.revert(); } catch (e) {} });
    triggers = []; tweens = []; splits = []; effects = [];
  }

  function splitHeadings(introFirst) {
    main.querySelectorAll('[data-split]').forEach(function (el, i) {
      var split;
      try { split = new window.SplitText(el, { type: 'lines,words' }); }
      catch (e) { el.style.opacity = 1; return; }
      splits.push(split);
      el.style.opacity = 1;
      split.lines.forEach(function (ln) { ln.style.overflow = 'hidden'; ln.style.display = 'block'; ln.style.paddingBottom = '0.06em'; });
      var hero = introFirst && i === 0;
      var tw = g.from(split.words, {
        yPercent: 118, opacity: 0, duration: hero ? 1 : 0.85, ease: 'power4.out', stagger: 0.028
      });
      tweens.push(tw);
      if (hero) { tw.delay(0.12); }
      else {
        tw.pause();
        triggers.push(ST.create({ trigger: el, start: 'top 86%', animation: tw, toggleActions: 'play none none none' }));
      }
    });
  }

  function revealItems(scope) {
    (scope || main).querySelectorAll('[data-anim]:not(.is-inview)').forEach(function (el) {
      var mode = el.getAttribute('data-anim');
      var from = { opacity: 0, duration: 0.9, ease: EASE };
      if (mode === 'left') from.x = -40;
      else if (mode === 'right') from.x = 40;
      else if (mode === 'scale') from.scale = 0.94;
      else from.y = 30;
      var tw = g.from(el, from);
      tw.pause();
      tweens.push(tw);
      triggers.push(ST.create({
        trigger: el, start: 'top 90%', animation: tw,
        toggleActions: 'play none none none',
        onEnter: function () { el.classList.add('is-inview'); }
      }));
    });
  }

  function marquee() {
    var strip = document.getElementById('skill-strip');
    if (!strip) return;
    var tracks = strip.querySelectorAll('.strip-track');
    if (!tracks.length) return;
    var tw = g.to(tracks, { xPercent: -100, repeat: -1, duration: 24, ease: 'none' });
    tweens.push(tw);
    if (ST) {
      triggers.push(ST.create({
        trigger: strip,
        onUpdate: function (self) {
          var v = Math.abs(self.getVelocity());
          g.to(tw, { timeScale: 1 + Math.min(v / 700, 3), duration: 0.3, overwrite: true });
          clearTimeout(strip.__t);
          strip.__t = setTimeout(function () { g.to(tw, { timeScale: 1, duration: 0.6 }); }, 220);
        }
      }));
    }
  }

  function skillsPin() {
    var scroller = document.getElementById('skills-scroller');
    var track = document.getElementById('skills-track');
    if (!scroller || !track || window.matchMedia('(max-width: 820px)').matches) return;
    var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth + 120); };
    if (dist() <= 0) return;
    var tw = g.to(track, { x: function () { return -dist(); }, ease: 'none' });
    tweens.push(tw);
    triggers.push(ST.create({
      trigger: scroller, start: 'center center',
      end: function () { return '+=' + dist(); },
      pin: true, scrub: 1, animation: tw, invalidateOnRefresh: true, anticipatePin: 1
    }));
  }

  function parallax() {
    if (!smoother) return;
    main.querySelectorAll('.hero-card, .case-hero, .about-figure').forEach(function (el) {
      var fx = smoother.effects(el, { speed: 0.94 });
      if (fx) effects.push(Array.isArray(fx) ? fx[0] : fx);
    });
  }

  var progressTrigger = null;
  function onRoute(detail) {
    if (bailed) { // motion already gave up; just keep content visible
      main.querySelectorAll('[data-anim]').forEach(function (el) { el.classList.add('is-inview'); });
      return;
    }
    clearRoute();
    if (progressTrigger) { progressTrigger.kill(); progressTrigger = null; }
    if (smoother) smoother.paused(false);
    scrollTop(true);

    try {
      splitHeadings(detail.first);
      revealItems();
      marquee();
      skillsPin();
      parallax();
    } catch (err) {
      bailToVisible();
      return;
    }

    progressTrigger = ST.create({
      start: 0, end: 'max',
      onUpdate: function (self) { if (rail) rail.style.transform = 'scaleX(' + self.progress + ')'; }
    });

    requestAnimationFrame(function () { ST.refresh(); });
  }
  window.addEventListener('route:rendered', function (e) { onRoute(e.detail); });

  /* ---------------------------------------------- page transition --- */
  var curtain = document.getElementById('curtain');
  window.__pageTransition = function (swap) {
    // No curtain, or motion already bailed (frozen ticker) — swap straight away
    // so navigation never stalls waiting on a timeline that will not tick.
    if (!curtain || bailed) { swap(); return; }
    if (smoother) smoother.paused(true);
    g.timeline()
      .set(curtain, { scaleY: 0, transformOrigin: 'bottom' })
      .to(curtain, { scaleY: 1, duration: 0.4, ease: 'power3.inOut' })
      .add(swap)
      .set(curtain, { transformOrigin: 'top' })
      .to(curtain, { scaleY: 0, duration: 0.5, ease: 'power3.inOut' }, '+=0.04');
  };

  /* --------------------------------------------- lang / theme sync --- */
  window.addEventListener('lang:changed', function () {
    setTimeout(function () {
      splits.forEach(function (s) { try { s.revert(); } catch (e) {} });
      splits = [];
      main.querySelectorAll('[data-split]').forEach(function (el) {
        el.style.opacity = 1;
        try { splits.push(new window.SplitText(el, { type: 'lines,words' })); } catch (e) {}
      });
      ST.refresh();
    }, 90);
  });
  window.addEventListener('theme:changed', function () { setTimeout(function () { ST.refresh(); }, 120); });
  window.__motionRefresh = function () { requestAnimationFrame(function () { ST.refresh(); }); };

  window.addEventListener('load', function () { ST.refresh(); });
  window.addEventListener('resize', function () {
    clearTimeout(window.__rt);
    window.__rt = setTimeout(function () { ST.refresh(); }, 200);
  });
})();

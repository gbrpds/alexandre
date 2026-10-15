import Lenis from 'lenis';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Rolagem suave
if (!reduced) {
  const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  (window as any).lenis = lenis;
}

// Revelação de blocos e grifos ao entrar na tela
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add(e.target.classList.contains('grifo') ? 'is-on' : 'is-visible');
      io.unobserve(e.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('.reveal, .grifo').forEach((el) => io.observe(el));

// Marquees: rolam sozinhos e podem ser arrastados/deslizados
document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((el) => {
  const track = el.firstElementChild as HTMLElement | null;
  if (!track) return;
  const speed = parseFloat(el.dataset.marquee || '60');
  const dir = el.dataset.marqueeDir === '-1' ? -1 : 1;
  el.setAttribute('data-lenis-prevent', '');
  let pos = 0;
  let half = 0;
  let pausedUntil = 0;
  let last = 0;
  let visible = true;
  const measure = () => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    half = (track.scrollWidth + gap) / 2;
  };
  measure();
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  if (dir < 0) {
    pos = half;
    el.scrollLeft = pos;
  }
  const pause = () => (pausedUntil = Infinity);
  const resume = () => {
    pos = el.scrollLeft;
    pausedUntil = performance.now() + 1500;
  };
  el.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && pause());
  el.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && resume());
  el.addEventListener('touchstart', pause, { passive: true });
  el.addEventListener('touchend', resume, { passive: true });
  el.addEventListener('focusin', pause);
  el.addEventListener('focusout', resume);
  new IntersectionObserver((en) => (visible = en[0].isIntersecting), { rootMargin: '120px 0px' }).observe(el);
  const tick = (t: number) => {
    const dt = last ? Math.min(t - last, 64) : 16;
    last = t;
    if (!reduced && visible && half > 0 && t > pausedUntil && !document.hidden) {
      pos += (dir * speed * dt) / 1000;
      if (pos >= half) pos -= half;
      else if (pos < 0) pos += half;
      el.scrollLeft = pos;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});

// WhatsApp flutuante aparece depois do topo; desfoque da base some no fim da página
const wa = document.querySelector('.wa-float');
const blur = document.querySelector<HTMLElement>('.pblur');
const onScroll = () => {
  const y = window.scrollY;
  wa?.classList.toggle('is-visible', y > window.innerHeight * 0.7);
  if (blur) {
    const left = document.documentElement.scrollHeight - (y + window.innerHeight);
    blur.style.opacity = y > 80 ? String(Math.min(Math.max(left / 260, 0), 1)) : '0';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

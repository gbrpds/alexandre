import Lenis from 'lenis';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const desktop = window.matchMedia('(min-width: 1360px)');

// Polaroids laterais com leve parallax (só transform, sem layout)
const decos = [...document.querySelectorAll<HTMLElement>('.deco[data-speed]')];
let ticking = false;
const parallax = () => {
  ticking = false;
  if (!desktop.matches || reduced) return;
  const vh = window.innerHeight;
  for (const el of decos) {
    const r = el.parentElement!.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) continue;
    const offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed || '0.1');
    el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }
};
const requestParallax = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(parallax);
  }
};

// WhatsApp flutuante aparece depois do topo
const wa = document.querySelector('.wa-float');
const onScroll = () => {
  wa?.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.7);
  requestParallax();
};

// Rolagem suave só com mouse/trackpad; no toque fica a rolagem nativa
if (!reduced) {
  const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true });
  lenis.on('scroll', onScroll);
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  (window as any).lenis = lenis;
} else {
  window.addEventListener('scroll', onScroll, { passive: true });
}
window.addEventListener('resize', requestParallax);
onScroll();

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

(() => {
  const art = document.querySelector('.night-art');
  if (!art) return;
  const image = art.querySelector('img');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  function sync() {
    art.dataset.motion = reducedMotion.matches ? 'reduced' : document.hidden ? 'hidden' :
      !visible ? 'offscreen' : !(image.complete && image.naturalWidth) ? 'loading' : 'running';
  }
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    sync();
  }).observe(art);
  image.addEventListener('load', sync);
  reducedMotion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pagehide', () => {visible = false; sync();});
  window.addEventListener('pageshow', () => {
    const bounds = art.getBoundingClientRect();
    visible = bounds.bottom > 0 && bounds.top < innerHeight;
    sync();
  });
  sync();
})();

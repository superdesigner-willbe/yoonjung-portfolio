// Reserve measured heading/copy space so the complete demo fits beneath it.
const solution = document.querySelector('.cake-solution');
const copy = document.querySelector('.cake-solution-copy');
if (solution && copy) {
  const fitVideo = () => {
    const viewport = window.visualViewport?.height || window.innerHeight;
    const gap = parseFloat(getComputedStyle(solution).rowGap) || 20;
    const available = Math.max(80, viewport - copy.getBoundingClientRect().height - gap - 90);
    solution.style.setProperty('--cake-video-height', `${available}px`);
  };
  new ResizeObserver(fitVideo).observe(copy);
  window.addEventListener('resize', fitVideo);
  window.visualViewport?.addEventListener('resize', fitVideo);
  document.fonts.ready.then(fitVideo);
  fitVideo();
}

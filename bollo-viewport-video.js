// Autoplay Bollo demonstrations only while visible. Native controls stay available.
(() => {
  const videos = [...document.querySelectorAll('.bollo-oct29 .bollo-content video, #bollo-solution video, #bollo-practice video, #bollo-data video, #bollo-health video')];
  const visible = new Set();
  const update = video => {
    if (!visible.has(video) || document.hidden) { video.pause(); return; }
    video.play().then(() => {
      // A pending play must not restart a video after it leaves the viewport.
      if (!visible.has(video) || document.hidden) video.pause();
    }).catch(() => {}); // Native play controls remain usable if autoplay is blocked.
  };
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const video = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio > 0) visible.add(video);
      else visible.delete(video);
      update(video);
    }
  }, {threshold: [0, 0.01]});
  for (const video of videos) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    observer.observe(video);
  }
  document.addEventListener('visibilitychange', () => videos.forEach(update));
  window.addEventListener('pagehide', () => videos.forEach(video => video.pause()));
})();

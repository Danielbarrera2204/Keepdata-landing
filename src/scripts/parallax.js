const dots = document.getElementById('dots-layer');
const lines = document.getElementById('lines-layer');

let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;

  if (dots) dots.style.transform = `translateY(${scrollY * 0.08}px)`;
  if (lines) lines.style.transform = `translateY(${scrollY * -0.05}px) rotate(0.01deg)`;

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
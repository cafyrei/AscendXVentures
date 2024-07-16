document.addEventListener("DOMContentLoaded", function() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(el => {
    el.classList.add('visible');
  });
});

function scrollToInfo() {
  document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
}

// ✨ Neues Feature: Text beim Hochscrollen wieder einblenden
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  const maxScroll = 300; // Wie weit gescrollt werden muss, bis komplett transparent
  const scrollTop = window.scrollY;
  const opacity = Math.max(0, 1 - scrollTop / maxScroll);

  heroContent.style.opacity = opacity;
});

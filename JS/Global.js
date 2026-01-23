// main.js

// 1. Center the page on load
window.onload = function() {
  const centerX = document.documentElement.scrollWidth / 2 - window.innerWidth / 2;
  const centerY = document.documentElement.scrollHeight / 2 - window.innerHeight / 2;
  window.scrollTo(centerX, centerY);
}

// 2. Menu Logic
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const openBtn = document.querySelector('.starburger-button');
  const closeBtn = document.querySelector('.Close1-button');
  const socials = document.querySelector('.Socials');
  const count = document.querySelector('.Count');

  if (openBtn && closeBtn) { // Safety check to make sure buttons exist on the page
    openBtn.addEventListener('click', () => {
      menu.style.display = 'block';
      setTimeout(() => { menu.classList.add('menu-animate'); }, 10);
      
      socials.style.opacity = '0';
      socials.style.pointerEvents = 'none';
      count.style.opacity = '0';
      count.style.pointerEvents = 'none';
      openBtn.style.opacity = '0';
      openBtn.style.pointerEvents = 'none';
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove('menu-animate');
      socials.style.opacity = '1';
      socials.style.pointerEvents = 'auto';
      count.style.opacity = '1';
      count.style.pointerEvents = 'auto';
      openBtn.style.opacity = '1';
      openBtn.style.pointerEvents = 'auto';

      setTimeout(() => { 
        if (!menu.classList.contains('menu-animate')) {
          menu.style.display = 'none'; 
        }
      }, 600); 
    });
  }
});
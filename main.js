document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
  
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  });


 
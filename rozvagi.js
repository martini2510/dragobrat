
  document.addEventListener("DOMContentLoaded", () => {
    function initCarousel(id) {
      const carousel = document.getElementById(id);
      if (!carousel) return;

      const images = carousel.querySelectorAll("img");
      if (images.length < 2) return;

      let index = 0;
      images[index].classList.add("active");

      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 3000);
    }

    // Запуск обох каруселей
    initCarousel("carousel-standard");
    initCarousel("carousel-comfort");
  });
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
  
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  });
  
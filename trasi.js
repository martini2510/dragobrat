function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const slidesContainer = document.querySelector('.carousel-slides');
  const slides = document.querySelectorAll('.carousel-slide');

  let currentIndex = 0;

  prevButton.addEventListener('click', function () {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlidePosition();
  });

  nextButton.addEventListener('click', function () {
    currentIndex = Math.min(currentIndex + 1, 4); // Limitado al índice 4 (quinto producto)
    updateSlidePosition();
  });

  function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${currentIndex * (slideWidth + 20)}px)`;
  }
});


const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


let carouselIndex = 0;
const items = document.querySelectorAll('.carousel-item');
setInterval(() => {
  items.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - carouselIndex)}%)`;
  });
  carouselIndex = (carouselIndex + 1) % items.length;
}, 3000);

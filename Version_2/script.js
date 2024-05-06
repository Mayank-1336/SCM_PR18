const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// Function to handle next slide
function nextSlide() {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
}

// Function to handle previous slide
function prevSlide() {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
}

// Add event listeners for click events on buttons
leftBtn.addEventListener('click', () => {
  prevSlide();
});

rightBtn.addEventListener('click', () => {
  nextSlide();
});

// Add event listener for arrow key presses
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    prevSlide();
  } else if (event.code === 'ArrowRight') {
    nextSlide();
  }
});

// Set background to body initially
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

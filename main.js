const slider = document.querySelectorAll(".slider");
console.log("last index is: ", slider.length);
let counter = 0;
slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const movindSlide = () => {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
// next button functionality
const goNext = () => {
  counter++;
  if (counter == slider.length) {
    counter = 0;
  }
  movindSlide();
  console.log("go next", counter);
};

const goPrev = () => {
  if (counter > 0 && counter <= slider.length) {
    counter--;
    if (counter == 0) {
      counter = slider.length - 1;
    }
    movindSlide();
  }

  console.log("go prev", counter);
};

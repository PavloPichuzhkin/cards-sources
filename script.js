function slidePlagin(activeSlide) {
  const slides = document.querySelectorAll(".slide");
  //   console.log(...slides);

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      cleearActiveClasses();

      slide.classList.add("active");
    });
  }
  function cleearActiveClasses() {
    // slides.map((slid) => {
    slides.forEach((slid) => {
      slid.classList.remove("active");
    });
  }

  // let body= document.querySelector('body')
  // body.style.background ='#102';
}

slidePlagin(1);

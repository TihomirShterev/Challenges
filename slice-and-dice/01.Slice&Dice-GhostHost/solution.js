const testimonials = [
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quos quasi laudantium dicta sed accusantium non ad iure aspernatur nemo, accusamus.",
    name: "John Doe",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat libero dolor quis doloremque quod qui consequatur modi vel officia, dolorum iste suscipit.",
    name: "Johnathan Doe",
  },
  {
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptatum vel tempore earum. Sed hic, eveniet, maiores vitae sunt, eius nihil facere optio.",
    name: "Jonny Doe",
  }
];

let slideIndex = 0;

window.onload = () => {
  setFirstSlide();
};

const setFirstSlide = () => showSlide(testimonials[slideIndex]);

const showSlide = (currentSlide) => {
  document.querySelector("#quote").textContent = currentSlide.content;
  document.querySelector("#customer").textContent = currentSlide.name;
}

const selectSlide = (current) => {
  showSlide(testimonials[current]);
  const circles = document.querySelectorAll(".circle");
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace("active", "");
  }
  circles[current].className += " active";
}

setInterval(() => {
  try {
    showSlide(testimonials[++slideIndex]);
    selectSlide(slideIndex);
  } catch (err) {
    slideIndex = 0;
    showSlide(testimonials[slideIndex]);
    selectSlide(0);
  }
}, 5000);

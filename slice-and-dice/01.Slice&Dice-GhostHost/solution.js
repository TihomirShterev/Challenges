const testimonials = [
  {
    content: "Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae.",
    name: "Jason Donkin",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    name: "Johnny Bravo",
  },
  {
    content: "Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.",
    name: "Foncho Jason",
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

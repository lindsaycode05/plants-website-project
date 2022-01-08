const faq = document.querySelectorAll(".faq__questions-question");
const hover = document.querySelectorAll(".hover");

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const closeButton = document.querySelector(".close");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    if (faq.classList.contains("active")) {
      faq.classList.remove("hover");
    } else faq.classList.add("hover");
  });
});

menuButton.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});

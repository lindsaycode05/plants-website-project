const faq = document.querySelectorAll(".faq__questions-question");
const hover = document.querySelectorAll(".hover");

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const closeButton = document.querySelector(".close");

const formButton = document.querySelector(".form-send");
const formMessage = document.querySelector(".form-notification");

// accordion
faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    if (faq.classList.contains("active")) {
      faq.classList.remove("hover");
    } else faq.classList.add("hover");
  });
});

// mobile menu
menuButton.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});

// message on form submit
function submitForm(event) {
  event.preventDefault();
}

formButton.addEventListener("click", () => {
  formMessage.style.display = "block";
});

function messageDisappear() {
  formMessage.style.display = "none";
  window.setTimeout(messageDisappear, 5000);
}

messageDisappear();


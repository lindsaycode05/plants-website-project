const faq = document.querySelectorAll(".faq__questions-question");
const hover = document.querySelectorAll(".hover");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    if (faq.classList.contains("active")) {
      faq.classList.remove("hover");
    } else faq.classList.add("hover");
    console.log(faq);
  });
});

// Skapad med ChatGPT

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    const icon = button.querySelector(".icon-accordion i");

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      accordionContent.style.maxHeight = 0;
    }
  });
});

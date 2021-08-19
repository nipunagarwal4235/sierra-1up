// navbar js
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , function () {
    this.classList.toggle('is-active')
})

//home
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
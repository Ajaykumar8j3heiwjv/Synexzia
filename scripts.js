const hamburgerIcon = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburgerIcon.classList.toggle("cross");
});

for (let el of Array.from(navLinks.children)) {
  el.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerIcon.classList.remove("cross");
  });
}

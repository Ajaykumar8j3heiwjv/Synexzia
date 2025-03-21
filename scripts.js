const heroVideoElt = document.querySelector(".hero-bg video");
heroVideoElt.play();

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

const navAElements = Array.from(document.body.querySelectorAll('.nav-links a'));

function setMeAsActive(e) {
  for (let el of navAElements) {
    el.classList.remove('active');
  }
  e.target.classList.add('active');
}

navAElements.forEach(e => e.onclick = e => setMeAsActive(e))



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll(".to-animate");
hiddenElements.forEach(el => observer.observe(el));

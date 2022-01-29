const hamburger = document.querySelector(".hamburger");
const toggleNav = document.querySelector("nav")


hamburger.addEventListener("click", ()=> {
  toggleNav.classList.toggle("togglenav");
  console.log(toggleNav)
});
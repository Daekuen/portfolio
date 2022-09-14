"use strict";

// navbar 투명에서 스크롤 내리면 진해지도록 만듬.

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// scroll to section

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  // console.log(link);
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

// click on 'contact me' btn

const contactBtn = document.querySelector(".home__btn");
contactBtn.addEventListener("click", (event) => {
  // console.log(event.target);
  const link = event.target.dataset.link;

  scrollIntoView(link);
});

// Transparent home (스크롤 내릴수록 home화면 점점 흐려지게하기.)

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "Arrow up" btn when scrolling down
const arrowBtn = document.querySelector(".arrow__btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});

arrowBtn.addEventListener("click", (event) => {
  scrollIntoView("#home");
});

function scrollIntoView(sectionId) {
  const scrollTo = document.querySelector(sectionId);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

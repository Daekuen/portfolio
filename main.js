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

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

const contactBtn = document.querySelector(".home__btn");
contactBtn.addEventListener("click", (event) => {
  // console.log(event.target);
  const link = event.target.dataset.link;
  scrollTo = document.querySelector(link);

  scrollTo.scrollIntoView({ behavior: "smooth" });
});

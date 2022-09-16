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

// project filtering
const workBtnContainer = document.querySelector(".work__categories"); // 버튼 container
const projectContainer = document.querySelector(".work__projects"); // project container
const projects = document.querySelectorAll(".project"); // project들을 array로 받아옴.

workBtnContainer.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) return;

  // work에서 선택된 버튼에만 불들어오게 하기.
  const activeBtn = document.querySelector(".category__btn.active");
  activeBtn.classList.remove("active");
  const target = event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("active");
  //

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(sectionId) {
  const scrollTo = document.querySelector(sectionId);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

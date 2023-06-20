"use strict";

const lines = document.querySelector(".lines");
const showMore = document.querySelector(".show-more");
const sideTwo = document.querySelector(".side-two");
const showLess = document.querySelector(".show-less");
const showMoreLink = document.querySelector(".more-link");
const showSideThree = document.querySelector(".show-more-three");
const sideThree = document.querySelector(".side-three");
const threeWrapper = document.querySelector(".three-wrapper");
const showThreeLess = document.querySelector(".show-less-three");
const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");
const hide = document.querySelector(".hide");
const hideGrid = document.querySelector(".hide-grid");
const gridItems = document.querySelectorAll(".grid-items");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

// Nav Toggle

if (lines) {
  document.querySelector(".lines").addEventListener("click", () => {
    document.querySelector(".sidebar-overlay").classList.toggle("change");
    grid.classList.toggle("change");
    gridContainer.classList.toggle("change");
    hide.classList.toggle("change");
    hideGrid.classList.toggle("change");
    header.classList.add("change");

    gridItems.forEach((element) => {
      element.classList.toggle("change");
    });
  });
}

if (navMenu) {
  document.querySelector(".nav-menu").addEventListener("click", () => {
    document.querySelector(".sidebar-overlay").classList.toggle("change");
  });
}
// End of Nav toggle

// Side two
if (showMore) {
  document.querySelector(".show-more").addEventListener("click", () => {
    sideTwo.classList.add("show-link");
    showMore.style.display = "none";
    showLess.style.display = "block";
    showMoreLink.classList.add("show-link");
  });
}

if (showLess) {
  document.querySelector(".show-less").addEventListener("click", () => {
    sideTwo.classList.remove("show-link");
    showLess.style.display = "none";
    showMore.style.display = "block";
    showMoreLink.classList.remove("show-link");
  });
}
// End of Side two

// Side three
if (showSideThree) {
  showSideThree.addEventListener("click", () => {
    sideThree.classList.add("show-three-link");
    threeWrapper.classList.add("show-three-link");
    showSideThree.classList.add("show-three-link");
    showThreeLess.classList.add("show-three-link");
  });
}

if (showThreeLess) {
  showThreeLess.addEventListener("click", () => {
    sideThree.classList.remove("show-three-link");
    threeWrapper.classList.remove("show-three-link");
    showSideThree.classList.remove("show-three-link");
    showThreeLess.classList.remove("show-three-link");
  });
}
// End of Side three

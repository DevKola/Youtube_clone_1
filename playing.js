"use strict";

const sideTwoPlaying = document.querySelector(".side-two-playing");
const showMorePlaying = document.querySelector(".show-more-playing");
const moreLinkPlaying = document.querySelector(".more-link-playing");
const showLessPlaying = document.querySelector(".show-less-playing");
  

// Nav Toggle
document.querySelector(".lines").addEventListener("click", () => {
  document.querySelector(".playing-side").classList.add("change");
  document.querySelector(".playing-header").classList.add("change");
  document.querySelector(".content").classList.add("change");
});

document.querySelector(".overlay-lines").addEventListener("click", () => {
  document.querySelector(".playing-side").classList.remove("change");
  document.querySelector(".playing-header").classList.remove("change");
  document.querySelector(".content").classList.remove("change");
});


// Side two
if (showMorePlaying) {
  document.querySelector(".show-more-playing").addEventListener("click", () => {
    sideTwoPlaying.classList.add("show-link");
    showMorePlaying.style.display = "none";
    moreLinkPlaying.style.display = "block";
    showLessPlaying.classList.add("show-link");
  });
}

if (showLessPlaying) {
  document.querySelector(".show-less-playing").addEventListener("click", () => {
    sideTwoPlaying.classList.remove("show-link");
    moreLinkPlaying.style.display = "none";
    showMorePlaying.style.display = "block";
    showLessPlaying.classList.remove("show-link");
  });
}
// End of Side two

// // Side three
// if (showSideThree) {
//   showSideThree.addEventListener("click", () => {
//     sideThree.classList.add("show-three-link");
//     threeWrapper.classList.add("show-three-link");
//     showSideThree.classList.add("show-three-link");
//     showThreeLess.classList.add("show-three-link");
//   });
// }

// if (showThreeLess) {
//   showThreeLess.addEventListener("click", () => {
//     sideThree.classList.remove("show-three-link");
//     threeWrapper.classList.remove("show-three-link");
//     showSideThree.classList.remove("show-three-link");
//     showThreeLess.classList.remove("show-three-link");
//   });
// }
// // End of Side three

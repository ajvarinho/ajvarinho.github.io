const msgWrap = document.querySelector("#msg-wrap");
const constructionWrap = document.querySelector(".under-construction");
const parallaxWrap = document.querySelector(".parallax-wrapper");

msgWrap.addEventListener("click", () => {
  console.log("click", constructionWrap);
  constructionWrap.classList.add("hide");
});

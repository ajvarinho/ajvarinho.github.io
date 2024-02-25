console.log("djesba");

const msgWrap = document.getElementById("msg-wrap");
const constructionWrap = document.querySelector(".under-construction");
const parallaxWrap = document.querySelector(".parallax-wrapper");

console.log("alo", msgWrap, constructionWrap);

msgWrap.addEventListener("click", () => {
  console.log("click", constructionWrap);
  constructionWrap.classList.add("hide");
});

console.log("djesba");

const msgWrap = document.getElementById("msg-wrap");
const constructionWrap = document.querySelector(".under-construction");
const parallaxWrap = document.querySelector(".parallax-wrapper");

console.log("alo", msgWrap, constructionWrap);

msgWrap.addEventListener("click", () => {
  console.log("click", constructionWrap);
  constructionWrap.classList.add("hide");
});

///

const box = document.querySelector(".image");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = x;
  pageY.innerText = y;
}

function getImageCoordinates(event) {
  var bounds = box.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
  let valX = Math.round(x);
  let valY = Math.round(y);
  pageX.innerText = valX;
  pageY.innerText = valY;
  if (valX < 145 && valY < 60) {
    box.classList.add("left-up");
  }
  if (valX < 145 && valY > 60 && valY < 120) {
    box.classList.add("left");
  }
  return valX, valY;
}

console.log(x, y);

box.addEventListener("mousemove", getImageCoordinates, false);
box.addEventListener("mouseenter", getImageCoordinates, false);
//box.addEventListener('mouseleave', ()=> {
//  box.classList.remove('left')
//})
box.addEventListener("mouseenter", () => {
  var bounds = box.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
  let valX = Math.round(x);
  let valY = Math.round(y);
  //if(valX < 160 && valY < 160) {
  //box.classList.add('left')
  //}
  if (valX < 145 && valY < 90) {
    box.setAttribute("class", "image");
    box.classList.add("left-up", "flash");
  }
  if (valX < 145 && valY > 90 && valY < 220) {
    box.setAttribute("class", "image");
    box.classList.add("left");
  }
  if (valX < 145 && valY > 220) {
    box.setAttribute("class", "image");
    box.classList.add("left-down");
  }
  if (valX > 145 && valY < 90) {
    box.setAttribute("class", "image");
    box.classList.add("right-up");
  }
  if (valX > 145 && valY > 90 && valY < 220) {
    box.setAttribute("class", "image");
    box.classList.add("right");
  }
  if (valX > 145 && valY > 220) {
    box.setAttribute("class", "image");
    box.classList.add("right-down");
  }
    if ((valX > 125 && valX < 200 ) && valY < 120) {
    box.setAttribute("class", "image");
    box.classList.add("up");
  }
      if ((valX > 125 && valX < 200 ) && valY > 120) {
    box.setAttribute("class", "image");
    box.classList.add("down");
  }
  
});
box.addEventListener("mouseleave", () => {
  box.classList.remove(
    "left",
    "left-up",
    "left-down",
    "right",
    "right-up",
    "right-down",
    'up',
    'down'
  );
});


const width = window.innerWidth;
let mobile;

if(width < 444){
  mobile = true;
}

const card = document.querySelector('.title__wrap');

let isResetting = false;

card.addEventListener('mousemove', (e) => {
  if (isResetting) return;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 30;
  const rotateY = ((x - centerX) / centerX) * 30;

  //card.style.transition = 'none'; // Instant response
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  isResetting = true;
  card.style.transition = 'transform 0.5s ease'; // Smooth return
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

card.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'transform') {
    isResetting = false;
    // Let the next mouse move remove transition, no need to force it here
  }
});

//device motion

function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Do something awesome.

  alert('o', x, y, z);
}

window.addEventListener("devicemotion", handleMotionEvent, true);


// S C R O L L

const wrapper = document.getElementById('wrapper');
let wrapperHeight = wrapper.offsetHeight;
const windowHeight = window.innerHeight;

const galebWraps = document.querySelectorAll('.bg-wrap__img');
const bgWrap = document.querySelector('.bg-wrap');

let scrollValue;
let scrollDistance;
let lastScrollTop = 0;
let index = 0;

const pageTitle = document.getElementById('title');

wrapper.addEventListener("scroll", e => { 

  //bgWrap.classList.add('animate');

  galebWraps.forEach((element)=> {
    element.classList.add('fire');
    element.classList.add('animate');
  })

  let scrollDistance = e.target.scrollTop;
  let st = scrollDistance; 


   if (st > lastScrollTop) {  
    index += 1;
    console.log(index, 'down');

  } else if (st < lastScrollTop) {  
    index -= 1;
    console.log(index, 'up');
  } 
  //buggy ;P
  // if(lastScrollTop < 10) {
  //   bgWrap.classList.remove('animate');
  // }

  lastScrollTop = st <= 0 ? 0 : st; 
});


const about = `
                hello, my name is Nikola and I'm
                web designer, creative coder and developer
                based in Berlin.

                I love creating functional solutions with unconventional design
                experimenting with motion graphics and
            
            interactions.
                My experience in web development, together with master's degree in philosophy and art history 
                resulted in interest for deeper creative exploration of web and computational aesthetics.
                My designs get inspired by renaissance painting and punk,
                early graffitti, album art and fonts, as well as the aesthetics of
                pre-smartphone Internet era. 
`;


const aboutText = document.querySelector('.section__text.about');

const aboutBg = document.querySelector('.glass-bg');

aboutText.innerHTML = about;
aboutBg.innerHTML = about;


//WORK


document.getElementById('load').addEventListener('click', async () => {
  const module = await import('./components/moonField.js');
  const moonField = document.createElement('moon-field');
  document.getElementById('test-wrap').appendChild(moonField);
});

//SVG FRAME
const svgWrapEl = document.querySelector(".mega-wrap");
const svgEl = document.querySelector(".svg-el");

let wrapWidth = svgWrapEl.offsetWidth;
let wrapHeight = svgWrapEl.offsetHeight;

svgEl.setAttribute("height", wrapHeight);
svgEl.setAttribute("width", wrapWidth);
svgEl.setAttribute("viewBox", `0, 0, ${wrapWidth}, ${wrapHeight}`);

const polylineTop = document.querySelector(".polyline.top");
const polylineLeft = document.querySelector(".polyline.left");
const polylineBottom = document.querySelector(".polyline.bottom");

let widthNum = Math.round(wrapWidth);
let heightNum = Math.round(wrapHeight);

let pointsTop;
let pointsLeft;
let pointsBottom;

pointsTop = `0,50 152,50 152,50 165,0 500,0, 552,50 552,50 ${widthNum},50 ${widthNum},50 ${widthNum},${
  heightNum / 4 + 50
} ${widthNum},${heightNum / 4 + 50} ${widthNum - 70},${heightNum / 4 - 50}`;

pointsLeft =
  "0,50 0,200 0,200 230,125 230,125 230,400 230,400 0,475 0,475 0,842";

pointsBottom = `0,840 ${widthNum},840 ${widthNum},840 ${widthNum},950 ${widthNum},950 400,950 400,950 370,900 370,900 0,900 0,900 0,1800`;

polylineTop.setAttribute("points", pointsTop);
polylineLeft.setAttribute("points", pointsLeft);
polylineBottom.setAttribute("points", pointsBottom);

//SVG ANIMATION
let topLength = Math.floor(polylineTop.getTotalLength());
let leftLength = Math.floor(polylineLeft.getTotalLength());
let bottomLength = Math.floor(polylineBottom.getTotalLength());
//
polylineTop.setAttribute("stroke-dasharray", topLength);
polylineTop.setAttribute("stroke-dashoffset", topLength);
//
polylineLeft.setAttribute("stroke-dasharray", leftLength);
polylineLeft.setAttribute("stroke-dashoffset", leftLength);
//
polylineBottom.setAttribute("stroke-dasharray", bottomLength);
polylineBottom.setAttribute("stroke-dashoffset", bottomLength);



const width = window.innerWidth;
let mobile;

if(width < 444){
  mobile = true;
}

// const card = document.querySelector('.title__wrap');

// let isResetting = false;

// card.addEventListener('mousemove', (e) => {
//   if (isResetting) return;

//   const rect = card.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   const centerX = rect.width / 2;
//   const centerY = rect.height / 2;

//   const rotateX = ((y - centerY) / centerY) * 30;
//   const rotateY = ((x - centerX) / centerX) * 30;

//   //card.style.transition = 'none'; // Instant response
//   card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
// });

// card.addEventListener('mouseleave', () => {
//   isResetting = true;
//   card.style.transition = 'transform 0.5s ease'; // Smooth return
//   card.style.transform = 'rotateX(0deg) rotateY(0deg)';
// });

// card.addEventListener('transitionend', (e) => {
//   if (e.propertyName === 'transform') {
//     isResetting = false;
//     // Let the next mouse move remove transition, no need to force it here
//   }
// });

//device motion

function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Do something awesome.

  //alert('o', x, y, z);
}

window.addEventListener("devicemotion", handleMotionEvent, true);


// S C R O L L

const wrapper = document.getElementById('wrapper');
let wrapperHeight = wrapper.offsetHeight;
const windowHeight = window.innerHeight;

const galebWraps = document.querySelectorAll('.welcome__img');
const bgWrap = document.querySelector('.welcome');

let scrollValue;
let scrollDistance;
let lastScrollTop = 0;
let index = 0;

const pageTitle = document.getElementById('title');

let st;

const aboutWrap = document.querySelector('.about');
const aboutHeight = aboutWrap.getBoundingClientRect();
let aboutTop = aboutHeight.y;

wrapper.addEventListener("scroll", e => { 

  let scrollDistance = e.target.scrollTop;
  st = scrollDistance; 

  if(st > 100) {
    //bgWrap.classList.add('animate');

    galebWraps.forEach((element)=> {
      element.classList.add('fire');
      element.classList.add('animate');
    })
  } else {
    //bgWrap.classList.remove('animate');
        galebWraps.forEach((element)=> {
      element.classList.remove('fire');
      element.classList.remove('animate');
    })
  }

   if (st > lastScrollTop) {  
    index += 1;
    console.log(index, 'down');

  } else if (st < lastScrollTop) {  
    index -= 1;
    console.log(index, 'up');
  } 

  console.log(st, 'aaaa')

  if(st > aboutTop){
    aboutWrap.classList.add('active');
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

`;

                // My designs get inspired by renaissance painting and punk,
                // early graffitti, album art and fonts, as well as the aesthetics of
                // pre-smartphone Internet era. 


const aboutText = document.querySelector('.about-text');

const aboutBg = document.querySelector('.about-bg');

aboutText.innerHTML = about;

//WORK

const workWrapMain = document.getElementById('work-main');
const workBgEffect = document.querySelector('.work-bg');
const projectsWrap = document.querySelector('.work__wrap');

// for(let i = 0; i < 12; i++){
//   let projectCard = document.createElement('div');
//   projectCard.setAttribute('class', 'work-card');
//   projectsWrap.appendChild(projectCard);
// };

//background: conic-gradient(from 0.15turn at 50% 50%, #f69d3c,10deg, #3f87a6, 150deg, #ebf8e1);


workWrapMain.addEventListener('mousemove', (e) => {

  const workValues = workWrapMain.getBoundingClientRect();
  let x = e.clientX - workValues.left;
  let y = e.clientY - workValues.top;

  x = Math.round(x) / 2;
  y = Math.round(y) / 2;

  console.log('mouse moving', x, y)

  //background-position: bottom 50px right 100px;

  //workBgEffect.style.backgroundPositionX = `${x}px`;
  //workBgEffect.style.backgroundPositionY = `${y}px`;
});

const dialogEl = document.querySelector("[closedby='any']");

const projectsArray = [{name: 'Raze App', tag: 'raze-app'}, {name: 'Moon Field', tag: 'moon-field'}, {name: '3D', tag: 'three-d'}];
const projectBtns = document.querySelectorAll('.project.btn');

projectBtns.forEach((btn, index) => {

  const project = projectsArray[index];
  if (project) {

    btn.textContent += ` ${project.name}`;

    btn.id = project.tag;

    btn.dataset.tag = project.tag;
  }
});

projectBtns.forEach((btn)=>{

  btn.addEventListener('click', async (e) => {

    //open dialog

      dialogEl.showModal();
      dialogEl.open = true;
      if(mobile){
        console.log('alo ba')
      }

    const module = await import(`./components/${e.target.id}.js`);
    const activeProject = document.createElement(`${e.target.id}`);

    if(document.getElementById('project-preview-dialog').children === 0) {
      document.getElementById('project-preview-dialog').appendChild(activeProject);
    } else {
      document.getElementById('project-preview-dialog').innerHTML = '';
      document.getElementById('project-preview-dialog').appendChild(activeProject);
    }

  });

})

document.getElementById('close-dialog').addEventListener('click', ()=>{
  dialogEl.open = false;
  dialogEl.close();
})

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



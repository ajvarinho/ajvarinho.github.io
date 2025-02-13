console.log("djesba");

//dark mode
let userPrefersDark

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  userPrefersDark = true;
} else {
  userPrefersDark = false;
}

const switchEl = document.querySelector('input[name=switch-mode]');

if(userPrefersDark){
    switchEl.checked = true;
  } else {
    switchEl.checked = false;
  }

document.addEventListener("DOMContentLoaded", function (event) {
  let selectorWrap = document.querySelector('.mode')
  if(userPrefersDark){
    selectorWrap.style.border = '2px solid white';
  }
  switchEl.addEventListener('change', function (event) {
      if (switchEl.checked) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          selectorWrap.style.border = '2px solid white';
      } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode')
          selectorWrap.style = '';
      }
  });
});

//SVG
const svgWrap = document.getElementById('svg-wrap');
const svgBackground = document.getElementById('svg-bg');
let wrapHeight = svgWrap.offsetHeight;
let wrapWidth = svgWrap.offsetWidth;

svgBackground.setAttribute('viewBox', `0, 0, ${wrapWidth}, ${wrapHeight}`)

window.addEventListener('resize', ()=> {
  wrapHeight = svgWrap.offsetHeight;
  wrapWidth = svgWrap.offsetWidth;
  svgBackground.setAttribute('viewBox', `0, 0, ${wrapWidth}, ${wrapHeight}`)
})

// efekti

//feGaussianBlur stdDeviation="0.5"

const blurLevel = document.getElementById('blur-level');

window.addEventListener('scroll', ()=>{
  console.log('scrolling', window.scrollY);
  let scrollFactor = window.scrollY * 0.01;
  console.log(scrollFactor, 'alooo')
  blurLevel.setAttribute('stdDeviation', scrollFactor);
})

const a11yBtn = document.getElementById('a11y-menu')
const a11yCloseBtn = document.getElementById('close-a11y')
const accessibilityWrap = document.querySelector('.a11y-menu')
//
const letterSpacing = document.getElementById('letter-spacing')

a11yBtn.addEventListener('click', ()=>{
  accessibilityWrap.classList.add('active');
  a11yBtn.setAttribute('aria-expanded', 'true');
})

a11yCloseBtn.addEventListener('click', ()=>{
  accessibilityWrap.classList.remove('active');
  a11yBtn.setAttribute('aria-expanded', 'false');
})

// text elements 
let textElements

let currentLocation = window.location.pathname;

function setFontSize(arr, string){
  arr.forEach(element => {
    element.setAttribute('class', '')
    element.classList.add('font-'+ `${string}`)
  });
}

function setLetterSpacing(arr, string){
  let spacingValue
  if(string.length === 1){
    spacingValue = Number(string)
  }
  arr.forEach(element => {
    element.style.letterSpacing = spacingValue + 'px'
  })
}

const smallFont = document.getElementById('small');
const defaultFont = document.getElementById('default');
const largeFont =  document.getElementById('large');

accessibilityWrap.addEventListener('change', (e)=>{
  console.log('test click', e.target, e.target.value, typeof e.target.value)
  let selectedValue = e.target.value
  if(e.target.type ==='radio') {
    setFontSize(textElements, selectedValue)
  } else {
    setLetterSpacing(textElements, selectedValue)
  }
  e.preventDefault()
})

setTimeout(() => {
  accessibilityWrap.classList.remove('hidden');
  textElements = document.querySelectorAll('.content-wrap p');
}, 1000);

const openNav = document.getElementById('nav-menu_mobile');
const navMenu = document.getElementById('nav-el');

openNav.addEventListener('click', ()=>{
  console.log('alo re', navMenu)
  navMenu.classList.toggle('open');
})

//reselect text elements if 'route' has changed

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
      return;
  }
  if(target.href !== '/'){
    //
    //mozda tu animacija
    //
    //console.log("CHECK", document.querySelector('#content section'))
    //
    setTimeout(() => {
      textElements = document.querySelectorAll('.content-wrap p');
    }, 500);
  }
});


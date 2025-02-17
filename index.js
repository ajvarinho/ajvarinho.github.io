console.log("djesba");

const header = document.getElementById('header');
const headerBg = document.getElementById('header-bg');
const aboutBtn = document.getElementById('about');
const workBtn = document.getElementById('work');
const contactBtn = document.getElementById('contact');
const contentWrapper = document.getElementById('content-wrapper');
const bgImg = document.getElementById('bg-img');
const mainHTML = document.getElementById("content");
const navWrap = document.getElementById('nav-wrap');
const navEl = document.getElementById('nav-el');
const titleWrap = document.querySelector('.title-wrap');
const pageTitle = document.getElementById('page-title');

if(window.innerWidth < 400){
  navEl.classList.add('mobile');
  mainHTML.insertBefore(titleWrap, navWrap);

}


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

//const blurLevel = document.getElementById('blur-level');


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


// TEXT SCROLL
// Function to get symbols excluding letters and numbers
function getAllSymbols() {
  let symbols = [];

  for (let i = 33; i <= 0x10FFFF; i++) {
      let char = String.fromCodePoint(i);

      if (!/[a-zA-Z0-9]/.test(char) && char.trim() !== '') {
          symbols.push(char);
      }
      if (symbols.length > 200) break; 
  }
  return symbols;
}

const allSymbols = getAllSymbols();
console.log(allSymbols);

function randomNumbers() {
  let randumNum = [];
  for(i = 0; i <= 199; i++){
    let number = Math.floor(Math.random() * i);
    randumNum.push(number);
  }
  return randumNum;
}

const parallaxWrap = document.getElementById('parallax-wrap');
const textCard = document.querySelector('.text-card');
const textToMove = document.querySelector('.position-main');
const textToScroll = document.querySelector('.position-move');
const svgTextWrap = document.querySelector('.svg-text-wrap');
//
let index = 0;
const windowHeight = window.innerHeight;
console.log(windowHeight);
let parallaxWrapStyle = window.getComputedStyle(parallaxWrap);
let position = parallaxWrapStyle.bottom;

position = position.replace(/[^\d.-]/g, '');
position = Math.floor(position);

function handleText(arr){
  const randomArr = randomNumbers();
  const matchedArray = randomArr.map(i => allSymbols[i]);
  index += 1; 
  console.log(index, 'index')
  //textToScroll.textContent += matchedArray[index]; 
  textToScroll.textContent += matchedArray.slice(index, index + 5).join('');
  textToScroll.style.opacity = 1;
}

function handleTransitions(){
  let scrollValue = Math.round(window.scrollY);

  let scrollDistance = windowHeight - (windowHeight - scrollValue);

  console.log(scrollDistance, 'distance')
  index += 1; 
  textToMove.style.textShadow = `-${index}px ${index}px 2px rgb(18, 18, 20), 0 0 .1em rgb(26, 255, 0), 0 0 0.2em rgb(32, 31, 30)`;
  //textToMove.style.boxShadow = `${scrollValue / 2}px ${index}px 2px rgb(18, 18, 20), 0 0 .1em rgb(26, 255, 0), 0 0 ${scrollValue}px rgb(32, 31, 30)`;
  
  //let newPosition = position - scrollDistance;
  //parallaxWrap.style.bottom = newPosition + 'px'

  if (scrollDistance >= windowHeight){
    svgTextWrap.classList.add('show');
  } else {
    svgTextWrap.classList.remove('show')
  }
}

window.addEventListener('scroll', ()=>{
  handleText(allSymbols);
  handleTransitions();
})

const openNav = document.getElementById('nav-menu_mobile');
const navMenu = document.getElementById('nav-el');

openNav.addEventListener('click', ()=>{
  console.log('alo re', navMenu)
  navMenu.classList.toggle('open');
})

const arrIntro = ['hello', ',', 'my', 'name', 'is', 'Nikola', 'and', 'I', 'am', 'web designer', 'creative coder', 'and', 'developer', 'based in Berlin'];
const arrStuff = ['I', 'love', 'creating', 'functional', 'solutions', 'with', 'unconventional', 'design', 'experimenting with', 'motion', 'graphics', 'and', 'interactions'];
const arrBg = ['My', 'MA', 'degree', 'in philosophy and', 'art history',',', 'together with', 'experience in', 'web development', 'resulted in', 'interest for', 'deeper', 'creative exploration', 'of web and computational', 'aesthetics.'];
const arrInspo = ['My', 'designs', 'are inspired by', 'renaissance paintings,', 'post-modern deconstruction', ',', 'early graffiti', 'album art', 'and fonts', 'as well as', 'the aesthetics of', 'pre-2001 Internet era.'];

const about = `
  <div class="text-card">
      <div class="text-wrap">
          <p class="text position-main">
          </p>
          <p class="text position-move">
          </p>
      </div>
</div>
                    
<div class="welcome-card">
    <img class="welcome-img" src="" alt="">
</div>
        `;

const work = `
        <div class="template__main">


            <div class="content-wrap archivo-test">
                <p id="template__desc" class="content-title archivo-test">{{}}</p>
                <div id="template__grid-wrap" class="template__grid-wrap">

                </div>
            </div>
        </div>
        `;

const contact = `
    <div class="contact-card">
        <p>polamekkartnija@gmail.com</p>
        <a href="https://www.instagram.com/njikola_123?igsh=MTRlbjN0d2cxMHRhMg%3D%3D&utm_source=qr" target="_blank">Instagram</a>
    </div>
`;

//transitions

function toggleMenu(){
  if(navEl.classList.contains('mobile')){
    navEl.classList.remove('open');
  } else {
    navEl.classList.add('hide');
  }
}

aboutBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = about;
    toggleMenu();
    pageTitle.classList.add('show');
    pageTitle.innerHTML = 'About';
    //bgImg.src = './public/img/golf.png';
    document.addEventListener('scroll', ()=>{
      handleTransitions();
    })
});

workBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = work;
    toggleMenu();
    pageTitle.innerHTML = 'Work';
});

contactBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = contact;
    toggleMenu();
    pageTitle.innerHTML = 'Contact';
});



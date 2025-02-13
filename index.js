console.log("djesba");

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



const about = `

        <div class="content-card">
            <img src="../public/img/me.png" alt="" class="content-card__img">
        </div>

        <div class="content-card">

            <p>hello, my name is Nikola and I'm</p>
            <p>
                web designer, creative coder and developer<br/>
                based in Berlin
            </p>

            <p>
                I love creating functional solutions with unconventional design <br/>
                experimenting with motion graphics and
            </p>
            <p>interactions</p>

            <p>
                My MA degree in philosophy and art history, together with experience in web development <br/>
                resulted in interest for deeper creative exploration of web and computational aesthetics.
            </p>
            <p>
                My designs are inspired by renaissance paintings, post-modern deconstruction, <br/>
                early graffitti, album art and fonts, as well as the aesthetics of<br/>
                pre-2001 Internet era. <br/>
                I like to call it digital situationism.
            </p>
        </div>`;

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
    bgImg.src = './public/img/holbein.png';
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



console.log('alo');

const width = window.innerWidth;
let mobile;

console.log(width)

if(width < 444){
  mobile = true;
}

const moonFieldHTML = `
<div class="moon-field">
  <div>
    <div class="moon">

    </div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
  <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
    <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
    <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
    <div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
    <div class="moon"></div>
  </div>
</div>
`;

const textFieldHTML = `
  <div class="room">

      <a tabindex="1" accesskey="W" class="moveForward" id="moveForward" href="#moveForward" ></a>
      <a tabindex="2" accesskey="A" class="turnLeft" id="turnLeft" href="#turnLeft"></a>
      <a tabindex="5" accesskey="X" class="stop" id="stop" href="#stop"></a>
      <a tabindex="3" accesskey="D" class="turnRight" id="turnRight" href="#turnRight"></a>
      <a tabindex="4" accesskey="S" class="moveBack" id="moveBack" href="#moveBack"></a>
      
      <div class="scene">
        <div class="front wall">
           <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="left wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="right wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>

        <div class="back wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
      </div>

      <div class="scene scene-two">
        <div class="front wall">
           <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="left wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="right wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>

        <div class="back wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
      </div>

      <div class="scene scene-three">
        <div class="front wall">
           <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="left wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
        <div class="right wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>

        <div class="back wall">
          <div class="marquee">
            <p>Odnos mojih roditelja naucio me kako da zastitim sebe.</p>
          </div>
        </div>
      </div>
    </div>
`;

const open = document.getElementById('card-open');
const content = document.getElementById('card-content');

const workMainInterface = document.getElementById('work-main');
const moonField = document.querySelector('.moon-field');
const textField = document.querySelector('.text-field');

console.log(mobile)

function moonFunction(){
    const moons = document.querySelectorAll('.moon')
    if(mobile){
      moons.forEach((element)=>{ element.addEventListener('pointerdown', ()=> {
        element.classList.toggle('move')
       })
     })
    } else {
      moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
        element.classList.toggle('move')
       })
     })
    }
}


moonField.innerHTML = moonFieldHTML;
textField.innerHTML = textFieldHTML;

let active = Boolean;

const closeWork = document.getElementById('close');


closeWork.addEventListener('click', ()=> {
  workMainInterface.classList.remove('active-preview');
});

if(mobile){
  workMainInterface.addEventListener('click', (e)=>{
    e.preventDefault;
    if(mobile){
      workMainInterface.classList.add('active-preview');
    } else {
      workMainInterface.classList.toggle('active-preview');
    }
    if(workMainInterface.classList.contains('active-preview')){
      active = true;
      closeWork.classList.add('visible');
    }
    if(active){
      moonFunction();
    }
  });
}

workMainInterface.addEventListener('click', ()=>{
  workMainInterface.classList.toggle('active-preview');
  if(workMainInterface.classList.contains('active-preview')){
    active = true;
  }
  if(active){
    moonFunction();
  }
})



const wrapper = document.getElementById('wrapper');
let wrapperHeight = wrapper.offsetHeight;


let scrollValue;
let scrollDistance;
let lastScrollTop = 0;
let index = 0;
const windowHeight = window.innerHeight;

const pageTitle = document.getElementById('title');
const galeboviWrap = document.querySelector('.bg-decor');

console.log(wrapperHeight, windowHeight)

wrapper.addEventListener("scroll", e => { 

  let scrollDistance = e.target.scrollTop;

  if(scrollDistance > 500) {
    pageTitle.classList.add('small');
    galeboviWrap.style.opacity = 0;
  } else {
    galeboviWrap.style.opacity = 1;
    //pageTitle.classList.remove('small');
  }

  console.log(wrapperHeight, e.target.scrollTop)

   var st = window.scrollY || document.documentElement.scrollTop; 

   if (st > lastScrollTop) {  

    index+=1;
    console.log(index, 'down');

  } else if (st < lastScrollTop) {  

    index -=1;
    console.log(index, 'up');

  } 

  lastScrollTop = st <= 0 ? 0 : st; 
});


function handleTransitions(scrollDistance){
  index += 1; 
  //textToMove.style.textShadow = `-${index}px ${index}px 2px rgb(18, 18, 20), 0 0 .1em rgb(26, 255, 0), 0 0 0.2em rgb(32, 31, 30)`;
  
  if (scrollDistance >= windowHeight){
    //adWrap.classList.add('show');
    adImg.classList.add('on');
  } else {
    //adWrap.classList.remove('show')
    adImg.classList.remove('on');
  }
}


const about = `hello, my name is Nikola and I'm a web designer, creative programmer and developer based in Berlin. <br/>
               I build websites, design for web and social media, create motion graphics and experiment with code <br/>
               my approach to design is unconventional, drawing inspiration from ... and my background in art history 
               and philosophy.
               I work mostly with CSS, JavaScript (p5.js, three.js) and SVG. Experiments with this stack, along with 
               experience as a developer resulted in interest for deeper creative exploration of web and computational aesthetics.     
`;


const aboutText = document.querySelector('.section__text.about');

aboutText.innerHTML = about;




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


const workWrap = document.getElementById('work-main');
const moonField = document.querySelector('.moon-field');
const textField = document.querySelector('.text-field');
const closeBtn = document.getElementById('close');

moonField.innerHTML = moonFieldHTML;
textField.innerHTML = textFieldHTML;
const roomEl = document.querySelector('.room');

if(mobile){
  roomEl.classList.add('mobile');
}

function moonFn(){
    const moons = document.querySelectorAll('.moon')
      moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
        console.log('movinnnn')
        element.classList.toggle('move')
       })
     })
}

function moonFnMobile(){
  const moons = document.querySelectorAll('.moon');
  moons.forEach((element)=>{ element.addEventListener('click', ()=> {
    element.classList.toggle('move')
   })
 })
}

workWrap.addEventListener('click', ()=>{
  const moons = document.querySelectorAll('.moon')
  if(mobile){
    workWrap.classList.add('mobile')
    closeBtn.classList.add('visible')
    workWrap.classList.add('active-preview');
    moons.forEach((element)=>{ element.addEventListener('click', ()=> {
      element.classList.toggle('move')
     })
   })
  } else {
    workWrap.classList.toggle('active-preview');
    moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
      element.classList.toggle('move')
     })
   })
  }
})

closeBtn.addEventListener('click', (e)=>{
  // console.log('close', e.target);
  // let parent = e.target.parentElement;
  // console.log(parent)
  if(workWrap.classList.contains('active-preview')){
    workWrap.classList.remove('active-preview')
  }
  closeBtn.classList.remove('visible');
})

// if(workWrap.classList.contains('active-preview')){
//   const moons = document.querySelectorAll('.moon');
//   if(workWrap.classList.contains('mobile')){
//     moons.forEach((element)=>{ element.addEventListener('click', ()=> {
//       element.classList.toggle('move')
//      })
//    })
//   } else {
//     moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
//       console.log('movinnnn')
//       element.classList.toggle('move')
//      })
//    })
//   }
// }



// S C R O L L

const wrapper = document.getElementById('wrapper');
let wrapperHeight = wrapper.offsetHeight;

const galebWraps = document.querySelectorAll('.bg-wrap__img')

let scrollValue;
let scrollDistance;
let lastScrollTop = 0;
let index = 0;
const windowHeight = window.innerHeight;

const pageTitle = document.getElementById('title');


console.log(wrapperHeight, windowHeight)

wrapper.addEventListener("scroll", e => { 

  console.log('scroll')
  galebWraps.forEach((element)=> {
    element.classList.add('fire');
  })

  galebWraps[0].classList.add('animate');
  galebWraps[1].classList.add('animate-two');

  let scrollDistance = e.target.scrollTop;
  let st = window.scrollY || document.documentElement.scrollTop; 

   if (st > lastScrollTop) {  

    index += 1;
    console.log(index, 'down');

  } else if (st < lastScrollTop) {  

    index -= 1;
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

aboutText.innerHTML = about;




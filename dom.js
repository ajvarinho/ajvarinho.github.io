console.log("djesba");

const openAccessibilityMenu = document.getElementById('a11y-menu')
const accessibilityWrap = document.querySelector('.a11y-menu')

openAccessibilityMenu.addEventListener('click', ()=>{
  console.log('alo')
  accessibilityWrap.classList.toggle('active')
})



const smallFont = document.getElementById('small')

smallFont.addEventListener('change', ()=>{
  console.log('change')
})
const galebJedan = document.getElementById('galeb-jedan')
const galebDva = document.getElementById('galeb-dva')

const parallaxWrap = document.querySelector('.parallax-wrapper')
const brodEl = document.getElementById('brod')

galebJedan.addEventListener('click', ()=>{
    galebDva.classList.add('active')
    parallaxWrap.classList.add('zoom')
    brodEl.classList.add('move-left')
})
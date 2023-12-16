const galebJedan = document.getElementById('galeb-jedan')
const galebDva = document.getElementById('galeb-dva')

galebJedan.addEventListener('click', ()=>{
    galebDva.classList.add('active')
})
const slides = document.querySelectorAll('.slider-items__slide')
const prevBt = document.querySelector('.slider-nav__prev')
const nextBt = document.querySelector('.slider-nav__next')
const Puls = document.querySelectorAll('.pul') //массив элементов пульки


let activeSlide = 0
// let activePul = 0 // счетчик активной пульки

function showSlide(){
    if (document.querySelector('.slider-items__slide.active'))
    {
        document.querySelector('.slider-items__slide.active').classList.remove('active')

        // console.log( document.querySelector('.slider-items__slide'))
    }

    if (document.querySelector('.pul.active'))
    {
        document.querySelector('.pul.active').classList.remove('active')

        // console.log( document.querySelector('.slider-items__slide'))
    }

    slides[activeSlide].classList.add('active')
    Puls[activeSlide].classList.add('active')
}
showSlide()

prevBt.onclick = function(e){
    e.preventDefault()

    if(activeSlide == 0) activeSlide = slides.length

    activeSlide--

    showSlide()
}

nextBt.onclick = function(e){
    e.preventDefault()
    activeSlide++

    if(activeSlide === slides.length) activeSlide = 0

    

    showSlide()
}





Puls.forEach((pul, i) => {
    
    pul.onclick = function(event) {

        event.preventDefault()

        if(!this.classList.contains('active')) {

            document.querySelector('.pul.active').classList.remove('active')
            this.classList.add('active')
            activeSlide = i
            
        }
        console.log(activeSlide , i)
        showSlide()
    }

})



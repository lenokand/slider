const slides = document.querySelectorAll('.slider-items__slide')
const prevBt = document.querySelector('.slider-nav__prev')
const nextBt = document.querySelector('.slider-nav__next')



let activeSlide = 0


// let activePul = 0 // счетчик активной пульки


    function GeneratePul(){
        for (let i = 0; i < slides.length ; i++) {   
            if (i === 0 ) {
                document.querySelector(".slider-nav__pul").innerHTML +='<a href="#" class="pul active"></a>'
                i++
                }

            document.querySelector(".slider-nav__pul").innerHTML += '<a href="#" class="pul"></a>'
               
        }
       
    }
    GeneratePul()
    const Puls = document.querySelectorAll('.pul') //массив элементов пульки

   
    
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

    activeSlide--//номер последнго элемента = длина-1, тк массив начинается с нуля

    showSlide()
    console.log('<', activeSlide )
}

nextBt.onclick = function(e){
    e.preventDefault()
    activeSlide++

    if(activeSlide === slides.length) activeSlide = 0

    

    showSlide()
    console.log('>', activeSlide )
}





Puls.forEach((pul, i) => {
    
    pul.onclick = function(event) {

        event.preventDefault()

        if(!this.classList.contains('active')) {

            document.querySelector('.pul.active').classList.remove('active')
            this.classList.add('active')
            activeSlide = i
            
        }
        console.log('пульки', activeSlide )
        showSlide()
    }

})


// авто переключение
setInterval(function(){
    activeSlide++

    if(activeSlide === slides.length) activeSlide = 0
   
    showSlide()
    console.log("авто переключение" , activeSlide)
}, 2500)


const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const slideswrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;
const activSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide =ind =>{ //making code shorter
    activSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}
console.log(activSlide);
const prevSlide = () => {
    if (index == 0) {
        index=slides.length - 1;
        prepareCurrentSlide(index);
        clearInterval(interval);
    } else {
        index--;
        prepareCurrentSlide(index);
        clearInterval(interval);
        // activSlide(index);-> making code shorter -> prepareCurrentSlide(index);
        // activeDot(index);->
    }
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active');
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click', ()=>{
        index= indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


const interval=setInterval(nextSlide, 2500); 


const slideContainer = document.querySelector('.carousel_container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

/* console.log(slides); */

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '1s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();



/* scroll spy */
/* let section = documen.querySelectorAll('section');
let nsvLinks = document.querySelectorAll('.menu_nav a');

window.onscroll = () => {
  section.forEach(sec => {

    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.menu_nav a[href*=' + id + ']').classList.add('active')
      });
    }
  })
} */


const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigasi = document.querySelector('.menu-nav');
/* console.log(windowHeight); */

function reset(){
    for (var i = 0; i < navigasi.children.length; i++){
        navigasi.children[i].classList.remove('halaman_aktif');
    }
}

window.addEventListener('scroll', function(){
  const scrrollTop = window.scrollY;
  sections.forEach(function(section, i){
    if (section.offsetTop < scrrollTop + windowHeight/3 && scrrollTop < section.offsetTop + windowHeight/3) {
        reset();
      
        
        navigasi.children[i].classList.add('halaman_aktif');

    }
  });

});


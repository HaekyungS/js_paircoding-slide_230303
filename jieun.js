

const root = document.getElementById('root');
function elementMaker(name,target,attri,attriValue){
    const element = document.createElement(name);
    target.appendChild(element);
    if(attri!==undefined){
    element.setAttribute(attri,attriValue);
    }
}
elementMaker('main',root,'id','slide');
let main = document.getElementById('slide');
for(i=1; i<4; i++){
elementMaker('section',main,'id',`slider${i}`);
const section= document.getElementById(`slider${i}`);
elementMaker('img',section);
elementMaker('p',section);
}
let section1= document.getElementById('slider1');
let section2= document.getElementById('slider2');
let section3= document.getElementById('slider3');
//테스트스타일
section1.style.width='1000px';
section1.style.height='500px';
section1.style.backgroundColor='gray';

//시간초 초기설정
let loopInterval = setInterval(() => {
    nextMove();
    }, 3000);

//알아보자
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const dotsContainer = document.createElement('nav');
slider.appendChild(dotsContainer);
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => {
    clearInterval(intervalId);
    changeSlide(i);
    intervalId = setInterval(() => changeSlide(i + 1), 5000);
  });
  dotsContainer.appendChild(dot);
}
let currentSlide = 0;
let intervalId = setInterval(() => changeSlide(currentSlide + 1), 5000);
function changeSlide(nextSlide) {
  slides[currentSlide].style.opacity = 0;
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (nextSlide + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
  dotsContainer.children[currentSlide].classList.add('active');
}





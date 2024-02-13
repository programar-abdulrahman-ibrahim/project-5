const  navbarToggle= document.querySelector('.menu-toggle');
    const navbarMenu =document.querySelector('.menu')
    navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active');
    });
    navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.replace('close');
    });
 
const items = document.querySelectorAll('.client_section .carousel .box');
const prevButton = document.querySelector('.client_section #prev');
const nextButton = document.querySelector('.client_section #next');
let currentIndex = 0;


items[currentIndex].style.display = 'block';

prevButton.addEventListener('click', () => {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].style.display = 'block';
});
nextButton.addEventListener('click', () => {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = 'block';
});
  
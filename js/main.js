/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== SKILLS TABS ====================*/


let number = document.getElementById("number")
let inside = parseInt(document.getElementById('number').getAttribute('value'));
let counter = 0;
setInterval(() => {
    if (counter == inside){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }

}, 2000/inside)

let number_1 = document.getElementById("number_1")
let inside_1 = parseInt(document.getElementById('number_1').getAttribute('value'));
let counter_1 = 0;
setInterval(() => {
    if (counter_1 == inside_1){
        clearInterval();
    }else{
        counter_1 += 1;
        number_1.innerHTML = counter_1 + "%";
    }

}, 2000/inside_1)

let number_2 = document.getElementById("number_2")
let inside_2 = parseInt(document.getElementById('number_2').getAttribute('value'));
let counter_2 = 0;
setInterval(() => {
    if (counter_2 == inside_2){
        clearInterval();
    }else{
        counter_2 += 1;
        number_2.innerHTML = counter_2 + "%";
    }

}, 2000/inside_2)

let number_3 = document.getElementById("number_3")
let inside_3 = parseInt(document.getElementById('number_3').getAttribute('value'));
let counter_3 = 0;
setInterval(() => {
    if (counter_3 == inside_3){
        clearInterval();
    }else{
        counter_3 += 1;
        number_3.innerHTML = counter_3 + "%";
    }

}, 2000/inside_3)

let number_4 = document.getElementById("number_4")
let inside_4 = parseInt(document.getElementById('number_4').getAttribute('value'));
let counter_4 = 0;
setInterval(() => {
    if (counter_4 == inside_4){
        clearInterval();
    }else{
        counter_4 += 1;
        number_4.innerHTML = counter_4 + "%";
    }

}, 2000/inside_4)

let number_5 = document.getElementById("number_5")
let inside_5 = parseInt(document.getElementById('number_5').getAttribute('value'));
let counter_5 = 0;
setInterval(() => {
    if (counter_5 == inside_5){
        clearInterval();
    }else{
        counter_5 += 1;
        number_5.innerHTML = counter_5 + "%";
    }

}, 2000/inside_5)

let number_6 = document.getElementById("number_6")
let inside_6 = parseInt(document.getElementById('number_6').getAttribute('value'));
let counter_6 = 0;
setInterval(() => {
    if (counter_6 == inside_6){
        clearInterval();
    }else{
        counter_6 += 1;
        number_6.innerHTML = counter_6 + "%";
    }

}, 2000/inside_6)

let number_7 = document.getElementById("number_7")
let inside_7 = parseInt(document.getElementById('number_7').getAttribute('value'));
let counter_7 = 0;
setInterval(() => {
    if (counter_7 == inside_7){
        clearInterval();
    }else{
        counter_7 += 1;
        number_7.innerHTML = counter_7 + "%";
    }

}, 2000/inside_7)

    
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
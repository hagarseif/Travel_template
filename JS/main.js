// show menu
let navMenu=document.getElementById("nav-menu"),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show_menu')
    })
}    

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    })
}

let navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    let navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))
////////////////////////////////////////////////////////
// header scroll

function scrllHeader(){
    let header=document.getElementById('header');
    if(this.scrollY>=200){
        header.classList.add('scroll-header');
    }
    else
    header.classList.remove("scroll-header")
}
window.addEventListener('scroll',scrllHeader)

///////////////////////SWIPER/////////////////
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
    rotate: 0,
    },

});

//////////////////////////////////////////////VIDEO////////////////
let videoFile=document.getElementById('video-file'),
    videoButton=document.getElementById('video-button'),
    videoIcon=document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        videoFile.play()

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else{
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click',playPause);

function videoEnd(){
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
videoFile.addEventListener('ended',videoEnd);

//////////////////SCROLL UP//////////////////////
function scrollUp(){
    let scroll=document.getElementById('scroll-up');
    if(this.scrollY>=200){
        scroll.classList.add('show-scroll')
    }
    else scroll.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/////////////////////////SCROLL ACTIVE LINK//////////////////
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
////////////////////////////////////Dark Light mood////////////////////////
let themeButton=document.getElementById('theme-button');
let darkTheme='dark-theme';
let iconTheme='ri-sun-line';

let selectedTheme=localStorage.getItem('selected-theme')
let selectedIcon=localStorage.getItem('selected-icon');

let getCurrentTheme=()=> document.body.classList.contains(darkTheme)?'dark' : 'light';
let getCurrentIcon =()=> themeButton.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line'? 'add' :'remove'](iconTheme)
}
 themeButton.addEventListener('click',()=>{
     document.body.classList.toggle(darkTheme);
     themeButton.classList.toggle(iconTheme);
     localStorage.setItem('selcted-theme',getCurrentTheme())
     localStorage.setItem('selected-icon',getCurrentIcon())
 })

///////////////////////////scrollreveal//////////////////////
let sr=ScrollReveal({
    distance:'60px',
    duration:2800,
    reset:true,
})
sr.reveal(`.home__data , .home__social-link, .home__info, .discover__container,
        .experiance__data , .experiance__overlay, .place__card,
        .footer__data, .footer__rights, .sponser__content`
        ,{
    origin:'top',
    interval:100,
})
sr.reveal('.about__data , .video__discription, .subscribe__description',{
    origin:'left',
})
sr.reveal('.about__img-overlay, .video__content, .subscribe__form',{
    origin:'right',
    interval:100,

})
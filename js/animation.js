const hero = document.querySelector('.hero');
const backgroundSlider = document.querySelector('.background-slider');
const logo = document.querySelector('.logo');
const backgroundCirle = document.querySelector('.background-circle-right');
const navLinks = document.querySelector('.nav-links');
const heroHeadline = document.querySelector('.hero-headline');



const tl = new TimelineMax()

tl.fromTo(hero,1,{height: "0%"},{height:"80%", ease: Power2.easeInOut})
.fromTo(hero,1.2,{width: '100%'},{width: '80%', ease: Power2.easeInOut})
.fromTo(heroHeadline,1,{opacity:'0%'},{opacity:"100%", ease: Power2.easeInOut})
.fromTo(backgroundCirle,2,{y:'-100%'},{y:"0%", ease: Power2.easeInOut},"-=2")
.fromTo(navLinks,1,{opacity:'0%'},{opacity:'100%', ease: Power2.easeInOut},"-=1.7")
.fromTo(logo,1,{opacity:'0%'},{opacity:'100%', ease: Power2.easeInOut},"-=0.3")




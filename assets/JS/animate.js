const menu = document.querySelector('#menuIcon');
const navbar = document.querySelector('#navbar');
const cross = document.querySelector('#close');
 
let tl = gsap.timeline();

tl.to("#menuIcon",{
    display: 'none',
})
tl.to('#navbar',{
    right: 0,
    display: 'block',
})
tl.from('#navbar h4',{
    x: 140,
    opacity: 0,
    stagger: 0.3,
    duration: 0.4,
})
tl.from('#navbar img',{
    opacity: 0,
    duration: 0.2,
})
tl.pause()
menu.addEventListener('click',function(){
    tl.play()
})
cross.addEventListener('click',function(){
    tl.reverse()
})
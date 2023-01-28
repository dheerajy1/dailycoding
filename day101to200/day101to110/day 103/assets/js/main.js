/*Menu show y hidden */
const navMenu =  document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/* Menu show*/
/*Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu Hidden*/
/*Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*Remove menu mobile */
const navLinks = document.querySelectorAll('.nav__link')
// When we click on each nav__link, we remove the show-menu class
navLinks.forEach((link) => {link.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})})

/*Accordion skills */
/*Qualification tabs */
/*Services model */
/* */

gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a')
const activeNav = document.querySelector('.active-nav')

links.forEach(link =>{
    link.addEventListener('click',()=>{
        gsap.to(link,{color: '#252525'})

        if(document.activeElement === link){
            gsap.to(link,{color: '#385ae0'})
        }
        const state = Flip.getState(activeNav)
        link.appendChild(activeNav)
        Flip.from(state,{
            duration: 0.5,
            absolute: true,
            ease: 'elastic.out(1,0.5)'
        })
    })
})
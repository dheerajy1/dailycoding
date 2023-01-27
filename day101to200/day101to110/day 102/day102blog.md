Today #Day102 of #100DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Header & Nav Menu

defining a header with a class and ID inside this defining and now container with A tag and then defining a dev inside this Dube create an unordered list and inside this create child elements with list tag,

```xml
 <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Alexa</a>
        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list grid">
                <li class="nav__item">
                    <a href="" class="nav__link"></a>
                </li>
            </ul>
        </div></nav>
    </header>
```

Now, head to this [\[link\]](https://iconscout.com/unicons/explore/line)for icons, I am using [font awesome](https://fontawesome.com/icons/house?s=solid&f=classic)

```xml
<li class="nav__item">
    <a href="#home" class="nav__link">
        <i class="fa-solid fa-house"></i> Home
    </a>
</li>
<li class="nav__item">
    <a href="#about" class="nav__link">
        <i class="fa-solid fa-user"></i> About
    </a>
</li>
<li class="nav__item">
    <a href="#skills" class="nav__link">
        <i class="fa-solid fa-file-lines"></i> Skills
    </a>
</li>
<li class="nav__item">
    <a href="#services" class="nav__link">
        <i class="fa-solid fa-briefcase"></i> Services
    </a>
</li>
<li class="nav__item">
    <a href="#portfolio" class="nav__link">
        <i class="fa-solid fa-image"></i> Portfolio
    </a>
</li>
</li>
<li class="nav__item">
    <a href="#skills" class="nav__link">
        <i class="fa-solid fa-paper-plane"></i> Contactme
    </a>
</li>
```

Now, create a div for nav toggle

```xml
<div class="nav__btns">
    <div class="nav__toggle" id="nav-toggle">
    <i class="fa-solid fa-grip" id=""></i>
    </div>
</div>
```

## CSS

style the header

```css
.header{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
}
```

styling the NAV,

```css
.nav{
    max-width: 968px;
    height: var(--hearder-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav__logo,.nav__toggle{
    color: var(--text-color);
    font-weight: var(--font-medium);
}
.nav__logo:hover{
    color: var(--first-color);
}
.nav__toggle{
    font-size: 1.1rem;
    cursor: pointer;
}
.nav__toggle:hover{
    color: var(--first-color);
}
```

now media query,

to view the effect of this media query go to the developer console and resize the window,

```css
@media screen and (max-width:767px){
    .nav__menu{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }
}
```

Display the Nav list in grid columns,

```css
.nav__list{
    grid-template-columns: repeat(3 ,1fr);
    gap: 2rem;
}
```

styling the nav links,

change colour when hoverd

```css
.nav__link{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
}
.nav__link:hover{
color: var(--first-color);
}
```

styling the icons,

add class to the tag i for each icon in index.html,

use all to select multiple lines and modify them,

```css
.nav__icon{
    font-size: 1.2rem;
}
```

styling the close button,

```css
.nav__close{
    position: absolute;
    right: 1.3rem;
    bottom: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);
}
.nav__close:hover{
    color: var(--first-color-alt);
}
```

the media query containing NAV menu class,

```css
 bottom: -100%;
```

## Javascript

declare constant variables pick the nav menu class,

```javascript
const navMenu =  document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')
```

Now add event listener to the navToggle,

```javascript
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
```

## CSS

Now, style show-menu with botton property,

```css
.show-menu{
    bottom: 0;
}
```

## Javascript

remove the menu mobile,

In the below code we have selected all the nav links using its class and and we are adding an add event listener to each icon and whenever you click it it will call the link action function this will remove the class list show menu menu element the end result is the menu will be closed that is the bottom percentage is getting assigned to the -100% which we have given,

```javascript
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach((link) => {link.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
})})
```

# Home

target blank attribute will open in newtab in a tag,

```xml
  <section class="home section" id="home">
            <div class="home__container container grid">
                <div class="home_content grid">
                    <div class="home__social">
                        <a href="https://www.linkedin.com/in/dheerajy1/" target="_blank" class="home__social-icon">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://dheerajy1.hashnode.dev/" target="_blank" class="home__social-icon">
                            <i class="fa-brands fa-hashnode"></i>
                        </a>
                        <a href="https://github.com/dheerajy1" target="_blank" class="home__social-icon">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
```

Adding blob svg,

```xml
<div class="home__img">
<svg class="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha">
        <path fill="#FF0066" d="M45.8,4.8C45.8,27.3,22.9,54.6,1.3,54.6C-20.2,54.6,-40.4,27.3,-40.4,4.8C-40.4,-17.7,-20.2,-35.4,1.3,-35.4C22.9,-35.4,45.8,-17.7,45.8,4.8Z" transform="translate(100 100)" />
    </mask>
    <g mask="url(#mask0)">
        <path fill="#FF0066" d="M45.8,4.8C45.8,27.3,22.9,54.6,1.3,54.6C-20.2,54.6,-40.4,27.3,-40.4,4.8C-40.4,-17.7,-20.2,-35.4,1.3,-35.4C22.9,-35.4,45.8,-17.7,45.8,4.8Z" transform="translate(100 100)" />
        <image class="home__blob-img" xlink:href="assets\img\filename.png"/>
    </g>
</svg>
</div>
```

Now, input name and profession and description,

```xml
<div class="home__data">
    <h1 class="home__title">Hola, I'm Dheeraj</h1>
    <h3 class="homesubtitle">Full Stack Developer</h3>
    <p class="home__description">Looking for Oppertunities</p>
    <a href="#contact" class="button button--flex">
        Contactme <i class="fa-solid fa-paper-plane button__icon"></i>
    </a>
</div>
```

adding scroll down indication,

```xml
<div class="home__scroll">
    <a href="" class="home__scroll-button button--flex"></a>
    <i class="fa-solid fa-computer-mouse home__scroll-mouse"></i>
    <span class="home__scroll-name">Scroll down</span>
    <i class="fa-solid fa-arrow-down home__scroll-arrow"></i>
</div>
```

## CSS

Styling the home,

```css
.home__container{
    gap: 1rem;
}
.home_content{
    grid-template-columns: .5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
}
```

Now, socials

add hover effect to change color,

```css
.home__social{
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
}
.home__social-icon{
    font-size: 1.25rem;
    color: black;
}
.home__social-icon:hover{
    color: var(--first-color-alt);
}
```

Now, blob and Image,

position the image inside the blob,

```xml
<image class="home__blob-img" x= '12' y='18' xlink:href="assets\img\.jpg"/>
```

```css
.home__blob{
    width: 200px;
    fill: var(--first-color);
}
.home__blob-img{
    width: 170px;
}
```

Now, home data,

```css
.home__data{
    grid-column: 1/3;
}
.home__title{
    font-size: var(--big-font-size);
}
.home__subtitle{
    font-size: var(--h3-font-size);
    cursor: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
}
.home__description{
    margin-bottom: var(--mb-2);
}
```

scroll mouse class,

```css
.home__scroll{
    /* display: none; */
}
.home__scroll-button{
    color: var(--first-color);
    transition: .3s;
}
.home__scroll-button:hover{
    transform: translateY(.25rem);
}
.home__scroll-mouse{
    font-size: 2rem;
}
.home__scroll-name{
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
}
.home__scroll-arrow{
    font-size: 1.25rem;
}
```

# Conclusion

I have completed adding icons using CDN (content delivery network) link and styling them using a grid template property and added a toggle to the nav menu to hide and added social links.

# Code

1. code & preview
    
    ![Alt text](1.%20day102%20code%20&%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
Today #Day107 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Portfolio

define a section,

define title and subtitle as childs,

```html
<section class="portfolio section" id="portfolio">
<h2 class="section__title">Portfolio</h2> 
<span class="section__subtitle">Most recent Project</span>
</section>
```

define another div as child to the section element,

```xml
<div class="portfolio__container container">
</div>
```

Now, Inside the above div create a another div without any class,

create another div as child with class and define img and another div as childs,

```xml
<div>
<!-- Portfolio 1 --> 
    <div class="portfolio__content grid"> 
        <img src="assets/img/portfolio.jpg" alt="" class="portfolio__img"> 
        <div class="portfolio__data"> 
        </div> 
    </div>
</div>
```

Now, Inside the data div,

```xml
<div class="portfolio__data"> 
<h3 class="portfolio__title">Modern Website</h3> 
<p class="portfolio__description">Website adaptable to all devices with UI components and animated interactions.
</p> 
<a href="#" class="button button--flex button--small portfolio__button"> Demo <i class="fa-solid fa-arrow-right button__icon">
</i> 
</a> 
</div>
```

duplicate the portfolio 1 x2

```xml
<!-- Portfolio 2 -->
    <div class="portfolio__content grid">
        <img src="assets/img/portfolio2.jpg" alt="" class="portfolio__img">
        <div class="portfolio__data">
        <h3 class="portfolio__title">Brand Design</h3>
        <p class="portfolio__description">Website adaptable to all devices with UI components and
        animated interactions.</p>
        <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="fa-solid fa-arrow-right button__icon"></i>
        </a>
    </div>
</div> 
<!-- Portfolio 3 -->
    <div class="portfolio__content grid">
        <img src="assets/img/portfolio3.jpg" alt="" class="portfolio__img">
        <div class="portfolio__data">
        <h3 class="portfolio__title">Online store</h3>
        <p class="portfolio__description">Website adaptable to all devices with UI components and
        animated interactions.</p>
        <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="fa-solid fa-arrow-right button__icon"></i>
        </a>
    </div>
</div>
```

## CSS

styling portfolio content and img

```css
.portfolio__container{
  overflow: initial;
}
.portfolio__content{
  padding: 0 1.5rem;
}
.portfolio__img{
  width: 265px;
  border-radius: .5rem;
  justify-self: center;
}
```

setting the margins for title and description

also add hover effect by translating along x,

```css
.portfolio__title{
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description{
  margin-bottom: var(--mb-0-75);
}
.portfolio__button:hover .button__icon{
transform: translateX(.25rem);
}
```

## Swiper

Now, go to swiper website [\[link\]](https://swiperjs.com/get-started), I included CDN instead of downlocally,

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
```

Then, In demos menu [\[link\]](https://swiperjs.com/demos#css-mode), github [\[link\]](https://github.com/nolimits4web/swiper/blob/master/demos/145-css-mode.html)

Now, modify the div's classes,

```xml
<div class="portfolio__container container swiper">
<div class="swiper-wrapper">
```

Modify the classes in portfolio 1,2,3

```html
<div class="portfolio__content grid swiper-slide">
```

## JavaScript

Append the Below code which I taken from the Github of Swiper Repository Demo,

```javascript
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});
```

HTML

Now, Append the below HTML Snippet,

```xml
<!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
<!-- Add Pagination -->
    <div class="swiper-pagination"></div>
```

Now modyfying and adding icons,

```xml
<!-- Add Arrows --> 
<div class="swiper-button-next"> 
    <i class="fa-solid fa-angle-right swiper-portfolio-icon"></i> 
</div> 
<div class="swiper-button-prev"> 
    <i class="fa-solid fa-angle-left swiper-portfolio-icon"></i> 
</div> 
<!-- Add Pagination --> 
<div class="swiper-pagination"></div>
```

Now, In Js add thses lines of code,

```javascript
loop: true,
clickable: true,
```

remove the mouse wheel and keyboard params,

## CSS

Making the inhereted arrow disappear,

```css
.swiper-button-prev::after,
.swiper-button-next::after{
content: '';
}
```

stlying the icon,

```css
.swiper-portfolio-icon{
  font-size: 2rem;
  color: var(--first-color);
}
```

Setting the position,

```css
.swiper-button-prev{
  left: -.5rem;
}
.swiper-button-next{
right: .5rem;
}
.swiper-pagination-horizontal > .swiper-pagination-bullet{
  position: relative;
  bottom: -2.5rem;
}
```

changing the background color of the bullet which is active,

```css
.swiper-pagination-bullet-active{
  background-color: var(--first-color);
}
```

removing the outline,

```css
.swiper-button-prev,
.swiper-button-next,
.swiper-pagination-bullet{
  outline: none;
}
```

# Project In Mind

define a section,

```xml
<section class="project section">
</section>
```

define the title and rest,

```html
 <div class="project__bg">
    <div class="project__container container grid">
        <div class="project__data">
            <h2 class="project__title">You have a new project?</h2>
            <p class="portfolio__description">Hire me
            </p>
            <a href="#contact" class="button button--flex button--white ">
                Contact me
                <i class="fa-solid fa-paper-plane project__icon button__icon"></i>
            </a>
        </div>
        <img src="assets/img/project.png" alt="" class="project__img">
    </div>
</div>
```

## CSS

centering,

```css
.project{
  text-align: center;
}
```

styling the background, title, description, img

```css
.project__bg{
  background-color: var(--first-color);
  padding-top: 3rem;
}
.project__title{
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-0-75);
}
.project__description{
  margin-bottom: var(--mb-1-5);
}
.project__title,.project__description{
  color: #fff;
}
.project__img{
  width: 232px;
  justify-self: center;
}
```

Now, styling the button,

```css
.button--white{
  background-color: #fff;
  color: var(--first-color);
}
.button--white:hover{
  background-color: #fff;
}
```

# Conclusion

I completed the project portion of my website portfolio and included Swiper library into my project using CDN.

# Code

1. code
    
    ![Alt text](1.%20day107%20code.png)
    
    preview
    
    ![Alt text](2.%20day107%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
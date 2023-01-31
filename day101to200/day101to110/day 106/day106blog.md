Today #Day106 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Services

## HTML

define a section

section.services.section#services,

with heading title and subtitle,

```xml
<section class="services section" id="services">
   <h2 class="section__title">Services</h2>
   <span class="section__subtitle">What I offer</span>
</section>
```

define a div to hold all the services div, inside this div create a child div,

```xml
<div class="services__container container">
                <!-- Services 1 -->
    <div class="services__content">
    </div>
</div>
```

Now, create a div and add icons and heading,

```xml
<div>
<i class="fa-solid fa-border-all"></i>
<h3 class="services__title">UI/UX <br> Designer</h3>
</div>
```

define a span,

```xml
<span class="button button--flex button--small button--link services__button">
View more
<i class="fa-solid fa-arrow-right button__icon"></i>
</span>
```

define a div with calss services\_\_modal,

```xml
<div class="services__modal">
<div class="services__modal-content">
    <h4 class="services__modal-title">UI/UX <br> Designer</h4>
    <i class="fa-solid fa-xmark services__modal-close"></i>
    <ul class="services__modal-services grid">
        <li class="services__modal-service">
            <i class="fa-regular fa-circle-check services__modal-icon"></i>
            <p>I develop the User Interface.</p>
        </li>
    </ul>
</div>
</div>
```

duplicate the li tag x3

```xml
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>Web page development.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I create UX element interaction.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I Position your company brand.</p>
</li>
```

Now, duplicate the services\_\_content x2,

Services 2,

```xml
<!-- Services 2 -->
<div class="services__content">
<div>
<i class="fa-solid fa-code"></i>
<h3 class="services__title">Frontend <br> Developer</h3>
</div>
<span class="button button--flex button--small button--link services__button">
View more
<i class="fa-solid fa-arrow-right button__icon"></i>
</span>
<div class="services__modal">
<div class="services__modal-content">
<h4 class="services__modal-title">>Frontend <br> Developer</h4>
<i class="fa-solid fa-xmark services__modal-close"></i>
<ul class="services__modal-services grid">
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I develop the User Interface.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>Web page development.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I create UX element interaction.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I Position your company brand.</p>
</li>
</ul>
</div>
</div>
</div>
```

Services 3,

```xml
<!-- Services 3 -->
<div class="services__content">
<div>
<i class="fa-solid fa-pen services__icon"></i>
<h3 class="services__title">Branding <br> Designer</h3>
</div>
<span class="button button--flex button--small button--link services__button">
View more
<i class="fa-solid fa-arrow-right button__icon"></i>
</span>
<div class="services__modal">
<div class="services__modal-content">
<h4 class="services__modal-title">Branding <br> Designer</h4>
<i class="fa-solid fa-xmark services__modal-close"></i>
<ul class="services__modal-services grid">
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I develop the User Interface.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>Web page development.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I create UX element interaction.</p>
</li>
<li class="services__modal-service">
<i class="fa-regular fa-circle-check services__modal-icon"></i>
<p>I Position your company brand.</p>
</li>
</ul>
</div>
</div>
</div>
```

## CSS

styling the services container,

```css
.services__container{
  gap: 1.5rem;
  grid-template-columns: repeat(2,1fr);
}
```

styling the services content,

add hover effect using box shadow,

```css
.services__content {
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
}
.services__content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

styling services icon,

```css
.services__icon{
  display: block;
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: var(--mb-1);
}
```

styling the service title and button,

```css
.services__title{
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
}
.services__button{
  cursor: pointer;
  font-size: var(--small-font-size);
}
.button--small{
  padding: .75rem 1rem;
}
.button--link{
  padding: 0;
  background-color: transparent;
  color: var(--first-color);
}
.button--link:hover{
  background-color: transparent;
  color: var(--first-color-alt);
}
```

adding hover effect to button icon,

```css
.services__button:hover .button__icon{
 transform: translateX(.25rem);
}
```

styling services modal,

```css
.services__modal{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  /* opacity: 0; */
  /* visibility: hidden; */
  transition: .3s;
}
```

styling services modal content,

```css
.services__modal-content{
  position: relative;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
}
```

styling services modal services and titles,

```css
.services__modal-services{
row-gap: 1rem;
}
.services__modal-service{
display: flex;
}
.services__modal-title{
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
}
```

styling service modal close and icon,

```css
.services__modal-close{
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
}
.services__modal-icon{
  color: var(--first-color);
  margin-right: var(--mb-0-25);
}
```

styling active modal class,

```css
.active-modal{
  opacity: 1;
  visibility: visible;
}
```

## JavaScript

define modalViews variable and select all the services\_\_modal classes,

similarly modalBtns, modalCloses,

```javascript
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')
```

Now,

define an modal variable and define an arrow function,

```javascript
let modal = (modalClick)=>{
  modalViews[modalClick].classList.add('active-modal')
}
```

Then, add event listener to listen for click event on each modalBtns,

```javascript
modalBtns.forEach((modalBtn,i)=>{
  modalBtn.addEventListener('click',()=>{
    modal(i)
  })
})
```

After that, add event listener to each modalClose and remove the class,

```javascript
modalCloses.forEach((modalClose)=>{
  modalClose.addEventListener('click',()=>{
    modalViews.forEach((modalView)=>{
      modalView.classList.remove('active-modal')
    })
  })
})
```

# Conclusion

I completed services portion of portfolio website and coded in JS to add or remove classlist,

# Code

1. code
    
    ![Alt text](1.%20day106%20code.png)
    
    preview

    ![Alt text](2.%20day106%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
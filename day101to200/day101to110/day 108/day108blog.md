Today #Day108 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Contact me

define a section with class and ID,

define h2 tag and span tag,

```html
<section class="contact section" id="contact">
     <h2 class="section__title">Contact me</h2>
     <span class="section__subtitle">Get in touch</span>
</section>
```

Now, define another div,

<mark>Tip:</mark> <mark>shortcut for the below HTML snippet:</mark> `div.contact__container.container.grid>div>div.contact__information`

```html
<div class="contact__container container grid">
  <div>
  <div class="contact__information">
                        
  </div>
  </div>
</div>
```

div&gt;h3.contact\_\_title&gt;span.contact\_\_subtitle

```html
<div>
    <h3 class="contact__title">Call me</h3>
    <span class="contact__subtitle">XXX-XXX-XXX</span>
</div>
```

duplicate the div with contact\_\_information x2

replace the icons,

```xml
 <!-- contact info 2 -->
<div class="contact__information">
    <i class="fa-regular fa-envelope contact__icon"></i>
    <div>
        <h3 class="contact__title">Email me</h3>
        <span class="contact__subtitle">yssdhiraj@gmail.com</span>
    </div>
</div>
<!-- contact info 3 -->
<div class="contact__information">
    <i class="fa-solid fa-earth-asia contact__icon"></i>
    <div>
        <h3 class="contact__title">Location</h3>
        <span class="contact__subtitle">Remote</span>
    </div>
</div>
```

create a form element with class,

<mark>Tip:</mark> <mark>shortcut for the below HTML snippet:</mark>

`form.contact__form.grid>div.contact__inputs.grid>div.contact__content>label.contact__label`

define a input with class,

```xml
<form action="" class="contact__form grid">
  <div class="contact__inputs grid">
      <div class="contact__content">
       <label for="" class="contact__label">Name</label>
       <input type="text" class="contact__input">
      </div>
  </div>
</form>
```

duplicate with class contact\_\_content x1,

```html
<div class="contact__content">
      <label for="" class="contact__label">Email</label>
      <input type="email" class="contact__input">
</div>
```

Now, add the below HTML snippet as a child to the form element,

```html
<div class="contact__content">
    <label for="" class="contact__label">Project</label>
    <input type="text" class="contact__input">
</div>
<div class="contact__content">
   <label for="" class="contact__label">Message</label>
   <textarea name="" id="" cols="0" rows="7" class="contact__input">               </textarea>
</div>
```

define another div to hold the button icon,

```html
<div><a href="#" class="button button--flex">
  Send Message
  <i class="fa-solid fa-paper-plane button__icon"></i>
</a></div>
```

## CSS

styling the container,

```css
.contact__container{
  row-gap: 3rem;
}
.contact__information{
  display: flex;
  margin-bottom: var(--mb-2);
}
```

styling the icons,

```css
.contact__icon{
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
}
```

starring title and subtitle,

```css
.contact__title{
  font-size: var(--h3-font-size);
font-weight: var(--font-medium);
}
.contact__subtitle{
font-size: var(--small-font-size);
color: var(--text-color-light);
}
```

styling content and label and input,

```css
.contact__content{
background-color: var(--input-color);
border-radius: .5rem;
padding: .75rem 1rem .25rem;
}
.contact__input{
  width: 100%;
background-color: var(--input-color);
color: var(--text-color);
font-family: var(--body-font);
font-size: var(--normal-font-size);
border: none;
outline: none;
padding: .25rem .5rem .5rem  0;
}
.contact__label{
  font-size: var(--smaller-font-size);
  color: var(--title-color);
}
```

# Footer

<mark>Tip:</mark> <mark>shortcut for the below HTML snippet:</mark>

`footer.footer>div.footer__bg>div.footer__container.container.grid>div>h1.footer__title`

```html
<footer class="footer">
    <div class="footer__bg">
        <div class="footer__container container grid">
            <div>
                <h1 class="footer__title">Dheeraj</h1>
                <span class="footer__subtitle">Full Stack Developer</span>
            </div>
        </div>
    </div>
</footer>
```

define a unordered list,

```html
<ul class="foooter__links">
    <li>
        <a href="#services" class="footer__link">Services</a>
    </li>
    <li>
        <a href="#portfolio" class="footer__link">Portfolio</a>
    </li>
    <li>
        <a href="#contact" class="footer__link">Contact</a>
    </li>
</ul>
```

define HTML for footer socials,

<mark>Tip:</mark> <mark>shortcut for the below HTML snippet:</mark>

div.footer\_\_socials&gt;a.footer\_\_social\*3

add target attribute to open link in the new tab,

```xml
<div class="footer__socials">
    <a href="" class="footer__social" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="" class="footer__social" target="_blank">
        <i class="fa-brands fa-hashnode"></i>
    </a>
    <a href="" class="footer__social" target="_blank">
        <i class="fa-brands fa-github"></i>
    </a>
</div>
```

Now, adding p tag with innerHTML All rights reserved,

```xml
<p class="footer__copy">&#169 Dheeraj. All rights reserved</p>
```

## CSS

styling footer element and class container,

```css
.footer {
  padding-top: 2rem;
}
.footer__container {
  gap: 3.5rem;
}
```

styling the footer bg,

```css
.footer__bg {
  background-color: var(--first-color-second);
  padding: 2rem 0 3rem;
  border-radius: 10px;
}
```

styling the title and subtitle,

```css
.footer__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
}
.footer__subtitle {
  font-size: var(--small-font-size);
}
```

styling the links and adding hover effect to change color,

```css
.foooter__links {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
.footer__link:hover {
  color: var(--first-color-lighter);
}
.footer__social {
  font-size: 1.2rem;
  margin-right: var(--mb-1-5);
}
.footer__social:hover {
  color: var(--first-color-lighter);
}
.footer__copy {
  font-size: var(--smaller-font-size);
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: var(--mb-3);
}
.footer__title,
.footer__subtitle,
.footer__link,
.footer__social {
  color: rgb(26, 26, 26);
}
```

## Conclusion

I completed the contact portion of my portfolio website and the footer portion.

# Code

1. code
    
    ![Alt text](1.%20day108%20code.png)
    
    preview
    
    ![Alt text](2.%20day108%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
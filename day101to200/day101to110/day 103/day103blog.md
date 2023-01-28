Today #Day103 of #100DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Buttons

Styling buttons and add a hover effect,

display inline-block will put elements side by side,

```css
.button{
    display: inline-block;
    background-color: var(--first-color);
    padding: 1rem;
    color: black;
    border-radius: .9rem;
    font-weight: var(--font-medium);
}
.button:hover{
    background-color: var(--first-color-alt);
}
.button__icon{
    color: black;
    font-size: 1.25rem;
    margin-left: var(--mb-0-5);
    transition: .3s;
}
```

uncomment the display in the home scroll,

```css
.home__scroll{
    display: none;
}
```

# About

define a section with class and ID

```xml
<section class="about section" id="about">
            <h2 class="section_title">About Me</h2>
            <span class="section_subtitle">My Introduction</span>
</section>
```

about descritption,

```xml
<div class="about_container container grid">
    <img src="assets/img/about.jpg" alt="" class="about__img">
    <div class="about__data">
        <p class="about__description"></p>
        <div class="about__info">
            <div>
                <span class="about__info-title">01+</span>
                <span class="about__info-name">Years <br>Experience</span>
            </div>
            <div>
                <span class="about__info-title">25+</span>
                <span class="about__info-name">Completed <br>Projects</span>
            </div>
            <div>
                <span class="about__info-title">01</span>
                <span class="about__info-name">Companies <br>Worked</span>
            </div> 
        </div>
    </div>
</div>
```

Adding resume pdf to download or open in new tab

```html
<div class="about__buttons">
    <a href="assets/pdf/.pdf" class="button button--flex" target="_blank">Resume
    <i class="fa-solid fa-arrow-up-right-from-square button__icon"></i>
    </a>
</div>
```

## CSS

Now styling the image in about section,

```css
.about__img{
    width: 100px;
    border-radius: .5rem;
    justify-self: center;
    align-self: center;
}
```

Styling the about description,

```css
.about__description{
    text-align: center;
    margin-bottom: var(--mb-2-5);
}
```

styling the about info div,

```css
.about__info{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
}
.about__info-title{
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
}
.about__info-name{
font-size: var(--smaller-font-size);
}
.about__info-title,.about__info-name{
display: block;
text-align: center;
}
```

styling the resume button in about,

```css
.about__buttons{
    display: flex;
    justify-content: center;
}
```

# Conclusion

I completed styling buttons in the Home section and completed the HTML and CSS portion of the about section in my portfolio website.

# Code

1. code
    
   ![Alt text](1.%20day103%20code.png)
    
    preview
    
    ![Alt text](2.%20day103%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
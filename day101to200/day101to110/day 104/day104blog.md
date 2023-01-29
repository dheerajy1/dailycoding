Today #Day104 of #100DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Skills

define a section,

<mark>Tip: section.skills.section#skills</mark>

define a heading with h2 tag,

also define a subtitle,

```xml
<section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My technical level</span>
</section>
```

define a div with class,

```xml
<div class="skills__container container grid">
    <div>
    <div class="skills__content">
    <div class="skills__header">
    <i class="fa-solid fa-code skills__icon"></i>
    <div>
        <h1 class="skills__title">Full Stack Developer</h1>
        <span class="skills__subtitle">More than 5 Months</span>
    </div>
    <i class="fa-solid fa-angle-down skills__arrow"></i>
    </div>
    </div>
    </div>
</div>
```

Now, define a div with class list,

```xml
<div class="skills__list grid">
    <div class="skills__data">
        <div class="skills__title">
            <h3 class="skills__name">HTML</h3>
            <span class="skills__number">90%</span>
        </div>
        <div class="skills__bar">
            <span class="skills__percentage skills__html"></span>
        </div>
    </div>
</div>
```

Repeat the skills data class div 4 times,

Finally,

```xml

 <div class="skills__content">
    <div class="skills__header">
        <i class="fa-solid fa-code skills__icon"></i>
        <!-- <p class="curly skills__icon">{ }</p> -->
        <div>
            <h1 class="skills__title">Frontend Developer</h1>
            <span class="skills__subtitle">More than 5 Months</span>
        </div>
        <i class="fa-solid fa-angle-down skills__arrow"></i>
    </div>
    <div class="skills__list grid">
        <div class="skills__data">
            <div class="skills__titles">
                <h3 class="skills__name">HTML</h3>
                <span class="skills__number">90%</span>
            </div>
            <div class="skills__bar">
                <span class="skills__percentage skills__html"></span>
            </div>
        </div>

        <div class="skills__data">
            <div class="skills__titles">
                <h3 class="skills__name">CSS</h3>
                <span class="skills__number">60%</span>
            </div>
            <div class="skills__bar">
                <span class="skills__percentage skills__css"></span>
            </div>
        </div>

        <div class="skills__data">
            <div class="skills__titles">
                <h3 class="skills__name">JavaScript</h3>
                <span class="skills__number">60%</span>
            </div>
            <div class="skills__bar">
                <span class="skills__percentage skills__js"></span>
            </div>
        </div>

        <div class="skills__data">
            <div class="skills__titles">
                <h3 class="skills__name">React</h3>
                <span class="skills__number">85%</span>
            </div>
            <div class="skills__bar">
                <span class="skills__percentage skills__react"></span>
            </div>
        </div>
    </div>
</div>
```

Repeat this above code one time,

change the necessary skills

Repeat above code one more time,

change the necessary skills if you want to put design skills

## CSS

styling skills header,

```css
.skills__header{
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
}
```

styling icon and arrow,

```css
.skills__icon,.skills__arrow{
    font-size: 1.5rem;
    color: var(--first-color);
}
.skills__icon{
    margin-right: 0.75rem;
}
```

styling title and subtitle,

```css
.skills__title {
  font-size: var(--h3-font-size);
}
.skills__subtitle {
  font-size: var(--small-font-size);
```

styling skills arrow and skills titles,

```css
.skills__arrow{
    margin-left: auto;
    transition: .4s;
}
.skills__titles{
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
}
```

styling skills name

```css
.skills__name{
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
}
```

Now, styling bar and percentages,

```css
.skills__bar,.skills__percentage{
    height: 5px;
    border-radius: .25rem;
}
.skills__bar{
    background-color: var(--first-color-lighter);
}
.skills__percentage{
    display: block;
    background-color: var(--first-color);
}
```

style the skills list to indent,

```css
.skills__list{
    row-gap: 1.5rem;
    padding-left: 2.7rem;
}
```

Then, styling individual skills to their percentages using width property,

```css

.skills__html{
    width: 90%;
}
.skills__css{
    width: 60%;
}
.skills__js{
    width: 80%;
}
.skills__react{
    width: 80%;
}
.skills__api{
    width: 40%;
}
.skills__node{
    width: 60%;
}
.skills__sql{
    width: 80%;
}
.skills__python{
    width: 55%;
}
.skills__figma{
    width: 80%;
}
.skills__sketch{
    width: 80%;
}
```

add skills\_\_open class and skills\_\_close

```css
 <!-- Skills 1 -->
<div class="skills__content skills__open">

<!-- Skills 2 -->
<div class="skills__content skills__close">

<!-- Skills 3 -->
<div class="skills__content skills__close">
```

Now,

styling skills close and skills open, as we will add this as class list in JS when clicked,

```css
.skills__close .skills__list {
  height: 0;
  overflow: hidden;
}
.skills__open .skills__list {
  height: max-content;
  margin-bottom: var(--mb-2-5);
}
```

Now, for the arrow to rotate when skills open,

```css
.skills__open .skills__arrow{
    transform: rotate(-180deg);
}
```

## JavaScript

```javascript
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}
skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});
```

# Conclusion

I completed the skills section of my portfolio website and added a toggle menu.

# Code

1. code
    
    ![Alt text](1.%20day104%20code.png)
    
    preview
    
    ![Alt text](2.%20day104%20preview.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
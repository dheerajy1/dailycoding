Today #Day109 of #365DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript.

# Scroll Sections Active Link

## JavaScript

Go to this github [\[link\]](https://github.com/bedimcode/responsive-website-restaurant/blob/main/assets/js/main.js)

```javascript
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.add('active-link')
      }else{
          document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.remove('active-link')
      }
    })
}
window.addEventListener('scroll', scrollActive)
```

## CSS

```css
.active-link{
  color: var(--first-color);
}
```

add the active-link class to the &lt;a&gt; tag of home,

# Change Background Header

## JavaScript

Go to this github [\[link\]](https://github.com/bedimcode/responsive-website-restaurant/blob/main/assets/js/main.js)

```javascript
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
```

## CSS

```css
.scroll-header{
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}
```

# Scroll Up

## HTML

```html
<a href="#" class="scrollup" id="scroll-up">
    <i class="fa-solid fa-arrow-up scrolluo__icon"></i>
</a>
```

# CSS

styling the scroll-up icon,

```css
.scrollup{
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  opacity: .8;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
}
```

styling when hover and the icon,

```css
.scrollup:hover{
  background-color: var(--first-color-alt);
}
.scrollup__icon{
  font-size: 1.5rem;
  color: white;
}
```

## JavaScript

```javascript
function scrollup(){
  const scrollup = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
  else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
```

## CSS

```css
.show-scroll{
  bottom: 5rem;
}
```

# Dark/Light Theme

## HTML

Go to the Div with class nav\_\_btns,

```html
<!-- Theme change button -->
<i class="fa-solid fa-moon chnage-theme" id="theme-button"></i>
```

## CSS

styling the nav buttons,

```css
.nav__btns{
  display: flex;
  align-items: center;
}
```

styling the icon,

```css
.change-theme{
  font-size: 1.25rem;
  color: var(--title-color);
  margin-right: var(--mb-1);
  cursor: pointer;
}
```

adding hover effect,

```css
.change-theme:hover{
  color: var(--first-color);
}
```

changing the saturation and lightness of the CSS color variables,

```css
body.dark-theme{
  --first-color-second: hsl(var(--hue-color), 30%, 8%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 75%);
  --input-color: hsl(var(--hue-color), 29%, 16%);
  --body-color: hsl(var(--hue-color), 28%, 12%);
  --container-color: hsl(var(--hue-color), 29%, 16%);
}
```

## JavaScript

```javascript
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
```

# Scroll Bar

## CSS

```css
::-webkit-scrollbar{
  width: .60rem;
  background-color: var(--scroll-bar-color);
  border-radius: .5rem;
}
::-webkit-scrollbar-thumb{
  background-color: var(--scroll-thumb-color);
  border-radius: .5rem;
}
```

add css color variables to dark,

add hover effect to scroll bar thumb,

```css
::-webkit-scrollbar-thumb:hover{
  background-color: var(--text-color-light);
}
```

# Conclusion

I completed adding scroll Sections Active Link, Change Background Header, Scroll Up, Dark/Light Theme, Scroll Bar to my portfolio project.

# Code

1. code
    
    ![Alt text](1.%20day109%20code.png)
    
    preview - showing dark mode,
    
    ![Alt text](2.%20day109%20preview.png)

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
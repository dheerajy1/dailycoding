Today #Day114 of #365DaysOfCode, I am Building a website Parallax menu in HTML, CSS, and JavaScript.

# HTML

create a div

```xml
<div id="menu">
  <div id="menu-items">
    <div class="menu-item">Home</div>
    <div class="menu-item">Shop</div>
    <div class="menu-item">About</div>
    <div class="menu-item">Contact Us</div>
  </div>
</div>
```

adding another divs inside our menu,

```xml
<div id="menu-background-pattern"></div>
<div id="menu-background-image"></div>
```

# CSS

styling body and menu div,

```css
body {
  background-color: rgb(20, 20, 20);
  margin: 0px;
}

#menu {  
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
}
```

styling menu item class,

text-decoration removes the underline,

```css
.menu-item {
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Ibarra Real Nova', serif;
  font-size: clamp(3rem, 8vw, 8rem);
  padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
  text-decoration: none;
  transition: opacity 400ms ease;
}
```

styling menu items,

```css
#menu-items {
  margin-left: clamp(4rem, 20vw, 48rem);
  position: relative;
  z-index: 2;
}
```

## fading the inactive links,

reducing the opacity of all links when hovered and overriding this change for the current one,

```css
#menu-items:hover > .menu-item {,
  opacity: 0.3;
}
#menu-items:hover > .menu-item:hover {
  opacity: 1; 
}
```

## to get the background image to pan vertically when we how are over the link,

creating a dotted grid pattern,

```css
#menu-background-pattern {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 9%, 
    transparent 9%
  );
  background-position: 0% 0%;
  background-size: 12vmin 12vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, 
    background-size 800ms ease,
    background-position 800ms ease;
  width: 100vw;
  z-index: 1;
}
```

to pan,

```css
#menu-items:hover ~ #menu-background-pattern {
  background-size: 11vmin 11vmin;
  opacity: 0.5;
}
```

After creating the dataset in JS,

```css
#menu[data-active-index="0"] > #menu-background-pattern {
  background-position: 0% -25%;
}

#menu[data-active-index="1"] > #menu-background-pattern {
  background-position: 0% -50%;
}

#menu[data-active-index="2"] > #menu-background-pattern {
  background-position: 0% -75%;
}

#menu[data-active-index="3"] > #menu-background-pattern {
  background-position: 0% -100%;
}
```

# JavaScript

Instead of returning to its position make it retain its current position,

```javascript
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
```

## Explanation:

this is what happens when you hover over contact whose index is 3

```javascript
<div id="menu" data-active-index='3'>
  <div id="menu-items">
    <div class="menu-item">Home</div>
    <div class="menu-item">Shop</div>
    <div class="menu-item">About</div>
    <div class="menu-item">Contact Us</div>
  </div>
  <div id="menu-background-pattern"></div>
</div>
```

Since, we have already defined id menu with 3,

```css
#menu[data-active-index="3"] > #menu-background-pattern {
  background-position: 0% -25%;
}
```

# Conclusion

I completed Building a website Parallax menu in HTML, CSS, and JavaScript.

# Code

1. code
    
    ![Alt text](1.%20day114%20code.png)
    
2. preview
    
    ![Alt text](2.%20day114%20preview.png)
    

# Source: **Hyperplexed**\[[Link](https://youtu.be/NUeCNvYY_x4)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
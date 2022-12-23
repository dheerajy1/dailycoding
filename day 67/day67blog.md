Today #Day67 of #100DaysOfCode, I am coding and explaining the 'Javascript Layout Animations' project taught by @developedbyed

# HTML

Let's write the HTML skeleton using the shortcut`!`

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="/app.js" defer></script>
    <title>JavaScript Layout Animations</title>
</head>
<body>
</body>
</html>
```

<mark>Tip: use defer attribute to load our app.js after loading the HTML page.</mark>

seacrh for gsap cdn and copy the following links which will contain the layout animations,

```xml
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Now, Let's write the elements for nav

Tip: use the shortcut `nav>ul.nav-links>div.nav-item>li>a`

```xml
  <nav>
        <ul class="nav-links">
            <div class="nav-item">
                <li><a href="#">Our Story</a></li>
                <div class="active-nav"></div>
            </div>
            <div class="nav-item">
                <li><a href="#">Projects</a></li>
            </div>
            <div class="nav-item">
                <li><a href="#">Porfolio</a></li>
            </div>
        </ul>
    </nav>
```

# CSS

Let's style our nav

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

use the following CSS to get font family lato

```css
@import url("http://fonts.googleapis.com/css?family=Lato:400,700");
body {
  font-family: "Lato", sans-serif;
}
```

give padding and hand display flex property to position the elements containing the nav tag horizontally,

but the NAV element has only one element inside if you add any other element it will position to the right of the ul tag \[&lt;ul&gt; tag = unordered list, &lt;ol&gt; tag = ordered list\]

```css
nav {
  padding: 3rem;
  display: flex;
  justify-content: center;
}
```

After that, to get that now item side by side placed horizontally give the display flex to the unordered list &lt;ul&gt; tag,

to remove the list style use none value, also to space between them use gap property,

```css
.nav-links {
  display: flex;
  list-style: none;
  gap: 5rem;
  font-size: 1.2rem;
}
```

Next, remove the line underneath our items

```css
.nav-links a {
  text-decoration: none;
  color: #252525;
  font-weight: bold;
}
```

Now, Lets style the bar which will appear down the nav items,

position absolute property will place the Div according to the nearest fixed element

```css
.active-nav {
  height: 3px;
  background: #385ae0;
  border-radius: 1rem;
  position: absolute;
  left: 0%;
  bottom: -8px;
  width: 100%;
}
```

# JavaScript

Let's work on JS code,

Define links const variable to store all the links,

Define a const variable to hold the class active nav element,

```javascript
const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");
```

Now, let's add an add event listener to each link ,

for each method will look through the links since links variable is an array

Each link that will be sent to the link parameter and again for each link we are adding and add event listener to listen for the click if you click, that link will be sent to the e parameter

```javascript
links.forEach((link) => {
  link.addEventListener("click", (e) => {});
});
```

Then, to check the clicked element use active element property which will be active when you click on an element,

```javascript
links.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(link, { color: "#252525" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }
  });
});
```

Next, Let's add the bar to the each item only when clicked,

use append child method,

```javascript
link.appendChild(activeNav);
```

Now, Let's add animation,

```javascript
Flip.from(state, {
  duration: 0.5,
  absolute: true,
  ease: "elastic.out(1,0.5)",
});
```

Now,

Let's add cards by using HTML elements,

```xml
<section>
    <div class="card">
        <h1>Title 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse maxime veritatis voluptates quae dignissimos facilis obcaecati eaque doloremque quos eligendi aspernatur voluptas necessitatibus earum quibusdam sunt nemo modi, eos aliquam.</p>
    </div>
</section>
```

Let's style our cards,

```css
.card {
  height: 15rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #93a9ff;
}
```

# Conclusion

I completed the nav and card part of the JavaScript Layout Animations.

# Code

1. code

   ![Alt text](1.%20day67%20code.png)

2. preview

   ![Alt text](2.%20day67%20preview.png)

# Source: Code with developedbyed [\[click\]](https://youtu.be/xB27AuRa5h4)

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)

Today #Day101 of #100DaysOfCode, I am Building Portfolio Website Using HTML CSS & JavaScript and solving one Interview question.

# Solving Top Interview Questions

1 Remove Duplicates from the Sorted Array

```javascript
let nums = [1,1,2],
  count = 0;

nums.forEach((val, i, array) => {
  let j = i + 1;
  for (; j < array.length; j++) {
    if ((val === array[j]) & (typeof array[j] != "string")) {
      array[j] = "_";
      count++;
    }
  }
});
console.log(nums, count);

nums = nums.filter((e)=>{
    if(typeof e !='string'){
        return e
    }
})
console.log(nums, count);
```

a short version using set,

```javascript
let nums = [1,1,2]
console.log(nums);
nums = [...new Set(nums)]
console.log(nums);
```

# Project setup

1. create index.html with boilerplate using `!` and give tab
    
2. create styles.css file
    
3. create main.js files
    

# CSS link tag

Link the CSS file using the link tag in index.html

provide the correct path

```xml
<link rel="stylesheet" href="style.css">
```

Link the main js file using the script tag in index.html

provide the correct path

```xml
<script src="/assets/js/main.js"></script>
```

iconscout [\[link\]](https://iconscout.com/unicons)

```xml
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
```

# Google Font

Google fonts [\[link\]](https://fonts.google.com/specimen/Poppins?query=popp)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
```

```css
font-family: 'Poppins', sans-serif;
```

# root css psuedo class

Variables in root css psuedo class selects the root of the html document,

```css
:root {
  --hearder-height: 3rem;

  /*Colours*/
  --first-color: hsla(0, 60%, 55%, 0.8);
  --first-color-second: hsla(18, 43%, 49%, 0.8);
  --first-color-alt: hsla(0, 60%, 72%, 0.8);
  --first-color-lighter: hsla(0, 60%, 55%, 0.8);
  --title-color: hsla(0, 0%, 0%, 0.8);
  --text-color: hsla(0, 0%, 0%, 0.8);
  --text-color-light: hsla(0, 3%, 37%, 0.8);
  --input-color: hsla(0, 60%, 55%, 0.8);
  --body-color: hsla(0, 0%, 100%, 0.8);
  --container-color: hsla(0, 0%, 100%, 0.8);

  /*Font and typography*/
  --body-font: "Poppins", sans-serif;

  /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;
  /*Font weight*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*Margins bottom
.25rem = 4px, .5rem = 8px, .75rem = 12px*/
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /* z index */
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}
```

# media query for font

this media query is valid if view port size lessthan 968 pixels,

```css
@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}
```

# Reset HTML

```css
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    scroll-behavior: smooth;
}
```

body

```css
body{
    margin: 0 0 var(--hearder-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}
h1,h2,h3,h4{
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    max-width: 100%;
    height: auto;
}
```

# Reusable CSS

```css
.section{
    padding: 2rem 0 4rem;
}
.section_title{
    font-size: var(--h1-font-size);
}
.section_subtitle{
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
}
.section_title,.section_subtitle{
    text-align: center;
}
```

# Layout

```css
.container{
    max-width: 768px;
    margin: 0 var(--mb-1-5) 0 var(--mb-1-5);
}
.grid{
    display: grid;
    gap: 1.5rem;
}
```

# Conclusion

I completed setting up the project and creating CSS variables and solving Interview questions removing duplicates.

# Code

1. code
    
    ![Alt text](1.%20day%20101%20code.png)
    

# Source: **Bedimcode** [\[Link\]](https://www.youtube.com/watch?v=27JtRAI3QO8&t=81s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
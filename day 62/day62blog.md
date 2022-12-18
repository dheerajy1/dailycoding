Today #Day62 of #100DaysOfCode, I am Re-Building my Backup Calculator.
![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670067676439/exoHyMogX.png)

# #100DaysOfCode

As shown above, I want to create an HTML page for my backup calculator project.

# JavaScript

I encountered an issue when I defined another P tag and the ptag variable in JavaScript not picking that P tag from the HTML document hence I used the queryselectorAll method and also I modified the if condition, which is not displaying the array ptag hence I use the foreach method to pick each P tag and then assign the style display property with the value either block or none according to the checkbox checked or not.

```javascript
const ptag = document.querySelectorAll("p");
```

```javascript
ptag.forEach((e) => {
  e.style.display = "block";
});
```

# HTML

Define daily backup div's,

Let's define a div container and with a child element another div content for daily questions,

```xml
div class="container-daily-questions">
<div class="content-daily-questions">
</div>
</div>
```

Let's define a div element with child button element,

```xml
<div class="container-daily-calculate">
    <button id="button-daily-calculate">
        Calculate-daily
    </button>
</div>
```

Let's define a container div and its child as content div,

```xml
<div class="container-daily-solutions">
<div class="content-daily-solutions">
</div>
</div>
```

Let's define paragraph elements inside this above div,

```xml
<p class="p1">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores et minus officiis officia, nesciunt culpa ex maiores odit aspernatur. Itaque veniam, similique quod ipsam dolorem laboriosam vero repellat sint.
</p>
```

After that, Define weekly backup div's,

Let's define a div container and with a child element another div content for weekly questions,

```xml
<div class="container-weekly-questions">
    <div class="content-weekly-questions">
    </div>
</div>
```

Let's define a div element with a child button element,

```xml
<div class="container-weekly-calculate">
       <button id="button-weekly-calculate">
            Calculate-daily
       </button>
</div>
```

Let's define a container div and its child as content div,

```xml
<div class="container-weekly-solutions">
    <div class="content-weekly-solutions">
   </div>
</div>
```

# CSS

Let's style our div's daily-questions,

```css
div.container-daily-questions {
  /* background-color: antiquewhite; */
}
div.content-daily-questions {
  border: 1px solid;
  margin: 2%;
  border-radius: 9px;
  background-color: rgb(215, 250, 246);
}
```

Let's style the paragraph elements,

```css
p {
  margin: 2%;
  /* display: none; */
  font-family: monospace;
}
```

Let's style our div holding the button element and the button,

```css
div.container-daily-calculate {
  /* background-color: #edb4b4; */
}
#button-daily-calculate {
  margin: 2%;
  height: 2em;
  padding-left: 1%;
  padding-right: 1%;
  color: ghostwhite;
  background-color: black;
  border-radius: 9px;
}
```

Let's style our div daily solutions

```css
div.container-daily-solutions {
  /* background-color: #edebb4; */
  /* display: none; */
}
div.content-daily-solutions {
  border: 1px solid;
  border-radius: 9px;
  margin: 2%;
  background-color: aliceblue;
}
```

Let's style the paragraph elements,

```css
.p2 {
  margin: 2%;
  font-family: monospace;
}
```

After that, style the weekly backup div's,

Let's style our div's weekly-questions,

```css
div.container-weekly-questions {
  /* background-color: antiquewhite; */
  /* display: none; */
}
```

Let's style the paragraph elements,

```css
div.content-weekly-questions {
  border: 1px solid;
  border-radius: 9px;
  margin: 2%;
  background-color: rgb(215, 250, 246);
  box-shadow: 0 5px 20px #494949;
}
```

Let's style our div holding the button element and button,

```css
div.container-weekly-calculate {
  /* background-color: #edb4b4; */
}
#button-weekly-calculate {
  margin: 2%;
  height: 2em;
  padding-left: 1%;
  padding-right: 1%;
  color: ghostwhite;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 5px 20px #494949;
}
```

Let's style our div daily solutions,

```css
div.container-weekly-solutions {
  /* background-color: #edebb4; */
  /* display: none; */
}
div.content-weekly-solutions {
  border: 1px solid;
  border-radius: 9px;
  margin: 2%;
  background-color: aliceblue;
  box-shadow: 0 5px 20px #494949;
}
```

# JavaScript

After completing the Front-End part, Now work on the checkbox to put display property none or block,

I added another div to HTML document to contain all the daily backup and similarly for weekly backup,

```css
const contentDaily = document.querySelector('.container-daily-backup')
const contentWeekly = document.querySelector('.container-weekly-backup')
const mainDailybackup = document.querySelector('#main-dailybackup')
const mainWeeklybackup = document.querySelector('#main-weeklybackup')

const checkboxDaily = document.querySelector('#daily-check-box')
const checkboxWeekly = document.querySelector('#weekly-check-box')

checkboxDaily.addEventListener('click',()=>{
    if (checkboxDaily.checked) {
        contentDaily.style.display = 'block'
        mainWeeklybackup.style.display = 'none'
    }
    else {
        contentDaily.style.display = 'none'
        mainWeeklybackup.style.display = 'block'
    }
})

checkboxWeekly.addEventListener('click',()=>{
    if (checkboxWeekly.checked) {
        mainDailybackup.style.display = 'none'
        contentWeekly.style.display = 'block'
        mainWeeklybackup.style.transition = '2s'
    }
    else {
        mainDailybackup.style.display = 'block'
        contentWeekly.style.display = 'none'
    }
})
```

# Problems

Problem 1

There was an issue when I wanted to keep the display none to the content of daily questions or solutions paragraph element which I will dynamically put it in block using JavaScript,

As a result, The problem I'm getting is a black bar which is due to the border of the div,

The solution, I gave the display none to its parent div which will fix my problem.

# Conclusion

I completed writing the Front-End part and displaying the elements dynamically by coding in JavaScript.

1.  JS addEventListener()
2.  JS checked property
3.  Lot of CSS

# My Code

1.  Code

    ![Alt text](1.%20day62%20code.png)

2.  Test cases,

    ![Alt text](2.%20day62%20test%20case%201.png)

    ![Alt text](3.%20day62%20test%20case%202.png)

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)

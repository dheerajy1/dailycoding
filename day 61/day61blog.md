I am not satisfied with the First project which I did on the #Day1 of #100DaysOfCode as I was new to coding, I only wrote the Logic with if statements with less programming skills.

As of Today #Day61, I am confident to build a good HTML CSS JavaScript project with clean code and good design. Also in the old Backup project, the daily backup failed to execute one test case so this motivated me to rebuild.

Hence I First designed as shown below, How my Front-End Design going to be so I can write clean/efficient code and responsive,

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670067676439/exoHyMogX.png align="left")

As shown above, I want to create an HTML page for my backup calculator project.

# HTML

Let's create a header with a class header that contains an H1 tag,

```xml
<header class="header">
        <h1>Backup Strategy</h1>
</header>
```

Let's create the main container div to hold our main daily backup and main weekly,

```xml
<div class="main-container">
</div>
```

Now, Inside inside this main container Let's create two div's with IDs,

```xml
<div id="main-dailybackup">
</div>
<div id="main-weeklybackup">
</div>
```

Now, Let's create a div that hold a button for each div main backups,

```xml
<div id="main-dailybackup">
<div class="daily-check-box">
<input type="checkbox" name="daily-check-button" id="daily-check-box">
</div>
</div>
```

Let's define a paragraph element with p tag,

```xml
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis, minima voluptas sequi aliquam quasi cupiditate eaque dolor laborum consequuntur earum tempora ab! Veritatis cumque maiores aspernatur dolores ab necessitatibus.</p>
```

# CSS

Let's style our header, I used CSS has selector,

```css
header:has(h1){
  border: 1px solid;
  text-align: center;
  margin-top: 2%;
  font-family: monospace;
}
```

Let's style our main-container,

```css
div.main-container {
  margin-top: 2%;
  border: 1px solid;
  display: grid;
  grid-template-columns: 2 1fr;
  background-color: azure;
}
```

Let's style our main-dailybackup,

```css
div#main-dailybackup{
  border: 1px solid;
  display: grid;
  grid-template-rows: 4 1fr;
  background-color: aqua;
}
```

Let's style our div daily-check-box,

```css
div.daily-check-box{
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
}
```

Let's style our ID daily-check-box,

```css
input[type = "checkbox"]#daily-check-box {
  width: 80px;
  height: 40px;
  appearance: none;
  background: #edb4b4;
  border-radius: 20px;
  box-shadow: 0 5px 10px #676666cc;
}
input:checked[type = "checkbox"]#daily-check-box {
  background: #2c2c2ca8;
}
input[type = "checkbox"]#daily-check-box::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #494949;
  transform: scale(1.1);
  box-shadow: 1px 2px 11px #7a7a7a;
}
input:checked[type = 'checkbox']#daily-check-box::before{
  left: 40px;
  background: #393939cb;
}
```

Let's give marign to p tag,

```css
p{
  margin: 2%;
  display: none;
}
```

# JavaScript

Our Aim is to hide p tag when un-checked,

First, Let's define a const variable to store p tag using querySelector,

```javascript
const ptag = document.querySelector('p')
```

Now, Let's define a const variable to store checkbox using querySelector,

```javascript
const checkbox = document.querySelector('#daily-check-box')
```

After that, Add onclick attribute to checkbox to call a function and define the function,

```javascript
function display(){
}
```

## Finally,

Using the checked property write an if condition to check for checkbox whether checked or not,

```javascript
if(checkbox.checked){
        ptag.style.display = 'block'
        console.log(1)
    }
    else{
        ptag.style.display = 'none'
        console.log(0)
    }
```

# Problem

Problem -1

Arose issues where the checkbox toggle left property bases from the div main container,

Solution: I put the div daily checkbox inside a div and gave a margin

and position relative to the div.daily-check-box,

# Finally,

I successfully completed the main div's design using grid columns and wrote JS code to hide a paragraph. I carefully wrote the CSS keeping in mind the responsiveness.

# Conclusion

1.  CSS grid
    
2.  CSS grid template column
    
3.  CSS input type checkbox selector
    
4.  CSS before
    
5.  Lot of CSS
    
6.  JavaScript checked property
    

# My Code

1.  Code
    
    ![Alt text](1.%20day61%20code.png)
    
2.  Front-end
    
    ![Alt text](2.%20day61%20preview%20front%20end.png)
    
    ![Alt text](3.%20day61%20preview%20front%20end.png)
    

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)
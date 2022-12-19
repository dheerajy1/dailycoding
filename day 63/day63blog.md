Today #Day63 of #100DaysOfCode, I am Re-Building my Backup Calculator.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670067676439/exoHyMogX.png)

As shown above, I want to create an HTML page for my backup calculator project.

# JavaScript

Let's re write the checkbox JS code using class list method,

```javascript
checkboxDaily.addEventListener('click', () => {
    contentDaily.classList.toggle('showblock')
    mainWeeklybackup.classList.toggle('showhidden')

})

checkboxWeekly.addEventListener('click', () => {
    mainDailybackup.classList.toggle('showhidden')
    contentWeekly.classList.toggle('showblock')
   //mainContainer.classList.toggle('switchmaincontent')
})
```

Let's add an addEventListener to calculate button,

```javascript
calculateDaily.addEventListener('click',()=>{
dailySolutions.style.display = 'block'
})
```

Now, Let's add a dropdown after creating the necessary HTML elements,

create a constant variable and select the drop down box using the query selector and create a variable, assign the class container weekdays using the query selector now add an event listener to the drop down box variable using the class list method and toggle property add the class show visibility to the container weekdays variable.

```javascript
dropdownbox.addEventListener('click', () => {
    containerWeekdays.classList.toggle('showvisibility')
})
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdownbox') && containerWeekdays.classList.contains('showvisibility'))
        containerWeekdays.classList.remove('showvisibility')
})
```

After that, Lets add event listener to the weekdays inside the dropdown,

```javascript
weekdays.forEach((weekday) => {
    weekday.addEventListener('click', () => {
        dropdownbox.value = weekday.innerHTML
    })
})
```

# HTML

Let's create a div container-weekdays holding weekdays,

```xml
<div class="p1div">
 4. My Database is Corrupted at&nbsp
 <div>
    <input type="text"  name="weekday" size="8" id="wd" class="dropdownbox"
           placeholder=" Weekday" readonly> ,
          <div class="container-weekdays">
          <p class="weekdays"> Sunday</p>
          <p class="weekdays"> Monday</p>
          <p class="weekdays"> Tuesday</p>
          <p class="weekdays"> Wednesday</p>
          <p class="weekdays"> Thursday</p>
          <p class="weekdays"> Friday</p>
          <p class="weekdays"> Saturday</p>
    </div>
</div>
```

Tip: `&nbsp` to give non-break space.

# CSS

Tip: Padding clockwise top

Let's add styling to the dropdownbox,

```css
background-color: #edebb4b7;
  position: absolute;
  /* padding: 5px 5px 11px 5px; */
  margin-top: 1px;
  height: 134px;
  border-radius: 7px;
  border: 1px solid;
  display: grid;
  grid-template-rows: 4 1fr;
  gap: 1%;
  overflow: hidden;
  visibility: hidden;
  box-shadow: 0 5px 20px #494949;
```

Now, add styling to the div weekdays,

```css
.weekdays{
  border-radius: 1px;
  padding-left: 6px;
  padding-top: 1px;
  padding-right: 6px;
  padding-bottom: 2px;
  cursor: pointer;
}
```

After that, add background when hovering,

```css
.weekdays:hover{
background-color: #ffffff;
}
```

# Problems

Problem - 1

Faced an issue where the dropdown comes below when I wrap the the weekdays inside a div element,

Solution, I kept the display inline flexbox and created a div element after the input on weekdays.

Problem -2

Faced an Issue where the drop-down won't close, I wanted to write a JavaScript code where clicking outside of the Dropbox should close the container drop-down.

Solution, I added addEventListener to the window.

Problem -2

Unable to make it responsive. will try to fix tomorrow.

# Conclusion

I completed creating a drown-down menu and decreased JS code using classlist method and toggle property. As usual CSS is giving me a headache.

1.  JS classlist method
    
2.  JS toggle property
    
3.  JS Arrow functions
    
4.  CSS Display Grid
    
5.  Lot of CSS
    

# My Code

1.  Code
    
    ![Alt text](1.%20day63%20code%20and%20preview.png)
    

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)
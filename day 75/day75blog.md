Today #Day75 of #100DaysOfCode, I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# Hour section HTML

Create a table with hour section class,

```css
<table class="hour-section">
</table>
```

create tbody element with data attribute,

```css
<table class="hour-section">
    <tbody data-hour-section>
    </tbody>
</table>
```

Now, create tr - table row and create td elements as a child,

```css
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
```

Now, create an info group class for the div with the label class as a child,

```css
<td>
<div class="info-group">
<div class="label">Thursday</div>
<div>3 PM</div>
</div>
</td>
```

Now, create a img element and give it a class

```css
<td>
<img src="/public/icons/cloud.svg" class="weather-icon" alt="">
</td>
```

Repeat the process for the other td elements,

```css
 <td>
      <div class="info-group">
      <div class="label">TEMP</div>
      <div>31&deg;</div>
      </div>
</td>
<td>
      <div class="info-group">
      <div class="label">FL TEMP</div>
      <div>31&deg;</div>
</td>
<td>
      <div class="info-group">
      <div class="label">WIND</div>
      <div>9kmph</div>
      </div>
</td>
<td>
      <div class="info-group">
      <div class="label">PRECIP</div>
      <div>0.1in</div>
      </div>
</td>
```

# Hour section CSS

Now, style hour section to take full screen size,

```css
.hour-section{
width: 100%;
text-align: center;
border-spacing: 0;
}
```

Now, style table rows,

```css
.hour-row{
background-color: hsl(200, 100%, 75%);
}
```

After that, to get different background color use nth-child() CSS selector,

every even child,

```css
.hour-row:nth-child(2n){
background-color: hsl(200, 60%, 70%);
}
```

Now, select each td element inside hour row class,

use `>` to select a parent's child,

```css
.hour-row > td{
  padding: 0.25rem .5rem;
}
```

# Conclusion

I completed the writing portion of the Hour section HTML and Styling CSS part of the weather API project.

# Code

1. code
    
    ![Alt text](1.%20day75%20code.png)
    
    preview
    
    ![Alt text](2.%20day75%20preview.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
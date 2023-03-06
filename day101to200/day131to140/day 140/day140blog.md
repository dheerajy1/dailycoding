Today #Day140 of #365DaysOfCode, I am Building Hover Glide Image Gallery using HTML CSS & JavaScript.

# Get Tiles on the screen,

<mark>Tip: div#gallery&gt;div.title*9</mark>

```html
<div id="gallery">
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
</div>
```

styling body, galleryID, title,

```css
body{
    background-color: rgb(10,10,10,.8);
    height: 100vh;
    margin: 0;
    overflow: hidden;
}
#gallery{
    height: 140vmax;
    width: 140vmax;
    position: absolute;
}
.title{
    position: absolute;
    border-radius: 1vmax;
}
```

# Space tiles apart,

styling nth child,

```css
.title:nth-child(1){
    background-color: rgb(255,238,88);
    height: 14%;
    width: 28%;
    left: 5%;
    top: 5%;
}
.title:nth-child(2){
    background-color: rgb(66, 165, 245);
    height: 24%;
    width: 14%;
    left: 42%;
    top: 12%;
}
```

3rd,4th,6th,7th,8th,9th titles,

```css
.title:nth-child(3){
    background-color: rgb(239, 83, 80);
    height: 18%;
    width: 16%;
    left: 12%;
    top: 34%;
}
.title:nth-child(4){
    background-color: rgb(102, 187, 106);
    height: 14%;
    width: 12%;
    left: 45%;
    top: 48%;
}
.title:nth-child(5){
    background-color: rgb(171, 71, 188);
    height: 16%;
    width: 32%;
    left: 8%;
    top: 70%;
}
.title:nth-child(6){
    background-color: rgb(255, 167, 38);
    height: 24%;
    width: 24%;
    left: 68%;
    top: 8%;
}
.title:nth-child(7){
    background-color: rgb(63, 81, 181);
    height: 16%;
    width: 20%;
    left: 50%;
    top: 74%;
}
.title:nth-child(8){
    background-color: rgb(141, 110, 99);
    height: 24%;
    width: 18%;
    left: 72%;
    top: 42%;
}
.title:nth-child(9){
    background-color: rgb(250, 250, 250);
    height: 10%;
    width: 8%;
    left: 84%;
    top: 84%;
}
```

# Shift tiles on mousemove,

convert the x and y position of the mouse from pixel value to decimal value and shifting the galleryID with this percentage,

add listener to window to check for mouse movements and grap the mouse x & y positions,

```javascript
const gallery = document.getElementById('gallery')

window.onmousemove = (e)=>{
    const mouseX = e.clientX,
          mouseY = e.clientY;
    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;
    const panX = gallery.offsetWidth * xDecimal * -1,
          panY = gallery.offsetHeight * yDecimal * -1;
    gallery.style.transform = `translate(${panX}px,${panY}px)`
}
```

cutout the height and width of the window,

```javascript
const maxX = gallery.offsetWidth - window.innerWidth,
      maxY = gallery.offsetHeight - window.innerHeight;
```

# Conclusion

I completed placing titles and added hover effect to move for the project Hover Glide Image Gallery using HTML CSS & JavaScript.

# Code

1. code
    
    ![Alt text](1.%20day140%20code.png)
    
    preview
    
    ![Alt text](2.%20day140%20preview.png)
    

# Source: hover glide image[\[Link\]](https://www.youtube.com/watch?v=GHZBa_R93ag)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)

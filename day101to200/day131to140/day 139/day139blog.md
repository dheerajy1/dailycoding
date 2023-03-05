Today #Day139 of #365DaysOfCode, I am Building Responsive Filterable Image Gallery using HTML CSS & JavaScript.

# Creating fullscreen image preview box (HTML & CSS)

<mark>Tip: div.preview-box&gt;div.details&gt;span.title&gt;p</mark>

```html
<div class="preview-box">
     <div class="details">
        <span class="title">Image Category
            <p>Not defined</p>
         </span>
         <span class="icon fas fa-times"></span>
     </div>
</div>
```

add the below link for icons,

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
```

image-box,

```html
<div class="image-box">
                <img src="" alt="">
</div>
```

Now, styling the preview box,

```css
.preview-box{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  max-width: 700px;
  width: 100%;
  padding: 0 5px 5px 5px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.preview-box .details{
  display: flex;
  align-items: center;
  padding: 13px 15px 13px 10px;
  justify-content: space-between;
}

.preview-box .details .title{
  display: flex;
  font-size: 18px;
  font-weight: 400;
}
.preview-box .details p{
  margin-left: 5px;
  font-weight: 500;
}
.details .icon{
  font-size: 22px;
  cursor: pointer;
}
```

Then, styling the image box,

```css
.preview-box .image-box{
  display: flex;
  width: 100%;
  border-radius: 0 0 5px 5px;
}
.image-box img{
width: 100%;
}
```

define a div with class to give the baground a dim effect when viewing box,

```html
<div class="shadow"></div>
```

styling,

```css
.shadow{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: none;
  background: rgba(0, 0, 0,0.4);
}
```

# Function for Image preview (JS)

define const variables,

```javascript
const previewBox = document.querySelector(".preview-box"),
      previewImg = document.querySelector("img"),
      closeIcon = document.querySelector(".icon");
```

adding onclick attribute in all available images,

```javascript
for (let index = 0; index < filterImg.length; index++) {
    filterImg[index].setAttribute('onclick','preview(this)');
}
```

add the below css class,

```css
.preview-box.show{
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%,-50%) scale(1);
}
```

full-screen preview image function,

```javascript
function preview(element) {
  let selectedprevImg = element.querySelector("img").src;
  previewImg.src = selectedprevImg;
  previewBox.classList.add("show");
  closeIcon.onclick = () => {
    previewBox.classList.remove("show");
  };
}
```

Now, passing the data name to category name,

```javascript
categoryName.textContent = element.getAttribute('data-name')
```

Now, add the shadow

```css
.shadow.show{
  display: block;
}
```

add the show class,

```javascript
shadow.classList.add("show");
```

remove the class,

```javascript
shadow.classList.remove("show");
```

to prevent user scrolling down when previewing box,

```javascript
document.querySelector('body').style.overflow = 'hidden'
```

and once closes preview box,

```javascript
document.querySelector("body").style.overflow = "scroll";
```

# Conclusion

I finished adding a fullscreen image preview box to the Filterable Image Gallery project.

This brings the project Filterable Image Gallery to a conclusion.

# Code

1. code
    
    ![Alt text](1.%20day139%20code.png)
    
    preview
    
    ![Alt text](2.%20day139%20preview.png)
    

# Source: Filter Image Gallery[\[Link\]](https://www.youtube.com/watch?v=OeMuUKedtPc)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
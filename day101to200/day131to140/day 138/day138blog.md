Today #Day138 of #365DaysOfCode, I am Building Responsive Filterable Image Gallery using HTML CSS & JavaScript.

# JavaScript Start

create a script.js file

include the script.js file in HTML,

```html
<script src="/script.js"></script>
```

selecting all required elements

```javascript
const filterItem = document.querySelector('.items')
const filterImg = document.querySelector('.image')
```

# Making all images filterable (JS)

Add data attribute to all span and div with images,

The code below removes the active class and adds it to the clicked item, and it stores the data attribute in the filterName variable.

```javascript
filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains('item')){
        filterItem.querySelector('.active').classList.remove('active')
        selectedItem.target.classList.add('active')
        let filterName = selectedItem.target.getAttribute('data-name')
    }
}
```

Now, filtering the images,

add these CSS hide and show classes,

add animation,

```css
.gallery .image.hide {
  display: none;
}
.gallery .image.show {
  animation: animate 0.4s ease;
}
@keyframes animate {
  0%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1);
  }
}
```

The code below adds show class if filterImage and filterName is equal or all.

if not adds hide class and removes show class.

```javascript
filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name");
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
```

# Conclusion

I completed filtering images in JavaScript for the Filterable Image Gallery project.

# Code

1. code
    
    ![Alt text](1.%20day138%20code.png)
    
    preview
    
    ![Alt text](2.%20day138%20preview.png)
    

# Source: Filter Image Gallery[\[Link\]](https://www.youtube.com/watch?v=OeMuUKedtPc)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
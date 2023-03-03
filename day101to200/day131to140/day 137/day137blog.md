Today #Day137 of #365DaysOfCode, I am Building Responsive Filterable Image Gallery using HTML CSS & JavaScript.

# HTML & CSS

Tag section,

<mark>Tip: div.wrapper&gt;nav&gt;div.items&gt;span.item*6</mark>

```xml
<div class="wrapper">
        <nav>
            <div class="items">
                <span class="item">ALL</span>
                <span class="item">Bag</span>
                <span class="item">Shoe</span>
                <span class="item">Watch</span>
                <span class="item">Camera</span>
                <span class="item">Headphone</span>
            </div>
        </nav>
</div>
```

styling wrapper class,

```css
body{
    padding: 10px;
}
.wrapper{
    background-color: aquamarine;
    margin: 100px auto;
    max-width: 1100px;
}
```

Styling items,

```css
nav .items{
    display: flex;
    max-width: 720px;
    background-color: cornsilk;
}
```

Styling item,

```css
nav .items .item{
    padding: 7px 25px;
    font-size: 18px;
    font-weight: 500;
    border: 2px solid #9b9797;
    border-radius: 15px;
    cursor: pointer;
}
```

styling nav,

```css
.wrapper nav{
    display: flex;
    justify-content: center;
}
```

add active class to the first item & styling,

```html
<span class="item active">All</span>
```

changing colour of high item on hovering,

```css
nav .items .active,
nav .items .item:hover{
    background-color: cornsilk;
}
```

HTML for images,

<mark>Tip: div.gallery&gt;div.image&gt;span&gt;img</mark>

```html
<div class="gallery">
    <div class="image"><span><img src="Assets/bag-1.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/bag-2.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/camera-1.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/camera-2.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/headphones-1.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/headphones-2.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/shoe-1.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/shoe-2.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/watch-1.jpg" alt=""></span></div>
    <div class="image"><span><img src="Assets/watch-2.jpg" alt=""></span></div>
</div>
```

styling the gallery and images,

```css
.gallery{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}
.gallery .image{
    padding: 7px;
    width: calc(100%/4);
}
.gallery .image span{
    display: flex;
    width: 100%;
    overflow: hidden;
}
.gallery .image img{
    width: 100%;
    vertical-align: middle;
    transition: all .3s ease;
}
```

on hover,

```css
.gallery .image:hover img{
    transform: scale(1.1);
}
```

# Responsive CSS Code

```css
@media (max-width: 1000px) {
  .gallery .image {
    width: calc(100% / 3);
  }
}
@media (max-width: 800px) {
  .gallery .image {
    width: calc(100% / 2);
  }
}
@media (max-width: 700px) {
  nav .items {
    max-width: 600px;
  }
  nav .items .item {
    padding: 7px 15px;
  }
}
@media (max-width: 600px) {
  nav .items {
    flex-wrap: wrap;
    justify-content: center;
  }
  nav .items .item {
    margin: 5px;
  }
  .gallery .image {
    width: calc(100% / 1);
  }
}
```

# Conclusion

I completed coding HTML and the Responsive CSS portion of the Filterable Image Gallery project.

# Code

1. code
    
    ![Alt text](1.%20day137%20code.png)
    

# Source: Filter Image Gallery[\[Link\]](https://www.youtube.com/watch?v=OeMuUKedtPc)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
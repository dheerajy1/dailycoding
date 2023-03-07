Today #Day141 of #365DaysOfCode, I am Building Hover Glide Image Gallery using HTML CSS & JavaScript.

# to get a smooth effect,

```javascript
gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
})
```

# add images,

add img tags and paste the unsplash links,

Now,

styling img tags,

```css
.tile > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 800ms ease,transform 800ms ease;
}
```

adding hover effect to reveal the image,

add `transition: transform 800ms ease;` to class title,

```css
.tile:hover {
  transform: scale(1.1);
}

.tile:hover > img {
  opacity: 1;
  transform: scale(1.01);
}
```

# Conclusion

I completed adding smooth transitions & added reveal images for the project Hover Glide Image Gallery using HTML CSS & JavaScript.

This brings the project Hover Glide Image Gallery to a conclusion.

# Code

1. code
    
    ![Alt text](1.%20day141%20code.png)
    
    preview
    
    ![Alt text](2.%20day141%20preview.png)
    

# Source: hover glide image[\[Link\]](https://www.youtube.com/watch?v=GHZBa_R93ag)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
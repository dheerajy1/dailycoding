Today #Day83 of #100DaysOfCode, I am doing the frontend project 'loading animation' and practicing JavaScript Promises Interview Questions.

# 1\. JavaScript Promises

## i. What are the states of a Promise?

1. pending
    
2. Fulfilled
    
3. rejected
    

Floating?

## ii. Is await only used with only Promises?

No, await keyword not only used for promises but can also be used for objects with .then() method.

## iii. What is the output of the following code?

```javascript
const promise = new Promise((resolve, reject) => {
  reject(Error('Some error occurred'));
})
promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));
```

Some error occurred

Some error occurred

## iv. How to write a sleeping function using promise?

```javascript
function sleep(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}
sleep(2000).then((res)=>{
console.log(7)
})
```

### code: sleepfun [\[click\]](https://www.sololearn.com/compiler-playground/WBZawa9lDaLN)

# 2.Frontend project loading animation

## HTML

create a div with a class container

and with 12 child divs inside

Tip: <mark>Use the shortcut div.loading*12</mark>

```xml
   <div class="loading-container center">
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
    </div>
```

## CSS

It is line dividing a circle into 12 parts means 360/12 = 30° angle.

and we are animating the background color from 0% to 100% in 1 s and giving animation delay to start the rest child after the first child reached 100%,

make the container center

```css
.loading-container.center{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
```

Now, style a single line and give animation name,

```css
.loading-container  .loading{
    background-color: rgb(0, 0, 0);
    position: absolute;
    left: 0.4em;
    bottom: 0;
    width: 0.07em;
    height: 0.27em;
    border-radius: 0.05em;
    transform-origin: center -0.2em;
    animation: loading-fade 1s infinite linear;
}
```

style the first child,

```css
.loading-container .loading:nth-child(1){
    animation-delay: 0s;
    transform: rotate(0deg);
}
```

Similarly for all the childs,

```css

.loading-container .loading:nth-child(2){
    animation-delay: 0.083s;
    transform: rotate(30deg);
}
.loading-container .loading:nth-child(3){
    animation-delay: 0.116s;
    transform: rotate(60deg);
}
.loading-container .loading:nth-child(4){
    animation-delay: 0.249s;
    transform: rotate(90deg);
}
.loading-container .loading:nth-child(5){
    animation-delay: 0.332s;
    transform: rotate(120deg);
}
.loading-container .loading:nth-child(6){
    animation-delay: 0.415s;
    transform: rotate(150deg);
}
.loading-container .loading:nth-child(7){
    animation-delay: 0.498s;
    transform: rotate(180deg);
}
.loading-container .loading:nth-child(8){
    animation-delay: 0.581s;
    transform: rotate(210deg);
}
.loading-container .loading:nth-child(9){
    animation-delay: 0.664s;
    transform: rotate(240deg);
}
.loading-container .loading:nth-child(10){
    animation-delay: 0.747s;
    transform: rotate(270deg);
}
.loading-container .loading:nth-child(11){
    animation-delay: 0.83s;
    transform: rotate(300deg);
}
.loading-container .loading:nth-child(12){
    animation-delay: 0.83s;
    transform: rotate(330deg);
}
```

## Finally,

define the keyframes for the animation,

```css

@keyframes loading-fade{
    0%{
        background-color: rgb(226, 221, 221);
    }
    100%{
        background-color: rgb(0, 0, 0);
    }
}
```

# Conclusion

I have completed the loading animation using HTML and CSS and practiced JavaScript Promises Interview Questions.

# Code

1. code
    
    ![Alt text](1.%20day83%20code.png)
    
    preview
    
    ![Alt text](2.%20day83%20preview.png)
    

# Source: Spinner \[click\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
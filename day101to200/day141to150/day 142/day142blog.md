Today #Day142 of #365DaysOfCode, I am Building CSS Typing Effect.

# HTML

```html
<div class="wrapper">
        <div class="typing-demo">
            This is a typing demo.
        </div>
</div>
```

# CSS

Centring Items,

```css
.wrapper {
    height: 100vh;
    /*This part is important for centering*/
    display: grid;
    place-items: center;
}
```

styling the content,

```css
.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}
```

adding keyframes for typing animation,

```css
@keyframes typing {
  from {
    width: 0
  }
}
```

adding keyframes for blinking cursor animation,

we are blinking the border,

```css
@keyframes blink {
  50% {
    border-color: transparent
  }
}
```

# Conclusion

I completed Building CSS Typing Effect.

# Code

1. code
    
    ![Alt text](1.%20day142%20code.png)
    
    preview
    
    ![Alt text](2.%20day142%20preview.png)
    

# Source: CSS Typing Effect[\[Link\]](https://codepen.io/denic/pen/GRoOxbM)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
Today #Day95 of #100DaysOfCode, I am coding and explaining by 'Building a Clock in JavaScript' taught by \[WebDevSimplified\].

# HTML

create a div with a class clock,

```xml
<div class="clock">
</div>
```

create a separate div for each hand for the clock,

```xml
<div class="hand hour" data-hour-hand></div>
<div class="hand minute" data-minute-hand></div>
<div class="hand second" data-second-hand></div>
```

create news for all the numbers nick clock hey give the respective text content and also a class to be able to pick JavaScript,

using code emmet : `div.number.number$*12{$*12}`

```xml
<div class="hand hour" data-hour-hand></div>
<div class="hand minute" data-minute-hand></div>
<div class="hand second" data-second-hand></div>
<div class="number number1">1</div>
<div class="number number2">2</div>
<div class="number number3">3</div>
<div class="number number4">4</div>
<div class="number number5">5</div>
<div class="number number6">6</div>
<div class="number number7">7</div>
<div class="number number8">8</div>
<div class="number number9">9</div>
<div class="number number10">10</div>
<div class="number number11">11</div>
<div class="number number12">12</div>
```

To rotate each element about its axis,

I gave each number another div with class,

```xml
<div class="number number1"><div class="numberup number1">1</div></div>
<div class="number number2"><div class="numberup number2">2</div></div>
<div class="number number3"><div class="numberup number3">3</div></div>
<div class="number number4"><div class="numberup number4">4</div></div>
<div class="number number5"><div class="numberup number5">5</div></div>
<div class="number number6"><div class="numberup number6">6</div></div>
<div class="number number7"><div class="numberup number7">7</div></div>
<div class="number number8"><div class="numberup number8">8</div></div>
<div class="number number9"><div class="numberup number9">9</div></div>
<div class="number number10"><div class="numberup number10">10</div></div>
<div class="number number11"><div class="numberup number11">11</div></div>
<div class="number number12">12</div>
```

# CSS

border-box sizing will make size easier,

styling the body,

justify items will center the items along the horizontal axis i.e main axis,

Align items will center the items along the vertical axis i.e cross-axis,

overflow hidden property will prevent the body from scrolling that means whatever the items out of the body will be hidden hence no scrolling,

```css
body {
  background: linear-gradient(to right, hsl(200, 100%, 50%), hsl(175, 100%, 50%));
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}
```

style the clock itself,

```css
.clock {
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
}
```

position all the numbers, doing shared style

rotating the numbers,

```css
.clock .number {
  --rotation: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--rotation));
  font-size: 1.5rem;
}
```

Then, rotate individual number,

```css
.clock .number1 { --rotation: 30deg; }
.clock .number2 { --rotation: 60deg; }
.clock .number3 { --rotation: 90deg; }
.clock .number4 { --rotation: 120deg; }
.clock .number5 { --rotation: 150deg; }
.clock .number6 { --rotation: 180deg; }
.clock .number7 { --rotation: 210deg; }
.clock .number8 { --rotation: 240deg; }
.clock .number9 { --rotation: 270deg; }
.clock .number10 { --rotation: 300deg; }
.clock .number11 { --rotation: 330deg; }
```

After that, I want to rotate each number,

```css
.clock  .numberup.number1{transform: rotate(-25deg);}
.clock  .numberup.number2{transform: rotate(-60deg);}
.clock  .numberup.number3{transform: rotate(-90deg);}
.clock  .numberup.number4{transform: rotate(-120deg);}
.clock  .numberup.number5{transform: rotate(-150deg);}
.clock  .numberup.number6{transform: rotate(180deg);}
.clock  .numberup.number7{transform: rotate(150deg);}
.clock  .numberup.number8{transform: rotate(120deg);}
.clock  .numberup.number9{transform: rotate(90deg);}
.clock  .numberup.number10{transform: rotate(60deg);}
.clock  .numberup.number11{transform: rotate(30deg);}
```

Now, style the shared style for hands,

but we will dynamically rotate in js,

the transform-origin property will transform the origin,

the Z index property is given so that the hand is always on top of the numbers,

```css
.clock .hand {
  --rotation: 0;
  position: absolute;
  bottom: 50%;
  left: 50%;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform-origin: bottom;
  z-index: 10;
  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));
}
```

style individual hands,

```css
.clock .hand.second {
  width: 3px;
  height: 45%;
  background-color: red;
}
.clock .hand.minute {
  width: 7px;
  height: 40%;
  background-color: black;
}
.clock .hand.hour {
  width: 10px;
  height: 35%;
  background-color: black;
}
```

styling the circle at the center using pseudo-element,

```css
.clock::after {
  content: '';
  position: absolute;
  background-color: black;
  z-index: 11;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
```

# Conclusion

I completed the HTML and CSS part in Building a Clock. I have learned about how to use CSS transform to center elements, how to use CSS transform to rotate elements on an axis, CSS pseudo element.

# Code

1. code
    
    ![Alt text](1.%20day95%20code.png)
    
    preview
    
    ![Alt text](2.%20day95%20preview.png)
    

# Source: WebDevSimplified [\[Link\]](https://www.youtube.com/watch?v=Ki0XXrlKlHY&t=12s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
Today #Day68 of #100DaysOfCode, I am coding and explaining the 'Javascript Layout Animations' project taught by [\[developedbyed\]](https://www.youtube.com/@developedbyed)

This article is a continuation of day 67.

# CSS

Now, styling the cards

```css
.card {
  height: 15rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #93a9ff;
  grid-column: span 3;
  font-size: 1.2rem;
  padding: 5rem;
  box-shadow: 0.7rem 0.7rem 0rem #252525;
  border: 4px solid #252525;
  gap: 2rem;
}
```

Now, let's remove the P tag from the HTML document we will only add this like we will only show it when we click on it hence remove it now,

```css
.card p {
  line-height: 2rem;
  display: none;
}
```

Then, we are adding the active class using JavaScript dynamically hence style that in advance to display the P tag display to block when we click on it ,

```css
.card.active p {
  display: block;
}
```

Next, let's style our cards when it is active that is when we click on it using the active class you are staying in advance ,

```css
.card.active {
  grid-column: 1 / span 6;
  grid-row: 1;
  order: 0;
  height: auto;
}
```

After that, let's style the inactive cards that is other than the clicked card using the inactive class,

```css
.card.is-inactive {
  grid-column: span 2;
}
```

# JavaScript

Add add event listener to each card to listen for the click, to add each click use for each() method,

the isCardActive variable holds the boolean value which will be returned by the contains() method,

can we are using for each method to remove the active and inactive class for the next click in this code block,

And in the if statement we are negating the boolean value from the isCardActive variable and we are adding the active class to the card,

```javascript
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const state = Flip.getState(cards)

        const isCardActive = card.classList.contains('active')

        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove('active')
            otherCard.classList.remove('is-inactive')
        })
        if (!isCardActive) card.classList.add('active')
    })
})
```

Now, to add in-active class only to cards other than clicked,

so the logic here is we will remove the active and inactive class of all the elements usign a foreach method and then we are checking the isactive variable boolean value and also check the index object clicked card with the other index if not this matches,

```javascript
if(!isCardActive&& index!==otherIdx) otherCard.classList.add('is-inactive')
```

Finally, adding animaiton,

```javascript
Flip.from(state,{
            duration: 1,
            ease: "expo.out",
            absolute: true,
            onComplete: ()=>{
                gsap.to('.card p',{})
            }
})
```

# **Conclusion**

I completed the JavaScript Layout Animations taught by [\[developedbyed\]](https://www.youtube.com/@developedbyed)

# Code

1. code
    
    ![Alt text](1.%20day68%20code.png)
    
2. preview
    
    ![Alt text](2.%20day68%20preview.png)
    
    ![Alt text](3.%20day68%20preview%202.png)
    

# **Source: Code with developedbyed** [**\[click\]**](https://youtu.be/xB27AuRa5h4)

# Author: Dheeraj.y

# Connect with me:

* [**My Twitter**](https://twitter.com/yssdheeraj)
    
* [**My LinkedIn**](https://www.linkedin.com/in/dheerajy1/)
    
* [**My GitHub**](https://github.com/dheerajy1)
    
* [**My Hashnode**](https://dheerajy1.hashnode.dev/)
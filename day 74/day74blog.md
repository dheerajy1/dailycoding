Today #Day74 of #100DaysOfCode, I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# Day section HTML

Now, create a day section with data attribute to select in JS,

```xml
<section class="day-section" data-day-section>
</section>
```

Then, create a card with an image and child divs for data inside,

which will be used as a template later,

```xml
 <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Monday</div>
    <div>32&deg;</div>
```

repeat it

```xml
  </div>
  <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Tuesday</div>
    <div>32&deg;</div>
  </div>
  <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Wednesday</div>
    <div>32&deg;</div>
  </div>
  <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Thursday</div>
    <div>32&deg;</div>
  </div>
  <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Friday</div>
    <div>32&deg;</div>
  </div>
  <div class="day-card">
    <img src="/public/icons/cloud.svg" class="weather-icon" alt="">
    <div class="day-card-day">Saturday</div>
    <div>32&deg;</div>
  </div>
```

# Day section CSS

Now, Style the day section,

use a display grid to place the cards,

```css
.day-section{
  display: grid;
  grid-template-columns: repeat(auto-fit,75px );
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
}
```

Now, style the card itself,

use display flex column and align-items center so that all the dips will appear in one column and centre,

```css
.day-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid hsl(200, 100%, 10%);
  border-radius: .25rem;
  padding: .25rem;
}
```

Now, style the day of the card, as it is overflowing,

```css
.day-card-day{
  font-size: .75rem;
  color: hsl(200, 100%, 20%);
margin-top: .5rem;
}
```

# Conclusion

I completed the writing portion of the Day section HTML and Styling CSS part of the weather API project.

# Code

1. code
    
    ![Alt text](1.%20day74%20code.png)
    
    preview
    
    ![Alt text](2.%20day74%20preview.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
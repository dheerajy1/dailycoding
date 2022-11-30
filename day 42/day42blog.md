Today #day42 of #100daysofcode, I have completed 7.49 and 7.50 lessons and practice code in JS course. @Sololearn


# creating animations
- Now that we know how to select and change DOM elements, we can create a simple animation.
- To create an animation, we need to change the properties of an element at small intervals of time. 
- We can achieve this by using the setInterval() method, which allows us to create a timer and call a function to 
   change properties repeatedly at defined intervals (in milliseconds).

Example:
- `var t = setInterval(function, 500);` 

- the apple code will call the function set an interval of 0.5 seconds
- write a function that will increment and add it to the CSS position left property attribute.

pending code: [[click](https://www.sololearn.com/compiler-playground/WVBU91MAo1TT)]

Updated code: Moving box animation code project [[click](https://www.sololearn.com/compiler-playground/WVBU91MAo1TT)]

# handling events

- JavaScript code can be written to execute when an event occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form.
- A handler function is called when an event occurs on a target element.

Typical HTML events include:

- onclick - occurs when the user clicks an element
- on load - occurs when an object is loaded
- Corresponding events can be added to HTML elements as attributes.

For example: `<p onclick="someFunc()">some text</p>`


Code: [click](https://www.sololearn.com/compiler-playground/WPLRrnNx7rvv)

Code: [click](https://www.sololearn.com/compiler-playground/W5t2199yRm22)

## Event onload
- The onload and onunload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.
  - `<body onload="doSomething()">`

- Similarly, the window.onload event can be used to run code after the whole page is loaded.
  - `window.onload = function() {// code}`

## Event onchange
- The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.
-It’s important to understand events, because they are an essential part of dynamic web pages.

## Event Listeners
- The addEventListener() method adds an event listener to an element without replacing any existing event listeners. - One element can have multiple event handlers.
- You can also add multiple event handlers of the same type to a single element, for example, two "click" events.
  - `element.addEventListener(event, function, useCapture);`
  -  The first parameter is the event's type (like "click" or "mousedown").
  -  The second parameter is the function we want to call when the event occurs.
  -  The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. 
  -  This parameter is optional, and will be described in the next lesson.

Note: 
-  you don't use the "on" prefix for this event; use "click" instead of "onclick".



# Images
- 7.50 completed
![11. day42 7.50 completed.png](/day%2042/Images/11.%20day42%207.50%20completed.png)

# Conclusion
- creating animations
- handling events
- Event onload
- Event onchange
- Event Listeners
- quiz [[click](/day%2042/Images/)]
- code

# My Code: 
- pending code
![3. day42 pending code.png](/day%2042/Images/3.%20day42%20pending%20code.png)
- Updated code: 'Moving Box Animation' Code project
  ![day42 Moving box animation.png](/day%2042/Images/day42%20Moving%20box%20animation.png)


# References [Sololearn ](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y
# Connect with me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
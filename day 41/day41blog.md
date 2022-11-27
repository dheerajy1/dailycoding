Today #day41 of #100daysofcode, I have completed 7.47 and 7.48 lessons and code practice problems in JS course. @Sololearn

# changing elements

## Changing Attributes

- After you've decided which element(s) to work with, you can change their attributes.
- we can change the text content of an element using the innerHTML property.
- Practically all attributes of an element can be changed using JavaScript.

Code: [click](https://www.sololearn.com/compiler-playground/WAixBWKQP36t)

## Changing Style

- The style of HTML elements can also be changed using JavaScript.
- All style attributes can be accessed using the style object of the element.
- All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.
For example: the background-color property should be referred to as backgroundColor.

Code: [click](https://www.sololearn.com/compiler-playground/WUfz4H5CvOa3)

# Adding and removing elements

## Creating Elements

- element.cloneNode() clones an element and returns the resulting node.
- document.createElement(element) creates a new element node.
- document.createTextNode(text) creates a new text node.

Example: `var node = document.createTextNode("Some new text");`

- This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
- element.appendChild(newNode) adds a new child node to an element as the last child node.
- element.insertBefore(node1, node2) inserts node1 as a child before node2.

code: [click](https://www.sololearn.com/compiler-playground/WgsxB9zdZslP)

## Removing Elements

- To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.

code: [click](https://www.sololearn.com/compiler-playground/Wq4pRT9nkp0N)

- the parentNode property to get the parent of the element we want to remove:
`var child = document.getElementById("p1");
child.parentNode.removeChild(child);`


## Replacing Elements

- To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.

code: [click](https://www.sololearn.com/compiler-playground/WIRyWLXf7vXv)

# Images
- 7.47 & 7.48 completed
![11. day41 7.47&7.48 completed.png](/day%2041/Images/11.%20day41%207.47%267.48%20completed.png)

# Conclusion

- changing elements
- Changing Attributes
- Changing Style
- Creating Elements
- Removing Elements
- Replacing Elements
- quiz [[click](/day%2041/Images/)]
- code

# My Code: 
- code
![9. day41 prac prob call.png](/day%2041/Images/9.%20day41%20prac%20prob%20call.png)

# References [Sololearn ](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y
# Connect with me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
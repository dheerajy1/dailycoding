Today #day40 of #100daysofcode, I have completed 7.45 and 7.46 lessons in JS course. @Sololearn


# What is DOM?

- When you open a webpage in a browser, the HTML of the page is loaded and visually rendered on the screen.
- To accomplish this, the browser creates the page's Document Object Model, which is an object-oriented model of its logical structure.
- The DOM of an HTML document can be represented as a nested set of boxes:

    ![DOM of an HTML document day40.png](/day%2040/Images/DOM%20of%20an%20HTML%20document%20day40.png)

- JavaScript can be used to dynamically add, delete, and modify elements in a page's DOM.

# DOM Tree
- A document is represented by the DOM as a tree structure.
- HTML elements are transformed into interconnected nodes in the tree.
- All of the nodes in the tree are related to one another in some way.
- Child nodes are possible for nodes. Siblings are nodes on the same tree level.
- Understanding the relationships between elements in an HTML document is essential for manipulating them with JavaScript.

# The document Object
- DOM elements can be accessed using a predefined document object in JavaScript.
- All objects on your webpage are owned (or rooted) by the document object.
- syntax: `document.body.innerHTML = "Some text";`
- Because body is a DOM element, we can change the content of the innerHTML property using the document object.


# Selecting elements 

- HTML elements are all objects. Every object, as we know, has properties and methods.
- The document object contains methods for selecting the desired HTML element.
- Most used three methods used for selecting html elements:
      
      //finds element by id
      document.getElementById('id') 
      
      //finds elements by class name
      document.getElementsByClassName("name") 
      
      //finds elements by tag name
      document.getElementsByTagName("name")

# Working with DOM

- Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:

   > element.childNodes returns an array of an element's child nodes.
    element.firstChild returns the first child node of an element.
    element.lastChild returns the last child node of an element.
    element.hasChildNodes returns true if an element has any child nodes, otherwise false.
    element.nextSibling returns the next node at the same tree level.
    element.previousSibling returns the previous node at the same tree level.
    element.parentNode returns the parent node of an element.


# Images

- 7.45 lesson completed
![4. day40 7.45 lesson completed.png](/day%2040/Images/4.%20day40%207.45%20lesson%20completed.png)

- 7.46 completed
![9. day40 7.46 completed.png](/day%2040/Images/9.%20day40%207.46%20completed.png)


# Conclusion
- DOM is document object model.
- DOM Tree
- The document Object
- Selecting elements 
- Working with DOM
- quiz [[click](/day%2040/Images/)]
- practice code


# Code: 
- practice code
![7. day40 prac prob.png](/day%2040/Images/7.%20day40%20prac%20prob.png)

# References [Sololearn ](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y
# Connect with me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
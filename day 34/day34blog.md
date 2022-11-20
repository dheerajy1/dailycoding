Today #day34 of #100daysofcode, I have completed 5.31 & 5.32 and 5.33 lessons and Two code practice problems JS course. @Sololearn

### Objects

### Introducing objects

## JavaScript Objects

- JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.
- Containers for data values are JavaScript variables. Objects are variables as well, although they have a wide range of values.
- JavaScript objects are containers for named values.

### Object Properties

- the 2 ways in which you can access an object properties are:

  ```
  objectName.propertyName
  //or
  objectName['propertyName']
  ```

- The length property is used to count the number of characters in a property or string.

      var course = {name: "JS", lessons: 41};
      document.write(course.name.length);

- Objects are one of the core concepts in JavaScript.

### Object Methods
- An object method is a property that contains a function definition.
- Syntax: objectName.methodName()
- Methods are functions that are stored as object properties.


## Creating your own object

### The Object Constructor
- The standard way to create an "object type" is to use an object constructor function.
- syntax: `function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}`
- The this keyword refers to the current object. Note that `this` is not a variable. It is a keyword, and its value cannot be changed.

### Creating Objects
-  new keyword is used to create a new instance of this object.
- Access the object's properties by using the dot syntax.
  Ex: 
      ```
      function person(name, age, color) {
          this.name = name;
          this.age = age;
          this.favColor = color;
      }
      
      var p1 = new person("John", 42, "green");
      var p2 = new person("Amy", 21, "red");
      
      document.write(p1.age); 
      document.write(p2.name);
      document.write(p2.favColor);
      
      ```       
Code: [Link](https://www.sololearn.com/compiler-playground/WQA4VHlggmLd)


## object initialization
- Use the object literal or initializer syntax to create single objects.
- syntax: `var John = {name: "John", age: 25};
var James = {name: "James", age: 21};`
- an object can span multiple lines.

# Images of completed lessons

- ![13. day34 5.31 & 5.32 and 5.33 lesson completed.png](/day%2034/Images/13.%20day34%205.33%20lesson%20completed.png)


# Conclusion

- JavaScript Objects
- Object Properties
- Object Methods
- Creating your own object
- The Object Constructor
- Creating Objects
- object initialization


# My Code: 
- ![3. day34 prog prob volume.png](/day%2034/Images/3.%20day34%20prog%20prob%20volume.png)
- ![8. day34 prog prob flight.png](/day%2034/Images/8.%20day34%20prog%20prob%20flight.png)

# References [Sololearn ](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y
# Connect with me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)

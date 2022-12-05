Today #day49 of #100daysofcode, I have completed 61.1 & 62.1 Lessons and 61.2 "Average exam score" & 62.2 "Employee map" code project and 4 code practice in the JS course. @Sololearn

### 8\. ECMAScript 6

# 1\. ES6 Classes

# **1.1 Classes in ES6**

Create multiple objects of the same structure using class.

Create a class using the keyboard class in JavaScript, this class contains a constructor method that is used for initializing new classes.

For example

```javascript
class circle {
  constructor(radius, angle) {
    this.radius = radius;
    this.angle = angle;
  }
}
```

Create a new object using the keyword new off and already declared class.  
keyword **new**.

For example:

```javascript
const circle2 = new circle (5, 0); 
const arc = new circle (5, 50);
```

### Note:

*   function declarations are hosted i.e you can access it before declaring it.
    
*   Class declarations are not hosted i.e you can't access it before declaring it if you access it before declaring the class you will get a reference error.
    

A class can be named or unnamed when it is declared with the class expression, in named class looks like,

```javascript
var circle  = class circle {
  constructor(radius, angle) {
    this.radius = radius;
    this.angle = angle;
  }
}
```

when you define an unnamed class expression, a variable is simply assign the class definition

```javascript
var circle  = class {
  constructor(radius, angle) {
    this.radius = radius;
    this.angle = angle;
  }
}
```

### Note:

*   The **constructor** is a special method which is used for creating and initializing an object created with a class.
    
*   You cannot define more than one constructor per class.
    

## **1.2 Class Methods in ES6**

ES6 introduced a shorthand that does not require the keyword **function** for a function assigned to a method's name.

One type of class method is the **prototype method**, which is available to objects of the class.  
**For Example:**

```javascript
class circle {
  constructor(radius, angle) {
    this.radius = radius;
    this.angle = angle;
  }
 get area() { 
 return this.calcArea(); 
 } 
 calcArea() { 
 return Math.PI * this.radius * this.radius; 
 } 
} 
const circle2 = new circle(5, 0); 
console.log(circle2.area); // 25
```

In the code above, **area** is a getter, **calcArea** is a method.

Static method is another type of method in which you cannot call it through the class instance

In an application, we create utility functions using static methods.

```javascript
class point {
constructor(x,y){
this.x=x
this.y=y
}
static equation(p1,p2){
let m = (p1.y-p2.y)/(p1.x-p2.x), c = p1.y-p1.x
return `y=${m}x+${c}`
}
}
const p1 = new point(2,7)
const p2 = new point(3,8)
console.log(point.equation(p1,p2))
```

As you can see, the static **distance** method is called directly using the class name, without an object.

### Code: Equation of line code[\[Click\]](https://www.sololearn.com/compiler-playground/Ww79blR9pb4G)

## 1.3 **Inheritance in ES6**

Use the keyboard extend to create a child in the class declaration or class expression.

```javascript
class human {
  constructor(name) {
    this.name = name;
  }
  vision () {
    console.log(this.name + ' can see.');
  }
}

class man extends human {
  vision() {
    console.log(`${this.name} always winks`);
  }
}
let student = new man ('joey');
student.vision(); // joey winks
```

### Code: Inheritance code [\[click\]](https://www.sololearn.com/compiler-playground/WCa6kJ1Yj1QQ)

In the above code man is a child of human inheriting human properties.

If there is a constructor present in the subclass, it needs to first call **super**() before using **this**. Also, the **super** keyword is used to call parent's methods.

### Code: Inheritance super code [\[click\]](https://www.sololearn.com/compiler-playground/W0bF2pgZIWRH)

In the above code the parents vision method is called using the Super keyword.

### 2\. ES6 Map & Set

## 2.1 **ES6 Map**

A **Map** object can be used to hold **key/value** pairs. A key or value in a map can be anything (objects and primitive values).

The syntax **new Map(\[iterable\])** creates a Map object where **iterable** is an array or any other iterable object whose elements are arrays (with a key/value pair each).  
  
An **Object** is similar to **Map** but there are important differences that make using a Map preferable in certain cases:

1.  The keys can be any type including functions, objects, and any primitive.
    
2.  You can get the size of a Map.
    
3.  You can directly iterate over Map.
    
4.  Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs. @sololearn
    

**Methods**

1.  **set(key, value)** Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
    
2.  **get(key)** Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
    
3.  **has(key)** Returns true if a specified key exists in the map and false otherwise.
    
4.  **delete(key)** Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
    
5.  **clear()** Removes all key/value pairs from map.
    
6.  **keys()** Returns an Iterator of keys in the map for each element.
    
7.  **values()** Returns an Iterator of values in the map for each element.
    
8.  **entries()** Returns an Iterator of array\[key, value\] in the map for each element. @sololearn
    

### Code: Map Methods[\[click\]](https://www.sololearn.com/compiler-playground/Wy3auoXKO4kb)

Note:

1.  **Map** supports different data types i.e. 1 and "1" are two different keys/values.
    

# **2.2 ES6 Set**

A **Set** object can be used to hold **unique** values (no repetitions are allowed).

A value in a set can be anything (objects and primitive values).

The syntax **new Set(\[iterable\])** creates a Set object where **iterable** is an array or any other iterable object of values.

The **size** property returns the number of distinct values in a set.

```javascript
const square = new Set([1,2,4,3,9,4,16])
console.log(square.size)
```

**Methods**

1.  **add(value)** Adds a new element with the given value to the Set.
    
2.  **delete(value)** Deletes a specified value from the set.
    
3.  **has(value)** Returns true if a specified value exists in the set and false otherwise.
    
4.  **clear()** Clears the set.
    
5.  **values()** Returns an Iterator of values in the set.
    

### **Note:**

**Set** supports different data types i.e. **1** and **"1"** are two different values.  
NaN and undefined can also be stored in Set.

### Code: set methods [\[click\]](https://www.sololearn.com/compiler-playground/Wpgq8mHzx6R4)

# Images

*   8.61 8.62 completed
    
    ![dheerajy1/dailycoding/day 49/Images/13. day49 8.61 8.62 completed.png]()
    

# Conclusion

1.  Classes in ES6
    
2.  Class Methods in ES6
    
3.  Inheritance in ES6
    
4.  ES6 Map
    
5.  ES6 Set
    
6.  "Average exam score" code project
    
7.  "Employee map" code project
    
8.  Quiz
    
9.  Code projects
    

# My Code:

1.  Code: Equation of line code[\[Click\]](https://www.sololearn.com/compiler-playground/Ww79blR9pb4G)
    
2.  "Average exam score" code project
    
    ![dheerajy1/dailycoding/day 49/Images/3. day49 Average exam score code project.png]()
    
3.  Code: Inheritance super code [\[click\]](https://www.sololearn.com/compiler-playground/W0bF2pgZIWRH)
    
4.  Code: Map Methods[\[click\]](https://www.sololearn.com/compiler-playground/Wy3auoXKO4kb)
    
5.  "Employee map" code project
    
    ![dheerajy1/dailycoding/day 49/Images/9. day49 Employee map code project.png]()
    
6.  Code: set methods [\[click\]](https://www.sololearn.com/compiler-playground/Wpgq8mHzx6R4)
    

# References [Sololearn](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)
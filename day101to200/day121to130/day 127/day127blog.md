Today #Day127 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 21\. **What will the following code output to the console and why**

```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

**What is the issue with this code and how can it be fixed.**

## M-1

```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

const stoleSecretIdentity2 = hero.getSecretIdentity.bind(hero)
console.log(stoleSecretIdentity2());
```

## M-2

```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

var stoleSecretIdentity3 = hero.getSecretIdentity();
console.log(stoleSecretIdentity3);
```

# 22\. Create a function that,

given a DOM Element on the page, will visit the element itself and *all* of its descendants (not *just its immediate children*).

For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

* a DOM element
    
* a callback function (that takes a DOM element as its argument)
    

Visiting all elements in a tree (DOM) is a classic [Depth-First-Search algorithm](https://en.wikipedia.org/wiki/Depth-first_search) application.

Here’s an example solution:

```javascript
function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) 
    {
       Traverse(list[i],p_callback);  // recursive call
    }
}
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like Object method and function recursion.

# Code

1. code
    
    ![Alt text](1.%20day%20127%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
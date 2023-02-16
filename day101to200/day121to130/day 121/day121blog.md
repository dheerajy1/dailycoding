Today #Day121 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 9\. **Write a** `sum` the **method which will work properly when invoked using either syntax below.**

```javascript
console.log(sum(2,3)); // Outputs 5 
console.log(sum(2)(3)); // Outputs 5
```

```javascript
function sum(n1,n2){
    return n1+n2
}

console.log(sum(2,3));

function sum1(x){
    if(arguments.length===2){
        return arguments[0] + arguments[1]
    }
    else{
       return function (y){
            return x + y
        }
    }
}
console.log(sum1(2,3));
console.log(sum1(2)(3));
```

M-2

```javascript
function sum2(x,y){
    if(y!==undefined){
        return arguments[0] + arguments[1]
    }
    else{
       return function (y){
            return x + y
        }
    }
}
console.log(sum2(2,3));
console.log(sum2(2)(3));
```

# 10\. **Consider the following code snippet:**

```javascript
for (var i = 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button " + i));
  btn.addEventListener("click", function () {
    console.log(i);
  });
  document.body.appendChild(btn);
}
```

## (a) What gets logged to the console when the user clicks on “Button 4” and why?

After completion of for loop, the i which is a var variable value is 5.

## Code: Button[\[link\]](https://www.sololearn.com/compiler-playground/Wj9hgZ3MCM6e)

## (b) Provide one or more alternate implementations that will work as expected.

Simply, add the below line before addEventListener,

```javascript
for (var i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    const j = i
    btn.addEventListener("click", function () {
        console.log(j);
    });
    document.body.appendChild(btn);
}
```

or Follow the below methods,

```javascript
for (var i = 0; i < 5; i++) { 
var btn = document.createElement('button'); btn.appendChild(document.createTextNode('Button ' + i)); btn.addEventListener('click', (function(i) { return function() { console.log(i); }; })(i)); 
document.body.appendChild(btn); 
}
```

Alternatively, you could wrap the entire call to `btn.addEventListener` in the new anonymous function:

```javascript
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  (function (i) {
    btn.addEventListener('click', function() { console.log(i); });
  })(i);
  document.body.appendChild(btn);
}
```

Or, we could replace the `for` loop with a call to the array object’s native `forEach` method:

```javascript
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function() { console.log(i); });
  document.body.appendChild(btn);
});
```

Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use `let i` instead of `var i`:

```javascript
for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like functions & var keyword.

# Code

1. code
    
    ![Alt text](1.%20day121%20code.png)
    
    2
    
    ![Alt text](2.%20day121%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
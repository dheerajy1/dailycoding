Today #Day123 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 13\. What will the code below output to the console and why?

```javascript
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```

Output:

```javascript
"122"
"32"
"02"
"112"
"NaN2"
NaN
```

# 14\. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

```javascript
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

The potential stack overflow can be avoided by modifying the `nextListItem` function as follows:

```javascript
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
```

The stack overflow is eliminated because the event loop handles the recursion, not the call stack.

When `nextListItem` runs, if `item` is not null, the timeout function (`nextListItem`) is pushed to the event queue and the function exits, thereby leaving the call stack clear.

When the event queue runs its timed-out event, the next `item` is processed and a timer is set to again invoke `nextListItem`.

Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.

# Closures in JavaScript

```javascript
function counter(){
    let count = 0
    return function() {
        count++
        console.log(count);
    }
}
const mycounter = counter()
mycounter()
mycounter()
mycounter()
mycounter()
mycounter()

{
    function counter(){
        let count = 0
        return function() {
            count++
            console.log(count);
        }
    }
    const mycounter = counter()()
    console.log(mycounter);
    const mycounter2 = counter()()
    counter()()
}
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like strings and number data types and setTimeout & closures in JavaScript.

# Code

1. code
    
    ![Alt text](1.%20day123%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
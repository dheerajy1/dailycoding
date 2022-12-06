Today #day50 of #100daysofcode, I have completed 8.63 Lesson and 8.64 Module 8 Quiz and 8.65 "Words" code project in the JS course. @Sololearn

# 8.63 More on ES6

# **1\. ES6 Promises**

A **Promise** is a better way for asynchronous programming when compared to the common way of using a **setTimeout**() type of method.

**Consider this example:**

```javascript
setTimeout(function() { 
 console.log("hello"); 
 setTimeout(function() { 
 console.log("how are you"); 
 }, 1000); 
}, 1000); 
console.log("bye");
```

Asynchronously the output is printed. 'bye','hello','how are you'

### Explanation

1.  The code starts by setting up a function that will print "Work 1" and then "Work 2" every second.
    
2.  The code then calls the setTimeout function, which sets up a timer to call the console.log function after 1000 milliseconds (1 second).
    
3.  After 1000 milliseconds, the code prints "End."
    
4.  The first line of code creates a new function called work1() that will print out "Work 1".
    
5.  The next line of code starts another new function called work2() that will also print out "Work 2".
    
6.  Then in between these two functions, there is a setTimeout(function() {},1000) statement.
    
7.  This statement tells JavaScript to run the console.log("Work 1") command after one second has passed since it was last executed (1000 milliseconds).
    
8.  The code attempts to execute a set of console.log() statements in sequence, with the first statement being executed after 1 second and the last statement being executed at 3 seconds.
    

  
In ES6 a **promise** looks as shown below,

```javascript
new Promise(function(resolve, reject) {
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
});
```

### Explanation:

1.  The code is a promise that will either resolve with the result of success or reject with an error.
    
2.  The code is using the function Promise() which returns a new promise object.
    
3.  The function takes two parameters, one for resolving and one for rejecting.
    
4.  In this case, we are passing in a function called success which will be executed if the promise resolves successfully and another called failure which will be executed if it rejects.
    
5.  In order to create our own custom resolution/rejection functions, we need to use `then()` method on our promises object like so:
    
    ```javascript
    var myPromise = new Promise(function(resolve, reject) { 
    // Work 
    }); myPromise.then(successFunc); 
    // This is where you would write your custom resolution/rejection function
    ```
    
6.  The code will create a promise that resolves with the result of success.
    
7.  If the code fails, it will reject with an error message called failure.
    

The `Promise` constructor takes a function as an argument. This function, known as the executor function, is used to perform the asynchronous operation. The executor function takes two arguments, `resolve` and `reject`, which are callback functions that are used to signal the completion of the asynchronous operation.

If the asynchronous operation is successful, the `resolve` callback should be called with the result of the operation. This will cause the `Promise` to be in a fulfilled state, and any code that is waiting for the `Promise` to be fulfilled will be able to access the result of the operation.

If the asynchronous operation fails, the `reject` callback should be called with an error object. This will cause the `Promise` to be in a rejected state, and any code that is waiting for the `Promise` to be fulfilled will be notified that the operation failed.

In this specific example, the executor function checks if the `success` variable is `true`. If `success` is `true`, the `resolve` callback is called with the `result` of the asynchronous operation. If `success` is `false`, the `reject` callback is called with an error object that indicates that the operation failed.

Once the `Promise` is created, it can be used with the `then` method to specify what should happen when the `Promise` is fulfilled or rejected. For example, you could use the `then` method to log the result of the operation to the console if the operation is successful, or log an error message if the operation fails.

**For Example:**

```javascript
function asyncFunc(meet) {
    return new Promise(function (resolve, reject) {
        if (meet === "")
            reject(Error("Nothing"));
        setTimeout(function () {
            resolve(meet);
        }, 1000);
    });
}

asyncFunc("hello") // Task 1
    .then(function (result) {
        console.log(result);
        return asyncFunc("how are you"); // Task 2
    }, function (error) {
        console.log(error);
    })
    .then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
console.log("bye");
```

Asynchronously the output is printed. 'bye','hello','how are you'

### Code: asynchronous[\[click\]](https://www.sololearn.com/compiler-playground/Wl9vBmYisB2S)

### Explanation

1.  The code starts by creating a new Promise object.
    
2.  The function that is passed to the constructor of the promise will be called when the promise resolves or rejects.
    
3.  In this case, it will resolve with "hello" and reject with an error if there is nothing else in meet.
    
4.  Then, it sets up a timeout for 1000 milliseconds so that if anything happens before then, it will resolve immediately without waiting for anything else to happen first.
    
5.  The next line calls asyncFunc("how are you") which creates another task and returns a new promise object.
    
6.  This time, instead of resolving or rejecting based on whether there's something in meet, it waits until after 1000 milliseconds have passed and then resolves with "how are you".
    
7.  The code will execute the function asyncFunc("hello") and then wait for 1000 milliseconds before executing the next task.
    

### Explanation 2

1.  The code starts by defining a function called asyncFunc.
    
2.  This function takes one argument, meet, which is the string "hello".
    
3.  The first line of code in the body of this function creates a new Promise object and sets its resolve and reject functions to call the setTimeout() method with an interval of 1000 milliseconds.
    
4.  The next line calls asyncFunc("how are you") on another promise object that will be created later in this program.
    
5.  The last line prints "bye" to console before exiting the program.
    
6.  The code creates a function that takes in a string, and returns a promise.
    
7.  The function will return the string if the meet variable is empty, or it will set up a timeout to resolve with the meet variable after 1 second.
    

# **2\. Iterators & Generators**

## **2.1 Symbol.iterator**

It is the default iterator for an object. The for...of loops are based on this type of iterator.  
  
In the example below, we will see how we should implement it and how **generator functions** are used.

```javascript
let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]
```

First, we create an object, and use the **Symbol.iterator** and **generator function** to fill it with some values.  
  
In the second line of the code, we use a **\*** with the **function** keyword. It's called a **generator function (or gen function)**.

### Explanation:

1.  The `myIterableObj` object is an iterable. It has a method called `Symbol.iterator`, which is a generator function. When this function is called, it yields the values 1, 2, and 3.
    
2.  The spread operator (`...`) is used to spread the values of the iterable into an array. When we call `console.log([...myIterableObj])`, the `Symbol.iterator` method is called and its yielded values are spread into a new array, which is logged to the console as `[1, 2, 3]`.
    
3.  This is a concise way to create an array from an iterable object.
    

### Note:

1.  **yield** keyword is used to resume or pause a generator function asynchronously.
    

  
For example, here is a simple case of how **gen functions** can be useful:

```javascript
function* idMaker() { 
 let index = 0; 
 while (index < 5) 
 yield index++; 
} 
var gen = idMaker(); 
console.log(gen.next().value);
```

We can exit and re-enter generator functions later. Their variable bindings (context) will be saved across re-entrances. They are a very powerful tool for asynchronous programming, especially when combined with Promises. They can also be useful for creating loops with special requirements.

### Explanation

1.  The `idMaker` function is a generator function. It has a local variable called `index` that is initialized to 0. The function uses a `while` loop to yield the value of `index` as long as `index` is less than 5. After each iteration of the loop, `index` is incremented by 1.
    
2.  When we call `idMaker` and assign the returned generator object to the `gen` variable, we can then call the `next()` method on `gen` to get the next value yielded by the generator. The `next` method returns an object with two properties: `value`, which is the yielded value, and `done`, which is a boolean that indicates whether the generator has finished executing.
    
3.  When we call `console.log(gen.next().value)`, the generator starts executing and yields the first value, which is 0. This value is logged to the console. The generator then continues executing, incrementing `index` and yielding the next value, 1, on the next call to `next()`. This process continues until `index` is equal to 5, at which point the `while` loop terminates and the generator function finishes executing.
    

We can nest **generator functions** inside each other to create more complex structures and pass them arguments while we are calling them.  
The example below will show a useful case of how we can use **generator functions** and **Symbol.iterators** together.

```javascript
const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);
```

We create an object of 7 elements by using **Symbol.iterator** and **generator functions**. In the second part, we assign our object to a constant **all**. At the end, we print its value.

### Explanation

1.  The code iterates over the array arr and prints out each number in that array.
    
2.  The code then calls a function called Math.sqrt to calculate the square root of all numbers in the list, which is filtered so only those less than 5 are printed out.
    
3.  The code iterates through my\_obj and calculates how many times each symbol appears in it by using parseInt() on each item with 10 as its base value.
    
4.  Then, it calculates the square root of all values from 0-9 by calling Math.sqrt().
    
5.  Finally, it filters for any number less than 4 before adding them together with reduce().
    
6.  The code will result in the following output: 0, 1, 4, a, 5
    

In this code, `my_obj` is an object that has a method called `Symbol.iterator` that is a generator function. This generator function loops over the elements in the array `arr` and yields each element as a string.

In JavaScript, a generator function is a special type of function that can be used to create an iterator. When a generator function is called, it doesn't run the code inside the function right away. Instead, it returns a special type of iterator called a generator. This generator can be used to iterate over the values that are yielded by the generator function.

The `Symbol.iterator` method is a special method that is called by the JavaScript runtime when an object needs to be iterated over, such as in a for-of loop. By defining this method, `my_obj` becomes an iterable object, which means that it can be used with a for-of loop or with other language constructs that expect an iterable.

In this specific example, `my_obj` is being used to convert the elements of the `arr` array into strings. The generator function inside `my_obj` loops over the elements in `arr` and yields each element as a string. This allows the elements of the array to be iterated over and processed one at a time.

# **3\. Built-in Methods**

ES6 also has new built-in method,

## 3.1 **Array Element Finding**

Find the first element of an array by its value,

Legacy way,

```javascript
let num = [4, 5, 1, 8, 2, 0].filter(function (x) {
  return x > 6;
})[0];

console.log(num);//8
```

In ES6,

### Code: arrayfilter [\[click\]](https://www.sololearn.com/compiler-playground/WEgk1g1x87un)

## **3.2 Repeating Strings**

Repeat a string multiple times,

Legacy way,

```javascript
console.log(Array(0 + 0).join("hello"));//''
console.log(Array(1 + 0).join("hello"));//''
console.log(Array(0 + 1).join("hello"));//''
console.log(Array(1 + 1).join("hello1"));//hello1
console.log(Array(2 + 1).join("hello2"));//hello2hello2
console.log(Array(1 + 2).join("hello2"));//hello2hello2
console.log(Array(2 + 2).join("hello3"));//hello3hello3hello3 
console.log(Array(3 + 2).join("hello4"));//hello4hello4hello4hello4  
console.log(Array(2 + 3).join("hello4"));//hello4hello4hello4hello4  
console.log(Array(3 + 3).join("hello5"));//hello5hello5hello5hello5hello5 
console.log(Array(3 + 3).join("hello5"));//hello5hello5hello5hello5hello5 
console.log(Array(4 + 3).join("hello6"));//hello6hello6hello6hello6hello6hello6 
console.log(Array(3 + 4).join("hello6"));//hello6hello6hello6hello6hello6hello6
```

In ES6,

### Code: stringrepeat [\[click\]](https://www.sololearn.com/compiler-playground/W0Dr6ZZi6oR3)

## **3.3 Searching Strings**

Find the position of the text in the string,

Legacy way,

```javascript
console.log("ironman".indexOf("hulk",5))//-1
console.log("ironman".indexOf("i",5)) //-1
console.log("ironman".indexOf("i",0)) //0
console.log("ironman".indexOf("i",0)===2) //false
console.log("ironman".indexOf("i",0)!==-1) //true
console.log("ironmanhasmarksuite".indexOf("ui")==8) //false
```

In ES6,

### Code: findposofstring [\[click\]](https://www.sololearn.com/compiler-playground/W0Dr6ZZi6oR3)

# Images

1.  JavaScript course completed
    
    ![dheerajy1/dailycoding/day 50/Images/20. day50 JS course completed.png]()
    
      
    

# Conclusion

1.  ES6 Promises
    
2.  Symbol.iterator
    
3.  Array Element Finding
    
4.  Repeating Strings
    
5.  Searching Strings
    
6.  Quiz [[click](/day%2050/Images/)]
    
7.  4 Codepractice problems
    
8.  "Words" code project
    

# My Code:

1.  Code: asynchronous [\[click\]](https://www.sololearn.com/compiler-playground/Wl9vBmYisB2S)
    
2.  Code: arrayfilter [\[click\]](https://www.sololearn.com/compiler-playground/WEgk1g1x87un)
    
3.  Code: stringrepeat [\[click\]](https://www.sololearn.com/compiler-playground/W0Dr6ZZi6oR3)
    
4.  Code: findposofstring [\[click\]](https://www.sololearn.com/compiler-playground/W0Dr6ZZi6oR3)
    
5.  "Words" code project
    
    ![dheerajy1/dailycoding/day 50/Images/16. day50 words code project yay.png]()
    
      
    

# Certificate Javascript [\[link\]](https://www.sololearn.com/certificates/CT-IM0HH9HA)

1.  My Javascript Course completion certificate from sololearn.
    
    ![dheerajy1/dailycoding/day 50/Images/18. day50 certificate.png]()
    

# References [Sololearn](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)
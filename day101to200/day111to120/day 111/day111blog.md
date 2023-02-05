Today #Day111 of #365DaysOfCode, Learning call, apply and bind methods in JavaScript.

# 1\. call ()

```javascript
let name1 = {
    firstname: "Elon",
    lastname: "Musk",
    printFUllname: function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
```

In the above code we have defined a name object with the first name as the property and its value is Elon a string and the next property is the last name with the value must and then we have defined a method print full name.

`this` <mark>refers to the object name.</mark>

Now call the method in the object,

```javascript
name1.printFullname()
```

Call method: Function borrowing - You can borrow functions from other objects,

Every method in JavaScript has access to a function called spatial function - call().

the call function takes an reference as argument, In our case name2

```javascript
let name2 = {
    firstname: "Jeff",
    lastname: "bezos"
}
name1.printFullname.call(name2)
```

when we pass a reference object using call method the `this` will point to the argument in a way we are borrowing the function from name1.

But we won't store methods like this in objects,

we store them outside and call them when necessary,

Remember: The first argument is always the reference object and the rest parameters are the arguments to the function you can pass,

```javascript
let name1 = {
    firstname: "Elon",
    lastname: "Musk",
}
let printFullname = function(hometown){
    console.log(`${this.firstname} ${this.lastname} ${hometown}`)
}
printFullname.call(name1,'TX')
let name2 = {
    firstname: "Jeff",
    lastname: "bezos",
}
printFullname.call(name2,'CA')
```

# 2\. Apply()

In apply method we pass the arguments in array list rather than passing individually in the earlier call method, the argument is, as usual, the reference object.

```javascript
let name1 = {
    firstname: "Elon",
    lastname: "Musk",
}
let printFullname = function(hometown){
    console.log(
        `${this.firstname} ${this.lastname} ${hometown}`)
}
printFullname.call(name1,'TX')
let name2 = {
    firstname: "Jeff",
    lastname: "bezos",
}
printFullname.call(name2,'CA')

printFullname.apply(name1,['Mars'])
```

# 3\. Bind()

1. returns a copy of the function
    
    ```javascript
    let name1 = {
        firstname: "Elon",
        lastname: "Musk",
    }
    let printFullname = function(hometown){
        console.log(
            `${this.firstname} ${this.lastname} ${hometown}`)
    }
    printFullname.call(name1,'TX')
    let name2 = {
        firstname: "Jeff",
        lastname: "bezos",
    }
    printFullname.call(name2,'CA')
    
    printFullname.apply(name1,['Mars'])
    
    printname = printFullname.bind(name2,'NY')
    console.log(printname)
    printname()
    ```
    
    Rather than invoking it directly we can invoke it later.
    

# Conclusion

1. In Call() method which is used to invoke a function directly bypassing the reference which points to the `this`. variable in the method and also takes arguments individually.
    
2. apply() method is used to invoke a function directly by passing the first argument as a reference that points to the `this`. variable in the method and also take arguments in the array list.
    
3. bind() method doesn't invoke the function directly but gives you a copy of the function which can be invoked later.
    

I learned about call, apply and bind methods in JavaScript.

# Code

1. code
    
    ![Alt text](1.%20day111%20code.png)
    

# Source: **Akshay Saini** [\[Link\]](https://youtu.be/75W8UPQ5l7k)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
Today #day39 of #100daysofcode, I have completed 6.42 lesson and 6.43 module 6 quiz and a "Monday to Sunday" code practice problems and 6.44 "store manager" code project in JS course. @Sololearn


### core objects

# 1. setInterval

- At specified intervals, the setInterval() method calls a function or evaluates an expression (in milliseconds).
It will call the function again and again until clearInterval() is called or the window is closed.
- When passing the function name into the setInterval method, leave out the parentheses.
-Write the name of the function without parentheses when passing it into the setInterval method.

### Code: [click](https://www.sololearn.com/compiler-playground/W7F2svxBDE38)

# 2. The date object

- We can work with dates thanks to the Date object. 
- A date is made up of the following elements: a year, a month, a day, an hour, a minute, a second, and milliseconds.
- Create a new date object with the current date and time by calling new Date().
- syntax: `var d = new Date();
//d stores the current date and time`
- The other methods for initialising dates enable the creation of new date objects based on the specified date and time.
  
    ```
    new Date(milliseconds)
    new Date(dateString)
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    ```
- JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.

### Example:

    ```
    //Fri Jan 02 1970 00:00:00
    var d1 = new Date(86400000); 
    
    //Fri Jan 02 2015 10:42:00
    var d2 = new Date("January 2, 2015 10:42:00");
    
    //Sat Jun 11 1988 11:42:00
    var d3 = new Date(88,5,11,11,42,0,0);
    ```
- JavaScript counts months from 0 to 11. January is 0, and December is 11.
Date objects are static, rather than dynamic. The computer time is ticking, but date objects don't change, once created.

## i. Date Methods

- When a Date object is created, a number of methods make it possible to perform operations on it.
- getFullYear() -> gets the year
- getMonth() -> gets the month
- getDate() -> gets the day of the month
- getDay() -> gets the day of the week
- getHours() -> gets the hour
- getMinutes() -> gets the minutes
- getSeconds() -> gets the seconds
- getMilliseconds() -> gets the milliseconds 

### Example :
  - Code: get_hours_am_pm[ click](https://www.sololearn.com/compiler-playground/WzpYznmzk8EJ)
  - Code: completedate[ click](https://www.sololearn.com/compiler-playground/Wcu5AosTMiFz)

# Images
- 6.42 completed
![8. day39 6.42 completed.png](/day%2039/Images/8.%20day39%206.42%20completed.png)

- Module 6 completed
![15. day 39 module 6 completed.png](/day%2039/Images/15.%20day%2039%20module%206%20completed.png)


# Conclusion
- setInterval()
- the date object
- Date Methods
- 3 code practice problems 
- Module 6 quiz [[click](/day%2039/Images/)]
- "Monday to Sunday" code practice problems
- "Store manager" code project

# My Code: 
-  "Monday to Sunday" code practice problems
![6. day39 mondaytosynday prog prob.png](/day%2039/Images/6.%20day39%20mondaytosynday%20prog%20prob.png)

- "Store manager" code project
![14. day39 storemanager code proj.png](/day%2039/Images/14.%20day39%20storemanager%20code%20proj.png)

# References [Sololearn ](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y
# Connect with me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)

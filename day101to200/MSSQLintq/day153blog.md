Today #Day153 of #365DaysOfCode, I am Learning MS SQL Server Interview Questions.

# **1. Explain your SQL Server DBA Experience?**

Explain what are the different SQL Server Versions you have worked on, and what kind of administration of those instances has been done by you.

Your role and responsibilities carried out in your earlier projects would be of significance to the potential employer.

This is the answer that lets the interviewer know how suitable are you for the position for which you are being interviewed.

# **2.  What is the difference between Clustered and Non-Clustered Index?**

**Clustered index:**

In a **clustered index**, the leaf-level pages are the actual data pages of the table.

When a clustered index is created on a table, the data pages are arranged accordingly based on the clustered index key.

There can only be one Clustered index on a table.

Example:

Suppose you have a table named "Employees" with columns such as EmployeeID, FirstName, LastName, Email, and PhoneNumber.

If you create a clustered index on the EmployeeID column, the data pages of the table will be arranged in the order of the EmployeeID values.

This means that when you query the table using the EmployeeID column, the data retrieval will be faster since the data is already sorted in the required order.

**Non-clustered index:**

In a **Non-Clustered index**, the leaf-level pages do not contain data pages instead it contains pointers to the data pages.

There can multiple non-clustered indexes on a single table.

Example:

Suppose you have a table named "Orders" with columns such as OrderID, CustomerID, OrderDate, and TotalAmount.

If you create a non-clustered index on the CustomerID column, the leaf-level pages of the index will contain pointers to the data pages of the table where the records with the matching CustomerID values are stored.

This means that when you query the table using the CustomerID column, the data retrieval will be faster since the index can quickly locate the required data pages.

# Conclusion

In conclusion, The first question requires the interviewee to explain their experience as a SQL Server DBA.

The second question is about the difference between clustered and non-clustered indexes.

# Source: **SQL Server Int Que** \[[Link](https://svrtechnologies.com/top-50-sql-server-interview-questions-and-answers-pdf/)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
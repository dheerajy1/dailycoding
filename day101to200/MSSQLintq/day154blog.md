Today #Day154 of #365DaysOfCode, I am Learning MS SQL Server Interview Questions.

# **3. What are the High-Availability solutions in SQL Server and differentiate them briefly?**

There are four High-Availability solutions available in SQL Server:

1. **Failover Clustering,**
    
    Failover Clustering is a solution that provides redundancy for the entire instance of the SQL Server. It involves multiple servers, with one server acting as the primary server and the others as secondary servers. If the primary server fails, one of the secondary servers takes over.
    
2. **Database Mirroring,**
    
    Database Mirroring is a solution that provides redundancy for individual databases.
    
    It involves two servers, with one server acting as the principal server and the other as the mirror server.
    
    The principal server sends transaction log records to the mirror server, which applies them to its copy of the database.
    
    If the principal server fails, the mirror server takes over.
    
3. **Log Shipping**, and
    
    Log Shipping is a solution that involves automatically backing up transaction logs from a primary database and restoring them to one or more secondary databases.
    
    It can be used to provide redundancy for individual databases.
    
4. **Replication**
    
    Replication is a solution that involves copying and distributing data and database objects from one database to another.
    
    It can be used to provide redundancy for individual databases or to distribute data across multiple servers for load balancing or reporting purposes.
    

# **4.  What are the commands used in DCL?**

The commands used in DCL are GRANT, DENY, and REVOKE.

1. **GRANT**,
    
    GRANT command is used to provide user access privileges to database objects. For example, the following SQL command grants SELECT permission on a table named "employees" to a user named "John":
    
    ```sql
    GRANT SELECT ON employees TO John;
    ```
    
2. **DENY** and
    
    DENY command is used to deny user access privileges to database objects.
    
    For example, the following SQL command denies SELECT permission on a table named "customers" to a user named "Jane":
    
    ```sql
    DENY SELECT ON customers TO Jane;
    ```
    
3. **REVOKE**
    
    REVOKE command is used to remove previously granted or denied user access privileges to database objects.
    
    For example, the following SQL command revokes SELECT permission on a table named "orders" from a user named "Bob":
    
    ```sql
    REVOKE SELECT ON orders FROM Bob;
    ```
    

# Conclusion

In conclusion, the article discusses two topics related to MS SQL Server interview questions.

The first topic covers the four high-availability solutions available in SQL Server, including failover clustering, database mirroring, log shipping, and replication.

The second topic covers the commands used in DCL, which are GRANT, DENY, and REVOKE.

# Source: **SQL Server Int Que** \[[Link](https://svrtechnologies.com/top-50-sql-server-interview-questions-and-answers-pdf/)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)
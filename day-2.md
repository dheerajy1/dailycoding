# Task 1

## Local Hosting Setup using XAMPP

Installed XAMPP and started Apache and MySQL services to simulate a local hosting environment. Verified setup by accessing `http://localhost` in the browser. This confirms the system can serve web applications locally.

## WordPress Installation on Localhost

Downloaded and placed WordPress files inside the XAMPP `htdocs` directory. Initiated setup via browser. Also installed and configured VS Code and Git for development workflow support.

### Download WordPress (Official Source)

1. Go to: [https://wordpress.org/download/](https://wordpress.org/download/)
2. Click **Download WordPress**
3. Extract the `.zip` file

### Place in htdocs

1. Copy the **wordpress** folder
2. Paste into:

```
C:\xampp\htdocs\
```

### Access Setup Page

1. Start Apache
2. Start MySQL
3. Open:

```
http://localhost/wordpress
```

---

# Task 2

## WordPress Configuration on Localhost

Created a database using phpMyAdmin:
`http://localhost/phpmyadmin` → Database name: `wordpress`

Configured WordPress using:

* Database Name: `wordpress`
* Username: `root`
* Password: *(empty)*
* Host: `localhost`
* Table Prefix: `wp_`

Completed installation by setting Site Title, Admin Username, Password, and Email.

Accessed admin dashboard:
`http://localhost/wordpress/wp-admin`

---

# Task 3

## WordPress UI Customization and Settings

Changed theme from **Appearance → Themes**.

Created a sample page and set it as homepage using **Settings → Reading**.

Updated Site Title and basic settings under **Settings → General**.

---

# Task 4

## Debugging and Optimization in WordPress Local Setup

Ensured Apache and MySQL are running to avoid server errors.

Fixed database connection by using correct credentials.

Verified correct placement of WordPress in `htdocs`.

Tested application using:
`http://localhost/wordpress`

---

# Task 5

## Documentation and Demo Output

Verified working URLs:

* Frontend: `http://localhost/wordpress`
* Admin: `http://localhost/wordpress/wp-admin` [[Link](day-2-img-1.png)]

Images:

admin: 

Demo Output:

* Homepage loads successfully  [[Link](day-2-img-2.png)]
* Admin dashboard accessible
* Theme applied and homepage configured

This confirms successful local setup and working of WordPress.


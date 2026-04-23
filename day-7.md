# Day 7 – Review & Assessment

## Task 1 – Implement Core Concept: Review & Assessment

Reviewed all previously learned WordPress concepts including Posts, Pages, Media, Themes, Plugins, Permalinks, Categories, and Tags.

Validated how WordPress stores users and settings internally using database queries.

Performed actions:
- Checked users stored in database
- Verified site configuration values

1. Query: View registered users
```sql
SELECT ID, user_login, user_email, user_registered
FROM wp_users;
```

Output:
| ID | user_login | user_email | user_registered |
|----|------------|------------|-----------------|
| 1 | dheerajfusion5tech | dheeraj@fusion5-tech.com | 2026-04-19 06:02:51 |

2. Query: View site settings
```sql
SELECT option_name, option_value
FROM wp_options
WHERE option_name IN ('siteurl', 'blogname', 'blogdescription', 'admin_email');
```

Output:
| option_name | option_value |
|-------------|--------------|
| admin_email | dheeraj@fusion5-tech.com |
| blogdescription | changed title |
| blogname | My local site new title |
| siteurl | http://localhost/wordpress |

## Task 2 – Create/Configure Feature: Review & Assessment

Validated website content and structure using database queries.

Ensured posts and pages are correctly created and published.

Performed actions:

- Opened website and verified content
- Checked posts and pages from database

1. Query: View all posts and pages

```sql
SELECT ID, post_title, post_type, post_status, post_date
FROM wp_posts
WHERE post_status = 'publish'
AND post_type IN ('post', 'page')
ORDER BY post_date DESC
LIMIT 5;
```

Output:

| ID | post_title | post_type | post_status | post_date |
|----|------------|-----------|-------------|-----------|
| 100 | New dynamic post | post | publish | 2026-04-22 04:56:30 |
| 2 | Sample Page | page | publish | 2026-04-19 06:02:51 |
| 1 | Hello world! | post | publish | 2026-04-19 06:02:51 |
| 82 | Phasellus eu augue et sapien suscipit tincidunt | post | publish | 2017-11-18 18:31:46 |
| 80 | Aenean ac nulla ornare, elementum nibh ut, sceleri... | post | publish | 2017-11-18 18:30:29 |

## Task 3 – Customize UI/Settings: Review & Assessment

Verified key UI and configuration settings.

Ensured correct theme and permalink structure are applied.

Performed actions:

- Checked active theme
- Verified permalink structure

1. Query: Check permalink and active theme

```sql
SELECT option_name, option_value
FROM wp_options
WHERE option_name IN ('permalink_structure', 'template', 'stylesheet');
```

Output:

| option_name | option_value |
|-------------|--------------|
| permalink_structure | /index.php/%year%/%monthnum%/%day%/%postname%/ |
| stylesheet | freddo |
| template | freddo |


## Task 4 – Debug/Optimize: Review & Assessment

Identified and validated potential issues in content and configuration.

Ensured no unnecessary or incomplete data is affecting the system.

Performed actions:

- Checked for draft or unused content
- Verified plugin configuration

1. Query: Find unpublished/trashed content

```sql
SELECT ID, post_title, post_type, post_status
FROM wp_posts
WHERE post_status IN ('draft', 'trash')
AND post_type IN ('post', 'page');
```

Output:

| ID | post_title | post_type | post_status |
|----|------------|-----------|-------------|
| 3 | Privacy Policy | page | draft |

2. Query: Check active plugins

```sql
SELECT option_value
FROM wp_options
WHERE option_name = 'active_plugins';
```

Output:

| option_value |
|--------------|
| a:2:{i:0;s:36:"contact-form-7/wp-contact-form-7.ph... |

## Task 5 – Document Steps + Demo Output: Review & Assessment

Documented all validation steps and confirmed final system state.

Performed actions:

- Executed all queries in phpMyAdmin
- Verified outputs
- Checked frontend website

1. Query: Count posts by type

```sql
SELECT post_type, post_status, COUNT(*) as total
FROM wp_posts
WHERE post_type IN ('post', 'page')
GROUP BY post_type, post_status;
```

Output:

| post_type | post_status | total |
|-----------|-------------|-------|
| page | draft | 1 |
| page | publish | 16 |
| post | auto-draft | 1 |
| post | publish | 10 |

Image: 

1. [[Link](day-7-img-2.png)]

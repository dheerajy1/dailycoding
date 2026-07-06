# corporate_portfolio — Django REST API Backend

Python 3.12 · Django 5.1 · MySQL 8.0 · DRF 3.15 · SimpleJWT

---

## Quick Start

### 1. Create & activate virtual environment

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. MySQL Setup

In MySQL 8.0 shell:

```sql
CREATE USER 'corporate_portfolio_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON corporate_portfolio_db.* TO 'corporate_portfolio_user'@'localhost';
FLUSH PRIVILEGES;
```

Import the dump (creates DB + all tables + seed data):

```bash
mysql -u root -p < corporate_portfolio_dump.sql
```

### 4. Environment variables

```bash
cp .env.example .env
# Edit .env — fill in SECRET_KEY, DB_PASSWORD, and other values
```

### 5. Fake migrations (tables already exist from dump)

```bash
python manage.py makemigrations accounts team projects services courses reviews contact testimonials
python manage.py migrate --fake
```

### 6. Create superuser

```bash
python manage.py shell -c "
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@corporate_portfolio.com', 'Admin@1234')
    print('Superuser created.')
else:
    print('Already exists.')
"
```

> **Change the password immediately after:**
> ```bash
> python manage.py changepassword admin
> ```

### 7. Run development server

```bash
python manage.py runserver
```

---

## API Endpoints

All routes are prefixed with `/api/`.

| Method | URL | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login/` | No | Login — returns `{access, refresh, user}` |
| POST | `/api/auth/register/` | No | Register new user |
| POST | `/api/auth/token/refresh/` | No | Refresh JWT token |
| GET | `/api/auth/profile/` | Yes | Current user profile |
| POST | `/api/auth/logout/` | Yes | Blacklist refresh token |
| GET | `/api/team/` | No | All team members |
| GET | `/api/team/mentor/` | No | Mentor profile |
| GET/POST | `/api/team/` | GET=public, POST=admin | |
| GET/PUT/PATCH/DELETE | `/api/team/<id>/` | GET=public, rest=admin | |
| GET/POST | `/api/projects/` | GET=public, POST=admin | |
| GET/PUT/PATCH/DELETE | `/api/projects/<id>/` | GET=public, rest=admin | |
| GET/POST | `/api/services/` | GET=public, POST=admin | |
| GET/PUT/PATCH/DELETE | `/api/services/<id>/` | GET=public, rest=admin | |
| GET/POST | `/api/courses/` | GET=public, POST=admin | |
| GET/PUT/PATCH/DELETE | `/api/courses/<id>/` | GET=public, rest=admin | |
| GET | `/api/reviews/` | No | Approved reviews only |
| POST | `/api/reviews/` | Yes | Submit review (pending approval) |
| PATCH | `/api/reviews/<id>/approve/` | Admin | Approve a review |
| GET | `/api/contact/` | No | Contact info (singleton) |
| PUT/PATCH | `/api/contact/` | Admin | Update contact info |
| POST | `/api/contact/submit/` | No | Submit contact form |
| GET | `/api/stats/` | No | Site-wide counts |
| GET | `/api/testimonials/` | No | Live (published + approved) testimonials. Filters: `employee`, `company`, `featured` |
| POST | `/api/testimonials/` | Admin | Create a video testimonial |
| GET/PUT/PATCH/DELETE | `/api/testimonials/<id>/` | GET=public if live, rest=admin | Single testimonial |
| GET | `/api/testimonials/employee/<employee_id>/` | No | Live testimonials for one team member's portfolio page |
| PATCH | `/api/testimonials/<id>/approve/` | Admin | Approve + publish a testimonial |
| PATCH | `/api/testimonials/<id>/reject/` | Admin | Reject a testimonial (back to draft) |
| PATCH | `/api/testimonials/<id>/feature/` | Admin | Toggle featured status |
| POST | `/api/testimonials/<id>/report/` | No | Flag inappropriate content for review |
| GET | `/api/testimonials/admin/all/` | Admin | All testimonials, any status. Filters: `employee`, `company`, `reported`, `status` |
| GET | `/api/testimonials/admin/stats/` | Admin | Upload counts + storage usage for moderation dashboard |

---

## Admin Panel

Visit: `http://127.0.0.1:8000/django-admin/`

---

## Frontend Integration

In your Vite frontend `.env`:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

CORS is pre-configured for `localhost:3000` and `localhost:5173` (Vite default).

---

## Production (Railway / any server)

```bash
gunicorn corporate_portfolio.wsgi:application --bind 0.0.0.0:8000
```

Set `DEBUG=False` and update `ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS` in `.env`.

from django.db import migrations


FRONTEND_PLANS = [
    dict(
        name='Basic', price=15000, order=1,
        best_for='Small UI changes, landing pages, and minor customization work.',
        task_hours='Up to 20 task hours/month',
        features=[
            'HTML/CSS page development',
            'Bootstrap responsive design',
            'Basic JavaScript functionality',
            'Minor UI bug fixes',
            'Existing template customization',
        ],
        suitable_projects=['Landing pages', 'Static website pages', 'Small business websites', 'Template edits'],
    ),
    dict(
        name='Standard', price=35000, order=2, is_highlighted=True,
        best_for='Startups and companies needing regular frontend development support.',
        task_hours='Up to 60 task hours/month',
        features=[
            'HTML, CSS, JavaScript, jQuery',
            'Bootstrap-based responsive pages',
            'React.js component development',
            'Dashboard UI customization',
            'Form validation',
            'UI bug fixing',
        ],
        suitable_projects=['Admin dashboards', 'Job portals', 'CRM frontend', 'SaaS frontend screens', 'Company websites'],
    ),
    dict(
        name='Professional', price=60000, order=3,
        best_for='Full frontend project development from scratch.',
        task_hours='Up to 120 task hours/month',
        features=[
            'Complete frontend development from scratch',
            'React.js application development',
            'Bootstrap/modern UI implementation',
            'Reusable components',
            'API integration support',
            'Responsive desktop and mobile layouts',
            'UI performance optimization',
        ],
        suitable_projects=['SaaS applications', 'Job board platforms', 'E-commerce frontend', 'Subscription platforms', 'Employee/customer dashboards'],
    ),
    dict(
        name='Enterprise', price=100000, order=4,
        best_for='Companies needing dedicated frontend developers for long-term product development.',
        task_hours='Up to 200 task hours/month',
        features=[
            'Dedicated frontend development support',
            'React.js advanced UI development',
            'Complex dashboard development',
            'Multi-role UI screens',
            'Custom design implementation',
            'Frontend architecture setup',
            'Priority support',
            'Sprint-based task execution',
        ],
        suitable_projects=['Enterprise SaaS platforms', 'Marketplace platforms', 'Large admin panels', 'Multi-user web applications', 'Ongoing product enhancement'],
    ),
]

BACKEND_PLANS = [
    dict(
        name='Basic', price=20000, order=1,
        best_for='Small businesses requiring backend APIs or minor enhancements.',
        task_hours='Up to 20 task hours/month',
        features=[
            'Spring Boot application setup',
            'REST API development',
            'CRUD operations',
            'Database integration',
            'Authentication (JWT)',
            'Bug fixing',
            'Existing project customization',
        ],
        suitable_projects=['Student Management System', 'Employee Management System', 'Inventory APIs', 'Small Admin Panels', 'Internal Business Applications'],
    ),
    dict(
        name='Standard', price=45000, order=2, is_highlighted=True,
        best_for='Growing startups requiring regular backend development.',
        task_hours='Up to 60 task hours/month',
        features=[
            'Spring Boot backend development',
            'RESTful API development',
            'Database design',
            'Role-based authentication',
            'File upload/download',
            'Email & SMS integration',
            'Payment gateway integration',
            'Third-party API integration',
            'Performance optimization',
        ],
        suitable_projects=['CRM Systems', 'HRMS', 'ERP Modules', 'E-commerce Backend', 'Job Portals', 'SaaS Applications'],
    ),
    dict(
        name='Professional', price=75000, order=3,
        best_for='Complete backend application development from scratch.',
        task_hours='Up to 120 task hours/month',
        features=[
            'Enterprise Spring Boot architecture',
            'Microservices development',
            'API Gateway implementation',
            'Service discovery',
            'JWT & OAuth2 security',
            'Docker containerization',
            'Redis caching',
            'Kafka/RabbitMQ messaging',
            'Swagger documentation',
            'API testing',
        ],
        suitable_projects=['Banking Solutions', 'Healthcare Platforms', 'Subscription Platforms', 'Multi-tenant SaaS', 'Enterprise Business Applications'],
    ),
    dict(
        name='Enterprise', price=125000, order=4,
        best_for='Organizations requiring a dedicated backend engineering team.',
        task_hours='Up to 200 task hours/month',
        features=[
            'Dedicated Java backend developer',
            'Microservices architecture',
            'High-performance API development',
            'Kubernetes deployment support',
            'CI/CD pipeline support',
            'Monitoring and logging integration',
            'Security hardening',
            'Performance tuning',
            'Code reviews',
            'Technical documentation',
            'Sprint planning support',
        ],
        suitable_projects=['Enterprise ERP', 'Financial Platforms', 'Insurance Systems', 'Healthcare Systems', 'Large SaaS Products', 'Marketplace Platforms'],
    ),
]


def seed_plans(apps, schema_editor):
    PricingPlan = apps.get_model('plans', 'PricingPlan')
    for plan in FRONTEND_PLANS:
        PricingPlan.objects.get_or_create(
            category='frontend', name=plan['name'],
            defaults={**plan, 'category': 'frontend'},
        )
    for plan in BACKEND_PLANS:
        PricingPlan.objects.get_or_create(
            category='backend', name=plan['name'],
            defaults={**plan, 'category': 'backend'},
        )


def unseed_plans(apps, schema_editor):
    PricingPlan = apps.get_model('plans', 'PricingPlan')
    PricingPlan.objects.filter(category__in=['frontend', 'backend']).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_plans, unseed_plans),
    ]

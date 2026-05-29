# Phase 2 - Day 1 Task Report

# Responsive Company Landing Page

## Project Overview

Built a responsive software tech company landing page using:

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media Queries

The project focuses on responsive layouts, professional UI design, mobile navigation, and modern frontend structure.

---

# Folder Structure

```text
phase_2_day_1_task
│
├── index.html
│
└── assets
    │
    └── css
        │
        ├── style.css
        ├── navbar.css
        ├── hero.css
        ├── services.css
        ├── about.css
        └── footer.css
```

---

# Implemented Sections

## 1. Header/Navbar

### Features Implemented

- Responsive navigation bar
- Hamburger menu for mobile devices
- Hover effects on navigation links
- Flexbox layout

### Files Used

- `index.html`
- `navbar.css`

### Example

```html
<nav class="navbar"></nav>
```

```css
.navbar {
  display: flex;
}
```

---

## 2. Hero Section

### Features Implemented

- Gradient background
- Responsive layout
- Hero image from Unsplash
- Call-to-action button
- Flexbox alignment

### Files Used

- `index.html`
- `hero.css`

### Example

```css
background: linear-gradient(to right, #2563eb, #7c3aed);
```

```css
.hero-content {
  display: flex;
}
```

---

## 3. Services Section

### Features Implemented

- Service cards
- CSS Grid layout
- Hover card animation
- Responsive grid design

### Files Used

- `index.html`
- `services.css`

### Example

```css
.services-container {
  display: grid;
}
```

```css
.service-card:hover {
  transform: translateY(-10px);
}
```

---

## 4. About Section

### Features Implemented

- Responsive text section
- Center aligned content
- Modern spacing and typography

### Files Used

- `index.html`
- `about.css`

---

## 5. Footer

### Features Implemented

- Responsive footer
- Clean modern layout

### Files Used

- `index.html`
- `footer.css`

---

# Responsive Design Features

## Mobile Navigation

Implemented pure CSS hamburger menu using:

```html
<input type="checkbox" class="menu-toggle" />
```

```css
.menu-toggle: checked ~.nav-links;
```

---

## Media Queries

Used media queries for:

- Navbar responsiveness
- Hero section responsiveness
- Services grid responsiveness
- Footer responsiveness

### Example

```css
@media (max-width: 768px);
```

---

# CSS Concepts Implemented

| Concept             | Implemented |
| ------------------- | ----------- |
| CSS Flexbox         | Yes         |
| CSS Grid            | Yes         |
| Media Queries       | Yes         |
| Hover Effects       | Yes         |
| Gradient Background | Yes         |
| Responsive Images   | Yes         |
| Modern Typography   | Yes         |
| Responsive Layouts  | Yes         |

---

# Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media Queries
- Font Awesome CDN
- Unsplash Image URL

---

# Task Requirements Coverage

| Requirement         | Status    |
| ------------------- | --------- |
| Header/Navbar       | Completed |
| Hero Section        | Completed |
| Services Section    | Completed |
| About Section       | Completed |
| Footer              | Completed |
| Responsive Design   | Completed |
| Mobile Navigation   | Completed |
| Gradient Background | Completed |
| Hover Effects       | Completed |
| Responsive Images   | Completed |

---

# Final Outcome

Successfully developed a modern responsive company landing page with:

- Modular CSS architecture
- Mobile responsive layout
- Flexbox and Grid implementation
- Responsive navigation menu
- Professional UI sections
- Reusable CSS structure

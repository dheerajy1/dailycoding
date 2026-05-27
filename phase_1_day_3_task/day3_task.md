# Phase 1 — Day 3 Task

## Project Root Path

```powershell
$HOME\vs-code\frontend_web_kt_learning_roadmap
```

---

# Day 3 Goal

Learn:
- Semantic HTML5 tags
- Modern webpage layouts
- Audio & video embedding
- YouTube embedding
- Basic SEO structure
- Multi-page website structure

---

# Hour 1 — Semantic Tags & Layout

## Goal

Practice modern semantic HTML5 layout structure.

---

## Semantic Tags Used

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<footer>`

---

## Tasks Completed

- Created semantic webpage layout
- Added:
  - Header
  - Navigation menu
  - Content section
  - Article section
  - Footer
- Added internal CSS styling
- Practiced clean webpage structure

---

## Files Used

```text
phase_1_day_3_task/index.html
phase_1_day_3_task/hour_1.html
```

---

## PowerShell Commands Used

### Create Day 3 Folder

```powershell
mkdir "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task"
```

### Create Initial Files

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\index.html"
```

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\hour_1.html"
```

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\hour_2.html"
```

---

## Git Commands Used

### Check Status

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" status
```

### Stage Files

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" add "phase_1_day_3_task/index.html" "phase_1_day_3_task/hour_1.html"
```

### Commit Hour 1

```powershell
feat: complete Phase 1 Day 3 Hour 1 semantic layout task
```

---

# Hour 2 — Audio & Video

## Goal

Practice multimedia embedding using HTML5.

---

## Tasks Completed

- Added:
  - HTML5 audio player
  - HTML5 video player
  - YouTube embedded video
- Used online sample media URLs
- Styled media cards using internal CSS

---

## Files Used

```text
phase_1_day_3_task/hour_2.html
```

---

## Media Resources Used

### Audio

```text
https://samplelib.com/mp3/sample-3s.mp3
```

### Video

```text
https://samplelib.com/lib/preview/mp4/sample-5s.mp4
```

### YouTube Video

```text
https://youtu.be/_PwhiWxHK8o
```

---

## Git Commands Used

### Stage Files

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" add "phase_1_day_3_task/index.html" "phase_1_day_3_task/hour_2.html"
```

### Commit Hour 2

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" commit -m "feat: complete Phase 1 Day 3 Hour 2 audio and video task"
```

---

# Hour 3 — Company Profile Website Project

## Goal

Build a professional multi-page company profile website using semantic HTML and SEO basics.

---

## Pages Created

- Home Page
- About Page
- Services Page
- Contact Page

---

## SEO Tasks Completed

- Added meta title
- Added meta description
- Added viewport meta tag
- Used proper heading structure
- Added image `alt` tags

---

## Website Features

- Responsive-style layouts
- Semantic HTML structure
- Navigation menu
- Hero section
- Services section
- Contact information
- Embedded YouTube video
- Internal CSS styling

---

## Files Used

```text
phase_1_day_3_task/company-profile-website/index.html
phase_1_day_3_task/company-profile-website/about.html
phase_1_day_3_task/company-profile-website/services.html
phase_1_day_3_task/company-profile-website/contact.html
```

---

## PowerShell Commands Used

### Create Company Website Folder

```powershell
mkdir "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website"
```

### Create Website Files

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website\index.html"
```

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website\about.html"
```

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website\services.html"
```

```powershell
ni "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website\contact.html"
```

### Create Images Folder

```powershell
mkdir "$HOME\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_3_task\company-profile-website\images"
```

---

## Git Commands Used

### Stage Files

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" add "index.html" "phase_1_day_3_task/index.html" "phase_1_day_3_task/company-profile-website"
```

### Commit Hour 3

```powershell
git -C "$HOME\vs-code\frontend_web_kt_learning_roadmap" commit -m "feat: complete Phase 1 Day 3 Hour 3 company profile website project"
```

---

# Final Project Structure

```text
phase_1_day_3_task/
│
├── index.html
├── hour_1.html
├── hour_2.html
├── day3_task.md
│
└── company-profile-website/
    │
    ├── index.html
    ├── about.html
    ├── services.html
    ├── contact.html
    │
    └── images/
```

---

# Final Deliverables After 3 Days

Completed:
- HTML practice projects
- Tables & forms
- Semantic HTML layouts
- Multimedia embedding
- SEO basics
- Multi-page website structure
- Git workflow practice
- Project organization skills
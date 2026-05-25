# Phase 1 — Day 1 Task

## Project Root Path

```powershell
$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap
```

---

# Initial Git Setup

## Initialize Git Repository

```powershell
git init
```

## Verify Git Status

```powershell
git status
```

---

# Hour 1 — Learn & Practice Basics

## Goal

Practice basic HTML structure and fundamental HTML elements.

## Tasks Completed

- Created `index.html`
- Created `images` folder
- Added:
  - 3 headings
  - 3 paragraphs
  - Ordered list
  - Unordered list

---

## PowerShell Commands Used

### Create `index.html`

```powershell
ni "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\index.html"
```

### Create `images` Folder

```powershell
mkdir "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\images"
```

---

## Git Commands Used

### Check Git Status

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" status
```

### Add Files To Staging

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" add .
```

### Commit Hour 1 Work

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" commit -m "Phase 1 Day 1 - Hour 1 HTML basics completed"
```

---

# Hour 2 — Links & Images

## Goal

Practice hyperlinks, internal navigation, and image integration.

## Tasks Completed

- Added Google link
- Added YouTube link
- Added internal page link
- Added company logo image
- Added nature image
- Created internal page:
  - `about.html`

---

## PowerShell Commands Used

### Create `about.html`

```powershell
ni "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\about.html"
```

---

## Images Used

### Company Logo

```text
the-trump-brand-logo.jpg
```

### Nature Image

```text
plitvice-Lakes-national-park.jpg
```

---

## Git Commands Used

### Check Git Status

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" status
```

### Add Files To Staging

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" add .
```

### Commit Hour 2 Work

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" commit -m "Phase 1 Day 1 - Hour 2 links and images completed"
```

---

# Hour 3 — Mini Project

## Goal

Build a simple profile website project.

## Tasks Completed

### Created Mini Project Folder

```text
my-profile-website
```

### Inside Mini Project

- Created `index.html`
- Created `images` folder
- Added:
  - Name section
  - About Me section
  - Skills list
  - Favorite websites
  - Profile image

### Main Project Update

- Added link/button from main `index.html`
  to mini project website.

---

## PowerShell Commands Used

### Create Mini Project Folder

```powershell
mkdir "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\my-profile-website"
```

### Create Mini Project `index.html`

```powershell
ni "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\my-profile-website\index.html"
```

### Create Mini Project `images` Folder

```powershell
mkdir "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap\phase_1_day_1_task\my-profile-website\images"
```

---

## Profile Image Used

```text
0fficial-presidential-portraitp-of-president-donald-J-trump.jpg
```

---

## Git Commands Used

### Check Git Status

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" status
```

### Add Files To Staging

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" add .
```

### Commit Hour 3 Work

```powershell
git -C "$HOME\Downloads\vs-code\frontend_web_kt_learning_roadmap" commit -m "Phase 1 Day 1 - Hour 3 profile website completed"
```

---

# Final Git Commit History

```text
ba1838c - Phase 1 Day 1 - Hour 1 HTML basics completed

d085e0b - Phase 1 Day 1 - Hour 2 links and images completed

39836c0 - Phase 1 Day 1 - Hour 3 profile website completed
```

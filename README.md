# 🚀 AngularFireBase Project

A complete **Angular 15** authentication and task management system with **Firebase** integration. This application demonstrates modern web development practices including reactive forms, route protection, CRUD operations, and persistent data storage.

---

## 📋 Table of Contents

- [Application Overview](#application-overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Available Commands](#available-commands)
- [Features & Usage Guide](#features--usage-guide)
- [Authentication System](#authentication-system)
- [Task Management (CRUD)](#task-management-crud)
- [Project Architecture](#project-architecture)
- [File Structure](#file-structure)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Application Overview

### **What is this application?**

This is a **full-stack Angular application** that provides:

1. **User Authentication System**
   - Email/Password login
   - User ID/Password login
   - User registration (signup)
   - Profile management
   - Logout functionality
   - Protected routes with AuthGuard

2. **Task Management System (CRUD)**
   - Create new tasks with details (title, description, due date, priority)
   - Read/View all tasks with filtering and sorting
   - Update task information (status, priority, details)
   - Delete tasks with confirmation
   - Filter tasks by status (Pending, In Progress, Completed)
   - Sort tasks by due date, priority, or creation date
   - Real-time data persistence using LocalStorage

3. **User Dashboard**
   - Welcome message with user information
   - Navigation to all main features
   - Quick access to Tasks and Profile

### **Technology Stack**

```
Frontend Framework:  Angular 15
Styling:             SCSS (Sass)
Forms:               Reactive Forms
State Management:    RxJS Observables
Routing:             Angular Router
Data Storage:        LocalStorage (Firebase ready)
Development Server:  Angular CLI Dev Server
Build Tool:          Webpack (via Angular CLI)
Testing:             Jasmine & Karma
```

### **Architecture Pattern**

- **Component-Based:** Modular components for each feature
- **Service-Oriented:** Business logic in services
- **Guard-Protected:** Route guards for authentication
- **Reactive:** Reactive Forms with validation
- **Observable:** RxJS for state management

---


AngularFireBase_Project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── login/                 # Email login
│   │   │   │   ├── login-id/              # User ID login ✨
│   │   │   │   ├── signup/                # Registration
│   │   │   │   └── profile/               # User profile
│   │   │   ├── crud/
│   │   │   │   └── task-crud/             # Task management ✨
│   │   │   └── dashboard/                 # Main dashboard
│   │   ├── services/
│   │   │   ├── auth.service.ts            # Authentication logic
│   │   │   └── task.service.ts            # Task CRUD logic ✨
│   │   ├── guards/
│   │   │   └── auth.guard.ts              # Route protection
│   │   ├── models/
│   │   │   └── task.model.ts              # Task interface ✨
│   │   ├── app.component.*                # Root component
│   │   ├── app.module.ts                  # Module declarations
│   │   └── app-routing.module.ts          # Route configuration
│   ├── assets/                            # Static files
│   ├── environments/                      # Environment configs
│   ├── styles.scss                        # Global styles
│   ├── index.html                         # HTML entry point
│   └── main.ts                            # Bootstrap file
├── package.json                           # Dependencies
├── angular.json                           # Angular CLI config
├── tsconfig.json                          # TypeScript config
├── README.md                              # This file
└── .gitignore
```

---

## 📋 Prerequisites

Before you begin, ensure you have installed:

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Angular CLI** (v15)
   ```powershell
   npm install -g @angular/cli@15
   ```

3. **Git** (optional, for version control)
   - Download: https://git-scm.com/

4. **Text Editor / IDE** (recommended)
   - VS Code: https://code.visualstudio.com/
   - WebStorm: https://www.jetbrains.com/webstorm/

---

## 🔧 Installation & Setup

### **Step 1: Navigate to Project Directory**
```powershell
cd "C:\Users\thalwai\source\repos\Angular Material - Firebase\AngularFireBase_Project"
```

### **Step 2: Install Dependencies**
```powershell
npm install
```

This will install all required packages listed in `package.json`:
- Angular framework
- RxJS
- TypeScript
- Angular CLI tools
- Development dependencies

**Expected output:**
```
added XXX packages in XXXs
```

### **Step 3: Verify Installation**
```powershell
ng version
```

This should show Angular CLI version 15.x.x

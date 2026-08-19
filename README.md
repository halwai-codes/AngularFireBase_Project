# 🚀 AngularFireBase Project

A complete **Angular 15** authentication and task management system with **Firebase** integration. This application demonstrates modern web development practices including reactive forms, route protection, CRUD operations, and persistent data storage.

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
Frontend Framework:  Angular 15
Styling:             SCSS (Sass)
Forms:               Reactive Forms
State Management:    RxJS Observables
Routing:             Angular Router
Data Storage:        LocalStorage (Firebase ready)
Development Server:  Angular CLI Dev Server
Build Tool:          Webpack (via Angular CLI)
Testing:             Jasmine & Karma


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

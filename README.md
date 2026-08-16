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

## ✨ Key Features

### **Authentication**
- ✅ Email & Password login
- ✅ User ID & Password login (with demo credentials)
- ✅ User registration/signup
- ✅ Profile management & updates
- ✅ Logout functionality
- ✅ Form validation with error messages
- ✅ Password visibility toggle
- ✅ Persistent session with LocalStorage
- ✅ Protected routes with AuthGuard

### **Task Management (CRUD)**
- ✅ **Create:** Add tasks with full details
- ✅ **Read:** View all tasks with rich information display
- ✅ **Update:** Edit task details and change status in real-time
- ✅ **Delete:** Remove tasks with confirmation dialog
- ✅ **Filter:** Filter tasks by status (Pending, In Progress, Completed)
- ✅ **Sort:** Sort by Due Date, Priority, or Creation Date
- ✅ **Status Badges:** Color-coded status and priority indicators
- ✅ **Persistence:** All data saved to LocalStorage

### **User Experience**
- ✅ Beautiful gradient UI design
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form validation with inline error messages
- ✅ Loading states and user feedback
- ✅ Smooth transitions and animations
- ✅ Intuitive navigation

---

## 📁 Project Structure

```
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

---

## ▶️ Running the Application

### **Method 1: Start Development Server (RECOMMENDED)**

```powershell
npm start
```

**Or:**
```powershell
ng serve
```

**What happens:**
- Compiles the TypeScript code to JavaScript
- Bundles the application
- Starts local dev server
- Enables hot reload (auto-refresh on file changes)
- Shows compilation time

**Example Output:**
```
✔ Browser application bundle generation complete.
** Angular Live Development Server is listening on localhost:63562, open your browser on http://localhost:63562/ **
√ Compiled successfully.
```

### **Step 2: Open in Browser**

Once you see "Compiled successfully", open:
```
http://localhost:63562
```

(Note: Port number may vary if 4200 is busy)

### **Step 3: Stop the Server**

When you want to stop:
```powershell
Press Ctrl + C
```

---

## 🛠️ Available Commands

| Command | Purpose | Usage |
|---------|---------|-------|
| `npm start` | 🚀 Start dev server with hot reload | `npm start` |
| `npm run build` | 📦 Create production build | `npm run build` |
| `npm test` | 🧪 Run unit tests | `npm test` |
| `ng serve --port 4201` | 🚀 Run on custom port | `ng serve --port 4201` |
| `ng lint` | ✅ Check code quality | `ng lint` |
| `ng generate component name` | 📝 Create component | `ng generate component name` |
| `ng generate service name` | 📝 Create service | `ng generate service name` |

---

## 📱 Features & Usage Guide

### **1. Login Page** (`/login`)

**Access:** http://localhost:63562/login

**Purpose:** User authentication with email and password

**Features:**
- Email input with format validation
- Password input with visibility toggle (👁️)
- Form validation with error messages
- Loading state during login
- Error handling & display
- Links to signup and user ID login

**Test Credentials:**
- Email: Any email (e.g., `test@example.com`)
- Password: Any password (e.g., `password123`)

**How to use:**
1. Enter email address
2. Enter password
3. Click "Login"
4. Wait for redirect to dashboard
5. OR click "Use User ID" to switch to ID login

---

### **2. User ID Login** (`/login-id`) ✨ NEW

**Access:** http://localhost:63562/login-id

**Purpose:** Alternative login method using User ID instead of email

**Features:**
- User ID input field
- Password input with visibility toggle
- Quick-fill demo credential buttons
- Form validation
- Demo credentials available

**Demo Credentials:**
```
User ID: admin      | Password: admin123
User ID: user1      | Password: user123
User ID: user2      | Password: user123
```

**How to use:**
1. Click one of the demo buttons (e.g., "admin") to auto-fill
2. Click "Login"
3. Will redirect to dashboard
4. OR enter custom User ID and password

---

### **3. Signup Page** (`/signup`)

**Access:** http://localhost:63562/signup

**Purpose:** Create new user account

**Features:**
- Full Name input (min 2 characters)
- Email input with format validation
- Password input with visibility toggle
- Confirm Password field with match validation
- All fields required
- Error messages for each field
- Loading state during signup

**Form Validation:**
- Name: Required, 2+ characters
- Email: Required, valid email format
- Password: Required, 6+ characters
- Confirm Password: Must match password

**How to use:**
1. Enter full name
2. Enter email address
3. Enter password (min 6 characters)
4. Confirm password (must match)
5. Click "Sign Up"
6. Will redirect to dashboard

---

### **4. Dashboard** (`/dashboard`) 🛡️ Protected

**Access:** http://localhost:63562/dashboard

**Requires:** User must be logged in

**Purpose:** Main hub showing user info and navigation to features

**Components:**
- Welcome message with user name
- User details (email, user ID)
- Navigation links to Tasks and Profile
- Feature cards with descriptions

**How to use:**
1. Login first (any method)
2. View welcome message and user info
3. Click "📋 Task Management" to go to tasks
4. Click "👤 Profile" to edit profile
5. Click cards to navigate to features

---

### **5. Task Management (CRUD)** (`/tasks`) ✨ NEW 🛡️ Protected

**Access:** http://localhost:63562/tasks

**Requires:** User must be logged in

**Purpose:** Complete task management with CRUD operations

#### **5.1 Create Task**

**How to add a new task:**
1. Click "+ New Task" button
2. Fill in form fields:
   - **Title:** Task name (min 3 characters)
   - **Description:** Task details (min 5 characters)
   - **Due Date:** Select from date picker
   - **Priority:** Choose Low, Medium, or High
   - **Status:** Select Pending, In Progress, or Completed
3. Click "Create Task"
4. Task appears in the list with current timestamp

**Form Validation:**
- Title: Required, 3+ characters
- Description: Required, 5+ characters
- Due Date: Required
- Priority & Status: Default values provided

#### **5.2 Read Tasks**

**View all tasks:**
- Tasks displayed as cards
- Each card shows:
  - Task title (bold heading)
  - Status badge (color-coded)
  - Priority badge (color-coded)
  - Full description
  - Due date and created date
  - Action buttons

**Color Coding:**
- **Status Badges:**
  - Pending: 🟡 Yellow
  - In Progress: 🔵 Blue
  - Completed: 🟢 Green
- **Priority Badges:**
  - High: 🔴 Red
  - Medium: 🟠 Orange
  - Low: 🟢 Green

#### **5.3 Update Task**

**Edit task details:**
1. Click "✏️ Edit" button on any task
2. Form appears with current values
3. Modify any field
4. Click "Update Task"
5. Changes saved and task card updates

**Change status quickly:**
1. Use the dropdown on each task card
2. Select new status (Pending, In Progress, Completed)
3. Saves immediately

**Change priority:**
1. Click "✏️ Edit" to open full form
2. Select new priority
3. Click "Update Task"

#### **5.4 Delete Task**

**Remove a task:**
1. Click "🗑️ Delete" button on any task
2. Confirmation dialog appears
3. Click "OK" to confirm or "Cancel" to keep
4. Task removed from list and LocalStorage

#### **5.5 Filter Tasks**

**Filter by status:**
1. Use "Filter by Status" dropdown
2. Options:
   - **All:** Show all tasks (default)
   - **Pending:** Only unstarted tasks
   - **In Progress:** Only active tasks
   - **Completed:** Only finished tasks
3. Task count shown for each filter
4. List updates instantly

#### **5.6 Sort Tasks**

**Sort by different criteria:**
1. Use "Sort by" dropdown
2. Options:
   - **Due Date:** Earliest first
   - **Priority:** High → Medium → Low
   - **Created Date:** Newest first
3. List reorganizes instantly

#### **Example Workflow:**

```
1. Create Task:
   Title: "Complete project report"
   Description: "Finish quarterly report with charts"
   Due Date: 2026-08-20
   Priority: High
   Status: Pending

2. Work on Task:
   Use dropdown to change status → In Progress

3. Filter:
   Show only "In Progress" tasks

4. Update:
   Click Edit, change priority to Medium

5. Complete:
   Change status to Completed

6. Archive:
   Delete completed task
```

---

### **6. Profile Page** (`/profile`) 🛡️ Protected

**Access:** http://localhost:63562/profile

**Requires:** User must be logged in

**Purpose:** View and manage user account information

**Features:**
- Display current user email
- Edit display name
- Update profile
- Logout button
- Success/error messages

**How to use:**
1. Navigate to Profile page
2. View current email and user ID
3. Edit display name in form
4. Click "Update Profile"
5. See success message
6. Click "Logout" to sign out

---

## 🔐 Authentication System

### **How Authentication Works**

1. **Login/Signup Process:**
   - User enters credentials
   - Service validates (against demo users or Firebase)
   - Creates User object with uid, email, displayName
   - Stores in LocalStorage
   - Updates AuthService BehaviorSubject
   - Redirects to dashboard

2. **Session Persistence:**
   - User data saved to LocalStorage
   - Survives page refresh
   - Checked on app initialization
   - Auto-populates currentUser$

3. **Protected Routes:**
   - AuthGuard checks isAuthenticated()
   - If not authenticated → redirect to /login
   - If authenticated → allow access

4. **Logout:**
   - Removes user from LocalStorage
   - Clears BehaviorSubject
   - Sets isAuthenticated to false
   - Redirects to /login

### **AuthService Details**

**Location:** `src/app/services/auth.service.ts`

**Methods:**
- `signup(email, password, displayName)` - Register new user
- `login(email, password)` - Login with email
- `loginWithId(userId, password)` - Login with user ID
- `logout()` - Sign out
- `updateProfile(displayName)` - Update user info
- `getCurrentUser()` - Get current user
- `isAuthenticated()` - Check if logged in

**Observables:**
- `currentUser$` - Current user data stream
- `isAuthenticated$` - Authentication status stream

---

## 📝 Task Management (CRUD)

### **Task Model**

```typescript
interface Task {
  id: string;              // Unique identifier
  title: string;           // Task name
  description: string;     // Task details
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;         // ISO date string
  createdAt: Date;         // Creation timestamp
  updatedAt: Date;         // Last update timestamp
}
```

### **TaskService Details**

**Location:** `src/app/services/task.service.ts`

**Methods:**
- `addTask(title, description, dueDate, priority)` - Create
- `updateTask(id, updates)` - Update
- `deleteTask(id)` - Delete
- `getTasks()` - Read all
- `getTaskById(id)` - Read one
- `getTasksByStatus(status)` - Filter
- `getTasksByPriority(priority)` - Filter

**Data Storage:**
- Uses BehaviorSubject for state management
- Persists to LocalStorage automatically
- Survives page refresh

---

## 🏗️ Project Architecture

### **Component Hierarchy**

```
AppComponent (Root)
├── Router Outlet
    ├── LoginComponent (/login)
    ├── LoginIdComponent (/login-id)
    ├── SignupComponent (/signup)
    ├── DashboardComponent (/dashboard)
    │   ├── Navbar
    │   └── Dashboard Grid
    ├── TaskCrudComponent (/tasks)
    │   ├── Task Form
    │   ├── Filters & Sorting
    │   └── Task Cards
    └── ProfileComponent (/profile)
        ├── User Info Display
        └── Profile Form
```

### **Data Flow**

```
User Input
    ↓
Component (Template)
    ↓
Event Handler (Component.ts)
    ↓
Service Method (service.ts)
    ↓
BehaviorSubject Update
    ↓
LocalStorage Persist
    ↓
Observable Subscription
    ↓
Component Update (View)
```

### **Routing Flow**

```
/ (default) → /login

/login → /dashboard (after successful login)
/login-id → /dashboard (after successful login)
/signup → /dashboard (after successful signup)

/dashboard (protected) → /tasks or /profile
/tasks (protected) → can edit/delete/create tasks
/profile (protected) → can view/update profile

* (wildcard) → /login (catch all)
```

---

## 📂 File Structure Details

### **Component Files**

Each component has 4 files:

```
component-name/
├── component-name.component.ts       # Logic
├── component-name.component.html     # Template
├── component-name.component.scss     # Styles
└── component-name.component.spec.ts  # Tests
```

### **Service Files**

```
service-name/
└── service-name.service.ts           # Business logic
```

### **Model Files**

```
models/
└── model-name.model.ts               # TypeScript interfaces
```

### **Guard Files**

```
guards/
└── guard-name.guard.ts               # Route protection logic
```

---

## 🆘 Troubleshooting

### **Issue: Port 4200 already in use**

**Solution:**
```powershell
ng serve --port 4201
```

Or kill the process:
```powershell
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### **Issue: Module not found errors**

**Solution:**
```powershell
rm -r node_modules
npm install
npm start
```

### **Issue: ng command not found**

**Solution:**
```powershell
npm install -g @angular/cli@15
ng version
```

### **Issue: Compilation errors**

**Solution:**
1. Check terminal for error messages
2. Fix TypeScript errors
3. Files auto-save and recompile
4. Browser refreshes automatically

### **Issue: LocalStorage not working**

**Solution:**
1. Check browser LocalStorage (F12 → Application → LocalStorage)
2. Clear browser cache
3. Try incognito/private mode
4. Check browser console for errors (F12 → Console)

### **Issue: Tasks not saving**

**Solution:**
1. Check browser console for errors
2. Verify LocalStorage is enabled
3. Check if TaskService is injected correctly
4. Refresh page to verify persistence

### **Issue: Login not working**

**Solution:**
1. For User ID login, use demo credentials:
   - admin / admin123
   - user1 / user123
2. For email login, any credentials work (demo mode)
3. Check browser console for errors
4. Verify AuthService is injected

---

## 🚀 Future Enhancements

### **Planned Features**

1. **Firebase Integration**
   - Replace LocalStorage with Firestore
   - Real-time database updates
   - Cloud authentication

2. **Advanced UI**
   - Angular Material components
   - Advanced data table
   - Charts and analytics

3. **Task Features**
   - Task categories/tags
   - Task subtasks
   - Task attachments
   - Comments on tasks
   - Task reminders

4. **User Features**
   - User roles (admin, user, viewer)
   - Sharing tasks with others
   - User notifications
   - Profile picture upload

5. **Performance**
   - Lazy loading routes
   - Service workers (PWA)
   - Code splitting
   - Image optimization

6. **Testing**
   - Unit tests for all services
   - E2E tests with Cypress
   - Increased code coverage

---

## 📝 Notes

- **Data Persistence:** Currently uses browser LocalStorage. For production, integrate Firebase Firestore.
- **Authentication:** Demo mode accepts any credentials. For production, integrate Firebase Auth.
- **Styling:** SCSS with responsive design. Supports mobile, tablet, and desktop.
- **Performance:** Lazy loading routes not implemented yet. Consider adding for larger apps.
- **Security:** In production, never store sensitive data in LocalStorage. Use secure HTTP-only cookies.

---

## 📞 Support & Questions

For questions or issues:
1. Check browser console (F12) for errors
2. Check terminal for compilation errors
3. Review this README for features and usage
4. Check project file structure for code organization

---

## 📄 License

This project is provided as-is for educational purposes.

---

**Last Updated:** August 16, 2026
**Angular Version:** 15.x
**Node Version:** 16+

# Team Task Manager

A Full Stack Task Management Web Application built using Spring Boot, MySQL, HTML, CSS, and JavaScript.

This application allows admins to create projects, assign tasks to team members, track task progress, and monitor overdue tasks through a dashboard system.

---

# Features

## Authentication
- User Registration
- User Login
- Role Selection (ADMIN / MEMBER)

## Role Based Access Control
- Admin can:
  - Create projects
  - Assign tasks
  - Manage team members
  - View dashboard

- Member can:
  - View assigned tasks
  - Update task status

## Project Management
- Create Projects
- View All Projects
- Delete Projects

## Task Management
- Create Tasks
- Assign Tasks to Members
- Update Task Status
- Delete Tasks
- Due Date Tracking
- Submission Date Tracking

## Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

## REST APIs
- CRUD Operations for:
  - Users
  - Projects
  - Tasks

---

# Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Spring Boot
- Spring Data JPA
- REST API

## Database
- MySQL

---

# Project Structure

task-manager-assignment

├── Task_Manager_front

│ ├── index.html

│ ├── register.html

│ ├── dashboard.html

│ ├── projects.html

│ ├── tasks.html

│ ├── style.css

│ └── *.js

│

├── Task_Manager_web

│ └── task-manager

│ ├── src

│ ├── pom.xml

│ └── ...

│

└── README.md

---

# Database Configuration

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskmanager

spring.datasource.username=root

spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update

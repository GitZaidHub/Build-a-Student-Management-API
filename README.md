# Student Management API

A simple RESTful API built with **Express.js**, **MySQL**, and **mysql2** for managing student records. The API supports creating, retrieving, updating, and deleting students using raw SQL queries.

---

## Features

- Add a new student
- Retrieve all students
- Retrieve a student by ID
- Update student details
- Delete a student
- MySQL connection pooling for efficient database management
- Proper error handling
- Console logging for database operations

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv

---

## Project Structure

```text
student-management-api/
│
├── package.json
├── .env
├── server.js
├── db.js
│
├── routes/
│   └── studentRoutes.js
│
└── schema.sql
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd student-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_db
```

---

## Database Setup

Create the database and table by running:

```sql
CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT NOT NULL
);
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

---

## API Endpoints

### Create Student

**POST** `/students`

Request Body:

```json
{
  "name": "MS Dhoni",
  "email": "dhoni@example.com",
  "age": 42
}
```

Response:

```json
{
  "message": "Student created successfully",
  "id": 1
}
```

---

### Get All Students

**GET** `/students`

Response:

```json
[
  {
    "id": 1,
    "name": "MS Dhoni",
    "email": "dhoni@example.com",
    "age": 42
  }
]
```

---

### Get Student By ID

**GET** `/students/:id`

Example:

```http
GET /students/1
```

---

### Update Student

**PUT** `/students/:id`

Request Body:

```json
{
  "name": "Captain Cool",
  "email": "captaincool@example.com",
  "age": 42
}
```

Response:

```json
{
  "message": "Student updated successfully"
}
```

---

### Delete Student

**DELETE** `/students/:id`

Response:

```json
{
  "message": "Student deleted successfully"
}
```

---

## Sample Operations

### Insert Students

```json
{
  "name": "MS Dhoni",
  "email": "dhoni@example.com",
  "age": 42
}
```

```json
{
  "name": "Virat Kohli",
  "email": "virat.kohli@example.com",
  "age": 35
}
```

### Update Student

```json
{
  "name": "Captain Cool",
  "email": "captaincool@example.com",
  "age": 42
}
```

### Delete Student

Delete:

```text
Virat Kohli
```

Then verify by fetching all students.

---

## SQL Queries

### Retrieve All Students

```sql
SELECT * FROM students;
```

### Retrieve Student By ID

```sql
SELECT * FROM students
WHERE id = 1;
```

### Update Student

```sql
UPDATE students
SET name = 'Captain Cool',
    email = 'captaincool@example.com'
WHERE id = 1;
```

### Delete Student

```sql
DELETE FROM students
WHERE id = 2;
```

---

## Error Handling

The API handles:

- Invalid requests
- Duplicate email entries
- Non-existent student updates
- Non-existent student deletions
- Database connection errors

Example:

```json
{
  "message": "Student not found"
}
```

---

## Logging

Database operations are logged in the console:

```text
Student Inserted: 1
Student Updated: 1
Student Deleted: 2
```

---

## Author

**Mohd Zaid**

B.Tech Computer Science Engineering  
MERN Stack Developer | Software Development Enthusiast
# 🎓 Students Catalog API

A simple **REST API built with Node.js and Express.js** for managing and retrieving student information.

This project is part of my journey toward becoming stronger in **backend development**. The main goal was to practice creating API routes, working with request parameters, filtering data, and returning JSON responses.

---

## 🚀 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for Node.js
* **JavaScript (ES Modules)** – Programming language
* **JSON** – Data format used for API responses

---

## 📁 Project Structure

```text
students-api/
│
├── data.js
├── server.js
├── package.json
└── README.md
```

### `data.js`

Contains the student data used by the API.

### `server.js`

Contains the Express server and all the API routes.

### `package.json`

Contains the project information, dependencies, and scripts.

### `README.md`

Documentation for the project.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Move into the project directory

```bash
cd students-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server will start on:

```text
http://localhost:5555
```

You should see:

```text
Server is on and running on port 5555
```

---

# 🔗 API Endpoints

The API provides different endpoints for accessing student information.

## 1. Get All Students

### Request

```http
GET /students
```

### Example

```text
http://localhost:5555/students
```

### Description

Returns the complete list of students.

### Example Response

```json
{
  "message": "Catalog of students",
  "data": [
    {
      "id": 1,
      "name": "John",
      "gender": "male",
      "class": "JSS1"
    }
  ]
}
```

---

## 2. Find Student by Name

### Request

```http
GET /students/name/:name
```

### Example

```text
http://localhost:5555/students/name/John
```

### Description

Uses the student's name as a URL parameter to search for a particular student.

### Example

```text
/students/name/John
```

Here:

```text
John
```

is the parameter.

---

## 3. Find Student by ID

### Request

```http
GET /students/id/:id
```

### Example

```text
http://localhost:5555/students/id/1
```

### Description

Uses the student's ID to find a specific student.

The ID from the URL is converted from a string into a number using:

```js
parseInt(request.params.id)
```

---

## 4. Find Students by Gender

### Request

```http
GET /students/gender/:gender
```

### Example

```text
http://localhost:5555/students/gender/male
```

### Description

Returns students whose gender matches the gender provided in the URL.

For example:

```text
/students/gender/male
```

will return students whose gender is:

```text
male
```

---

## 5. Find Students by Class

### Request

```http
GET /students/class/:class
```

### Example

```text
http://localhost:5555/students/class/JSS1
```

### Description

Returns students who belong to the specified class.

For example:

```text
/students/class/JSS1
```

will return students whose class is:

```text
JSS1
```

---

# 📌 API Summary

| Method | Endpoint                   | Purpose                 |
| ------ | -------------------------- | ----------------------- |
| GET    | `/students`                | Get all students        |
| GET    | `/students/name/:name`     | Find student by name    |
| GET    | `/students/id/:id`         | Find student by ID      |
| GET    | `/students/gender/:gender` | Find students by gender |
| GET    | `/students/class/:class`   | Find students by class  |

---

# 🧠 What I Practiced

Through this project, I practiced:

* Creating an Express server
* Using `app.get()`
* Creating API endpoints
* Using route parameters
* Accessing `request.params`
* Returning JSON responses
* Using HTTP status codes
* Using JavaScript `find()`
* Using JavaScript `filter()`
* Working with arrays of objects
* Converting route parameters from strings to numbers
* Testing API endpoints directly in the browser

---

# 🧪 Testing

Since these are `GET` requests, the endpoints can be tested directly from a web browser.

Start the server:

```bash
node server.js
```

Then visit:

```text
http://localhost:5555/students
```

You can also test the parameter routes:

```text
http://localhost:5555/students/name/John
```

```text
http://localhost:5555/students/id/1
```

```text
http://localhost:5555/students/gender/male
```

```text
http://localhost:5555/students/class/JSS1
```

---

# 📚 Learning Goal

This project is a beginner-level backend project created to build a strong understanding of how APIs work with **Node.js and Express.js**.

The project will be improved as I learn more about backend development, including:

* Better error handling
* POST requests
* PUT/PATCH requests
* DELETE requests
* Middleware
* Databases
* Authentication
* API validation
* REST API best practices

---

# 👨‍💻 Author

**Darby**

This project represents one step in my journey toward becoming a stronger backend developer, focusing on JavaScript, Node.js, Express.js, REST APIs and database-applications. 

Let's get the coding started!

> **Learn → Build → Break → Fix → Improve → Repeat.**

---

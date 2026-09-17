# 🚀 EXP-2.2– Pagination API

A Spring Boot REST API project demonstrating **student data management with pagination** using **Spring Data JPA** and **H2 Database**.

---

## 📌 Project Overview

This project is developed as part of the **Full Stack Development – 2** lab experiments.

The main objective of this experiment is to understand how to:

- 🌱 Build REST APIs using Spring Boot
- 🔄 Perform CRUD operations
- 🗄️ Connect Spring Boot with a database
- 🔗 Use Spring Data JPA
- 📄 Implement pagination
- 📑 Retrieve data page by page
- 🌐 Serve a simple frontend for testing the API

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ☕ **Java** | Programming Language |
| 🌱 **Spring Boot** | Backend Framework |
| 🔗 **Spring Data JPA** | Database Operations |
| 🗄️ **H2 Database** | In-Memory Database |
| 🌐 **REST API** | API Communication |
| 🖥️ **HTML, CSS & JavaScript** | Frontend |
| 📦 **Maven** | Dependency Management |

---

## 📂 Project Structure

```text
pagination-api/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/pagination_api/
│   │   │       ├── controller/
│   │   │       │   └── StudentController.java
│   │   │       │
│   │   │       ├── entity/
│   │   │       │   └── Student.java
│   │   │       │
│   │   │       ├── repository/
│   │   │       │   └── StudentRepository.java
│   │   │       │
│   │   │       ├── service/
│   │   │       │   └── StudentService.java
│   │   │       │
│   │   │       └── PaginationApiApplication.java
│   │   │
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── script.js
│   │       │   └── style.css
│   │       │
│   │       ├── application.properties
│   │       └── data.sql
│   │
│   └── test/
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── HELP.md


⚙️ Features
👨‍🎓 Student Management

The API manages student information using Spring Data JPA and provides REST endpoints for working with student records.

📄 Pagination

Student records can be retrieved page by page instead of loading all records at once.

Pagination helps improve:

⚡ Performance
📦 Response Size
👤 User Experience
🗄️ Database Efficiency
🗄️ H2 Database

The project uses an H2 in-memory database for storing student records during application runtime.

🌐 Web Interface

A simple and responsive frontend is included to interact with the API and display student data.

🚀 How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/rudrajit01/FS-2-all-exps.git
2️⃣ Navigate to the Project
cd FS-2-all-exps/EXP-2.1/pagination-api
3️⃣ Run Using Maven
🪟 Windows

Using the Maven Wrapper:

.\mvnw.cmd spring-boot:run

Or, if Maven is installed globally:

mvn spring-boot:run
🌍 Access the Application

Once the application starts successfully, open the following URL in your browser:

http://localhost:8080
👨‍🎓 Student API
http://localhost:8080/students
📑 Pagination Example

A paginated request can be made using query parameters:

/students?page=0&size=5
📌 Parameters
Parameter	Description
page=0	First page
size=5	5 students per page
🔗 Example Request
http://localhost:8080/students?page=0&size=5
🔄 API Workflow
┌──────────────────────┐
│   Client / Frontend  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  StudentController   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    StudentService    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  StudentRepository   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     H2 Database      │
└──────────────────────┘

The request flows through the Controller → Service → Repository layers before accessing the database.

🧪 Testing

The project includes a test structure under:

src/test/

The API can be tested using:

🌐 Web Browser
📮 Postman
🖥️ Frontend Interface
🎯 Learning Outcomes

After completing this experiment, the following concepts are demonstrated:

🌱 Spring Boot project setup
🔗 RESTful API development
🏗️ Layered architecture
👨‍🎓 Entity and repository creation
🗄️ Spring Data JPA
💾 H2 database integration
📑 Pagination using Spring Data
🔄 Frontend and backend integration
📦 Maven-based project management
👨‍💻 Author
Rudrajit Pramanik

🎓 B.E. CSE (Cyber Security)
🏫 Chandigarh University

📚 Experiment Details
Field	Details
Experiment	EXP-2.1
Project	Pagination API
Course	Full Stack Development – 2
Framework	Spring Boot
Database	H2
ORM	Spring Data JPA
⭐ Support

If you find this project useful, consider giving the repository a ⭐ Star on GitHub!

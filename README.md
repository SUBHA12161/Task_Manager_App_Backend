# Task Manager Backend

This is the backend service for a task management application, built with Node.js and Express.js. It provides RESTful APIs for user authentication and task management, allowing users to create, read, update, and delete tasks, as well as manage categories.

## Features

- User authentication (signup and login)
- Create, read, update, and delete (CRUD) tasks
- Manage task categories
- Secure token-based authentication using JWT
- Pagination and filtering for tasks

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a hosted service like MongoDB Atlas)

### Installation

1. **Clone the Repository**

-  git clone https://github.com/SUBHA12161/Task_Manager_App_Backend.git
-  cd Task_Manager_App_Backend

2. **Install Dependencies**

- npm install

3. **Environment Variables**

- Create a .env file in the root of your backend directory and add the following variables:
- PORT=4000
- MONGODB_URI=<your-mongodb-connection-string>
- JWT_SECRET=<your-jwt-secret>
- - Replace <your-mongodb-connection-string> with your MongoDB connection string.
- - Replace <your-jwt-secret> with a secret key for JWT signing. This can be any random string.

4. **Run the Application**

- npm start
- - The application should now be running on http://localhost:4000.

### API Endpoints

- This backend provides the following key API endpoints:

1. **User Authentication**

- POST /api/auth/signup
- - Registers a new user.
- - Request Body: { "username": "string", "password": "string" }

- POST /api/auth/login
- - Authenticates a user and returns a JWT token.
- - Request Body: { "username": "string", "password": "string" }

2. **Tasks**
- GET /api/tasks
- - Fetches all tasks (supports pagination and filtering).
- - Query Params: page, limit, status, category

- POST /api/tasks
- - Creates a new task.
- - Request Body: { "title": "string", "description": "string", "status": "string", "dueDate": "date", "category": "string" }

- PUT /api/tasks/:id
- - Updates an existing task by ID.
- - Request Body: { "title": "string", "description": "string", "status": "string", "dueDate": "date", "category": "string" }

- DELETE /api/tasks/:id
- - Deletes a task by ID.

- Categories
- - GET /api/categories
- - Fetches all categories.

- POST /api/categories
- - Creates a new category.
- - Request Body: { "name": "string" }

2. **Testing the API**

- You can test the API endpoints using tools like Postman or cURL.
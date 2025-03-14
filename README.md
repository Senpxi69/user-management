# User Management API

This is a simple User Management API built with Node.js, Express, and MongoDB. It allows users to register, update details, remove users, and fetch user information.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB (Ensure MongoDB is running on your local system at `mongodb://127.0.0.1:27017/UserDB`).

## Running the Application

To start the server, run:

```bash
node index.js
```

The server will run on `http://localhost:4000/`.

## API Endpoints

### 1. Register a User

**Endpoint:** `POST /user/submit`

- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25
  }
  ```
- **Response:**
  ```json
  {
    "message": "User saved successfully"
  }
  ```

### 2. Get All Users

**Endpoint:** `GET /user/all-users`

- **Response:**
  ```json
  [
    {
      "_id": "65ab1234fgh56789xyz",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 25
    }
  ]
  ```

### 3. Get User by ID

**Endpoint:** `GET /user/details/:id`

- **Response:**
  ```json
  {
    "_id": "65ab1234fgh56789xyz",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25
  }
  ```

### 4. Update a User

**Endpoint:** `PUT /user/update`

- **Request Body:**
  ```json
  {
    "id": "65ab1234fgh56789xyz",
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "age": 26
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

### 5. Remove a User

**Endpoint:** `DELETE /user/remove`

- **Request Body:**
  ```json
  {
    "id": "65ab1234fgh56789xyz"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User removed successfully"
  }
  ```

## Notes

- Ensure MongoDB is running before starting the server.
- Use [Postman](https://www.postman.com/) or any API testing tool to test the endpoints.

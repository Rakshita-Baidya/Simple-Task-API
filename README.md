# Simple Task API

This project is a simple REST API for managing tasks. It provides functionality to create, read, update, and delete tasks. Additionally, it supports searching tasks by keyword and filtering by status or priority.

## Main Features

- **Create**: Add a new task with a name, description, priority, and status.
- **Read**: Retrieve all tasks or a specific task by its ID.
- **Update**: Modify an existing task's name, description, priority, or status.
- **Delete**: Remove a task by its ID.

## Additional Features

- **Search**: Find tasks by keyword in the name or description.
- **Filter**: Filter tasks by status or priority.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

   ```bash
    git clone https://github.com/Rakshita-Baidya/Simple-Task-API.git
   ```

2. **Go to the project directory**

```bash
  cd Simple-Task-API
```

3. **Install dependencies**

```bash
  npm install
```

**Install only necessary dependencies**

```bash
  npm install express
```

4. **Start the server**

```bash
  node app.js
```

The server will start and listen on port 3000.

## API Endpoints

The API has been tested using Postman using following examples with descriptions that should help clearly describe each endpoint and the responses or errors that might occur, making it easier to understand the API’s functionality.

### Get All Tasks

- **URL:** `http://localhost:3000/tasks`
- **Method:** `GET`
- **Success Response:**
  - Returns a list of all tasks.
- **Error Response:**
  - Internal server error if there's an issue with reading tasks from the file.

### Get Task by ID

- **URL:** `http://localhost:3000/tasks/:id`
- **Method:** `GET`
- **URL Params:**
  - **Required:** `id=[string]`
- **Success Response:**
  - Returns the task with the specified ID.
- **Error Response:**
  - Returns an error if the task with the specified ID is not found.

### Create a New Task

- **URL:** `http://localhost:3000/tasks`
- **Method:** `POST`
- **Data Params:**
  - **Required:**
    - `name`: The name of the task.
    - `description`: The description of the task.
    - `priority`: The priority level of the task. (optional)
    - `status`: The status of the task. (optional)
- **Success Response:**
  - Returns the newly created task.
- **Error Response:**
  - Returns an error if the name or description is missing in the request.

### Update a Task

- **URL:** `http://localhost:3000/tasks/:id`
- **Method:** `PUT`
- **URL Params:**
  - **Required:** `id=[string]`
- **Data Params:**
  - **Required:**
    - `name`: Updated name of the task.
    - `description`: Updated description of the task.
    - `priority`: Updated priority level of the task. (optional)
- **Success Response:**
  - Returns the updated task.
- **Error Response:**
  - Returns an error if the task with the specified ID is not found.

### Delete a Task

- **URL:** `http://localhost:3000/tasks/:id`
- **Method:** `DELETE`
- **URL Params:**
  - **Required:** `id=[string]`
- **Success Response:**
  - Returns a success message indicating the task was deleted.
- **Error Response:**
  - Returns an error if the task with the specified ID is not found.

### Search Tasks

- **URL:** `http://localhost:3000/tasks/search?keyword=<keyword>`
- **Method:** `GET`
- **Query Params:**
  - **Required:** `keyword=[string]`
- **Success Response:**
  - Returns a list of tasks that match the search keyword.
- **Error Response:**
  - Returns an error if the keyword is missing or if there’s a problem with the search operation.

### Filter Tasks

- **URL:** `http://localhost:3000/tasks/filter?status=<status>&priority=<priority>`
- **Method:** `GET`
- **Query Params:**
  - **Optional:** `status=[string]`, `priority=[string]`
- **Success Response:**
  - Returns a list of tasks filtered by the specified status and/or priority.
- **Error Response:**
  - Returns an error if the status or priority is invalid.

## Error Handling

Errors are handled consistently using middleware and will return a JSON response with an appropriate error message.

## Contributing

Contributions are always welcome! If you'd like to contribute to this project, please submit a pull request with your proposed changes.

# Task Management Application

A task management app with user authentication built with Express.js.

## Project Structure

```
src/
├── controllers/     # Business logic
├── middleware/      # Authentication
├── routes/          # API routes
├── models/          # Data storage
└── server.js        # Entry point
public/              # Frontend files
testing/             # Test cases & bugs
```

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Features

- User registration with email validation
- JWT-based authentication
- Task CRUD operations
- User-specific task isolation
- Password hashing with bcrypt

## API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - Login and receive JWT token

### Tasks (requires authentication)
- `GET /api/tasks` - Get all user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Known Limitations

- Data stored in memory (lost on restart)
- No token expiration
- Basic email validation (only checks for @)
- No password strength requirements
- No rate limiting
- Hardcoded JWT secret

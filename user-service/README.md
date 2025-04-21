# User Service

This is the user service for the Personalized Learning Platform.

## Features
- User registration and login
- Password hashing using bcrypt
- MongoDB for storage

## Getting Started
```bash
npm install
npm run dev
```

## Env Variables
```
<!-- MONGO_URI=mongodb://localhost:27017/user-service -->
MONGODB_URI=mongodb://root:368Fz3Z3l2EMUQfvRFlifPKw@172.21.96.23:27017
PORT=3000
```

## API
- `POST /api/users/register`
- `POST /api/users/login`

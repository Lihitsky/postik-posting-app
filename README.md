# Postik

**Postik** is a web application designed for posting and sharing ideas. Built using Node.js for the backend and React for the frontend, Postik provides a seamless experience for users to share their thoughts, ideas, and creativity with the world.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [License](#license)

## Features

- **User Authentication**: Secure user registration and login with JWT and Bcrypt.
- **Post Creation and Management**: Create, edit, delete, and view posts.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Redux Toolkit for State Management**: Efficient and scalable state management for React.
- **Integration with MongoDB**: Database support for data storage and management.
- **Custom UI Components**: Built using `@nextui-org/react` for a modern and sleek UI.

## Tech Stack

### Backend

- **Node.js** with **Express.js**
- **Prisma ORM**
- **MongoDB**
- **JWT** for authentication
- **Multer** for handling file uploads

### Frontend

- **React** with **Vite**
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **React Router** for routing
- **Framer Motion** for animations

## Installation

To get started with Postik, follow the steps below:

### Prerequisites

Ensure you have the following installed:

- Node.js (v16.x or higher)
- Docker and Docker Compose

### Clone the Repository

```bash
git clone https://github.com/Lihitsky/postik-posting-app.git
cd postik-posting-app
```

### Install Backend Dependencies
```bash
cd express-api
npm install
```

### Install Frontend Dependencies
```bash
cd ../react-client
npm install
```

## Usage

### Running Locally

1. Start the Express server:
```bash
cd express-api
npm run dev
```

2. Start the React application:
```bash
cd ../react-client
npm run dev
```

### Running with Docker

Ensure you are in the root directory where the docker-compose.yml file is located and run:

```bash
docker-compose up --build
```

This will start the backend API, MongoDB, and frontend React app.

## Environment Variables

Create a .env file in the express-api directory and provide the following variables:

```bash
DATABASE_URL="mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/mydatabase?authSource=admin&directConnection=true"
MONGO_INITDB_ROOT_USERNAME="name"
MONGO_INITDB_ROOT_PASSWORD="pasword"
SECRET_KEY="secret-key"
```

## Docker Setup

The docker-compose.yml file is provided to set up the development environment easily.

### Services

- postik-express-app: Runs the Express server.
- postik-db: MongoDB container with single-replica setup.
- postik-react-app: React frontend container.

To start all services, run:

```bash
docker-compose up --build
```

### Stopping Services

To stop all running containers:

```bash
docker-compose down
```

## License

This project is licensed under the **MIT License**. See the LICENSE file for more details.
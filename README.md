Postik
Postik is a web application for posting ideas and content, built using Node.js on the backend and React on the frontend. This project is designed to provide an easy and intuitive way to share posts and collaborate on ideas. It uses Express.js for the server-side API and Prisma for database management, along with a modern frontend stack powered by React and Vite.

Table of Contents
Features
Tech Stack
Installation
Usage
Docker Setup
Environment Variables
Scripts
Contributing
License
Features
User Authentication: Secure user authentication using JWT and bcrypt.
Post Management: Create, read, update, and delete (CRUD) functionality for posts.
Responsive UI: Modern and responsive user interface built with React and Tailwind CSS.
RESTful API: Backend API built with Express.js for handling post and user data.
Database Integration: MongoDB as the database, managed through Prisma ORM.
Containerized Deployment: Docker setup for easy deployment and scalability.
Tech Stack
Backend
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
Prisma: Database ORM for Node.js.
MongoDB: NoSQL database.
Frontend
React: JavaScript library for building user interfaces.
Vite: Fast build tool for modern web projects.
Tailwind CSS: Utility-first CSS framework.
Redux: State management for React applications.
DevOps
Docker: Containerization for scalable deployment.
Docker Compose: Tool for defining and running multi-container Docker applications.
Installation
To get started with Postik, you need to set up both the backend (Express API) and frontend (React app).

Prerequisites
Node.js and npm installed.
Docker and Docker Compose installed.
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/postik.git
cd postik
Install Backend Dependencies
Navigate to the backend directory and install dependencies:

bash
Copy code
cd server
npm install
Install Frontend Dependencies
Navigate to the frontend directory and install dependencies:

bash
Copy code
cd ../react-client
npm install
Usage
Running the Application Locally
Backend: Start the Express server from the server directory:

bash
Copy code
cd server
npm run dev
Frontend: Start the React development server from the react-client directory:

bash
Copy code
cd ../react-client
npm run dev
The backend will be running on http://localhost:3000, and the frontend will be running on http://localhost:5173.

Docker Setup
You can also run the entire application using Docker. Ensure Docker and Docker Compose are installed on your system.

Build and Run the Docker Containers
Navigate to the backend directory where the docker-compose.yml file is located.

Run the following command to build and start the containers:

bash
Copy code
docker-compose up --build
This command will spin up the following services:

postik-express-app: The backend Express application.
postik-db: MongoDB database.
postik-react-app: The frontend React application.
Stopping the Containers
To stop and remove the containers, run:

bash
Copy code
docker-compose down
Environment Variables
Make sure to set up a .env file in the server directory with the following variables:

env
Copy code
DATABASE_URL="mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/mydatabase?authSource=admin&directConnection=true"
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=admin123
SECRET_KEY="vN9fS1hz7b2kmC3iQsXdW8rLY7aOdT9r2HjP4g6vKcMlJ2mSpVtRwQ8zFcUkYzPi"
Scripts
Backend
npm run start: Start the server.
npm run dev: Start the server with nodemon for hot-reloading.
Frontend
npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.
npm run test: Run tests using Vitest.
npm run lint: Run ESLint to check for linting errors.
npm run format: Format the code with Prettier.
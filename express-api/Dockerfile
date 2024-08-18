# Using Alpine linux image with node version 14
FROM node:19.5.0-alpine

# Specify our working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else to container
COPY . .

# Install Prisma
RUN npm install -g prisma

# Generate prisma client
RUN prisma generate

# Copy prisma schema
COPY prisma/schema.prisma ./prisma/

# Open port in container
EXPOSE 3000

# Start server
CMD ["npm", "start"]
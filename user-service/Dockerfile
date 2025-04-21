# Use the official Node.js 18 LTS Alpine image for a small, secure base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) first to leverage Docker layer caching
COPY package*.json ./

# Install all npm dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Compile TypeScript to JavaScript (output goes to /app/dist by default)
RUN npm run build

# Specify the command to run the compiled app
# This starts the user-service by running dist/index.js
CMD ["node", "dist/index.js"]

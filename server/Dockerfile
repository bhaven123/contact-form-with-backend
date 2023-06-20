# Base image
FROM node:latest

# Install nodemon
RUN npm install -g nodemon

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Expose the port on which the client will run
EXPOSE 4000

# Start the server using nodemon
CMD [ "npm", "run", "dev" ]
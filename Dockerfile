# Use an official Node.js runtime as a parent image
FROM node:23-alpine AS base

#RUN npm install nodemon -g

# Install pnpm
RUN npm install -g pnpm@9.12.3

# (Optional) Install PostgreSQL
# RUN apt-get update && \
#    apt-get install -y postgresql postgresql-contrib && \
#    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

FROM base AS builder

# Copy the package.json and lock files
COPY ./package*.json ./

# Install dependencies
RUN pnpm install

FROM builder AS final

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["pnpm", "dev"]
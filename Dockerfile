# Base image
FROM denoland/deno

# Set working directory in the container
WORKDIR /app

# Copy package dependency files
COPY package*.json deno.json ./

# Install dependencies
RUN deno install

# Copy the rest of the application
COPY . .

# Build the application
RUN deno task build

# Expose port (replace with your application's port)
EXPOSE 3000

# Command to run the application
CMD ["deno", "task", "start"]

#!/bin/bash

# MCP GitHub Server Startup Script

echo "Starting MCP GitHub Server..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Warning: .env file not found. Please create one with your GITHUB_TOKEN."
    echo "Example: echo 'GITHUB_TOKEN=your_token_here' > .env"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    pnpm install
fi

# Start the server
echo "Launching server..."
pnpm start


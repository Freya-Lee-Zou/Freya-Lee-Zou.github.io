#!/bin/bash

echo "🚀 Setting up MCP GitHub Server for your portfolio project..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from your project root directory"
    exit 1
fi

# Create mcp-server directory if it doesn't exist
if [ ! -d "mcp-server" ]; then
    echo "📁 Creating mcp-server directory..."
    mkdir -p mcp-server
fi

cd mcp-server

# Check if package.json exists, if not create it
if [ ! -f "package.json" ]; then
    echo "📦 Creating package.json for MCP server..."
    cat > package.json << 'EOF'
{
  "name": "mcp-github-server",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "test": "node test.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.4.0"
  },
  "devDependencies": {
    "dotenv": "^16.3.1"
  }
}
EOF
fi

# Install dependencies
echo "📥 Installing dependencies..."
pnpm install

# Check if .env exists
if [ ! -f ".env" ]; then
    echo ""
    echo "🔑 GitHub Token Setup Required"
    echo "================================"
    echo "You need to create a GitHub Personal Access Token:"
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Click 'Generate new token (classic)'"
    echo "3. Select scopes: repo, read:org, read:user"
    echo "4. Copy the generated token"
    echo ""
    read -p "Enter your GitHub token: " github_token
    
    if [ -n "$github_token" ]; then
        echo "GITHUB_TOKEN=$github_token" > .env
        echo "✅ GitHub token saved to .env file"
    else
        echo "⚠️  No token provided. You'll need to create .env manually later."
    fi
else
    echo "✅ .env file already exists"
fi

# Make startup script executable
chmod +x start.sh

echo ""
echo "🎉 MCP GitHub Server setup complete!"
echo ""
echo "Next steps:"
echo "1. Test the server: cd mcp-server && pnpm test"
echo "2. Start the server: cd mcp-server && pnpm start"
echo "3. Configure your MCP client to use this server"
echo ""
echo "For more information, see mcp-server/README.md"
echo ""
echo "Happy coding! 🚀"


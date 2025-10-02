# MCP GitHub Server

This is a Model Context Protocol (MCP) server that provides GitHub integration capabilities for AI assistants.

## Features

- Repository management
- Issue and pull request operations
- User and organization information
- File operations
- And more GitHub API capabilities

## Prerequisites

- Node.js 18+ 
- GitHub Personal Access Token

## Setup

### 1. Install Dependencies

```bash
cd mcp-server
pnpm install
```

### 2. Configure GitHub Token

You need to create a GitHub Personal Access Token:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `read:org` (Read organization data)
   - `read:user` (Read user profile data)
4. Copy the generated token

### 3. Set Environment Variable

Create a `.env` file in the `mcp-server` directory:

```bash
echo "GITHUB_TOKEN=your_actual_token_here" > .env
```

**Important**: Never commit your `.env` file to version control!

### 4. Test the Server

```bash
pnpm start
```

The server should start and be ready to accept MCP connections.

## Usage

### With Cursor/VS Code

1. Install the MCP extension
2. Add this server to your MCP configuration
3. The AI assistant will now have access to GitHub tools

### With Other MCP Clients

Configure your MCP client to connect to this server using stdio transport.

## Configuration

You can modify `config.js` to customize:
- GitHub API base URL
- Server name and version
- Additional GitHub API options

## Troubleshooting

- **Token errors**: Ensure your GitHub token has the correct scopes
- **Connection issues**: Check that the server is running and accessible
- **Permission errors**: Verify your token has access to the repositories you're trying to access

## Security Notes

- Keep your GitHub token secure
- Use the minimum required scopes for your use case
- Consider using GitHub Apps for production use
- Regularly rotate your tokens

## License

Same as the parent project.


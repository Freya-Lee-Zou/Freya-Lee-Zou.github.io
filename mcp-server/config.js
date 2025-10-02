// Configuration for MCP GitHub Server
export const config = {
  // GitHub Personal Access Token
  // Generate one at: https://github.com/settings/tokens
  // Required scopes: repo, read:org, read:user
  githubToken: process.env.GITHUB_TOKEN || 'your_github_token_here',
  
  // GitHub API configuration
  github: {
    baseUrl: 'https://api.github.com',
    userAgent: 'mcp-github-server',
  },
  
  // MCP Server configuration
  server: {
    name: 'github-server',
    version: '1.0.0',
  }
};


#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { config } from './config.js';
import GitHubClient from './github-client.js';

async function main() {
  const server = new Server(
    {
      name: config.server.name,
      version: config.server.version,
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  const github = new GitHubClient();

  // Define GitHub tools
  const githubTools = {
    'github.get_repository': {
      description: 'Get information about a GitHub repository',
      inputSchema: {
        type: 'object',
        properties: {
          owner: { type: 'string', description: 'Repository owner' },
          repo: { type: 'string', description: 'Repository name' }
        },
        required: ['owner', 'repo']
      }
    },
    
    'github.list_repositories': {
      description: 'List repositories for a user or organization',
      inputSchema: {
        type: 'object',
        properties: {
          username: { type: 'string', description: 'Username or organization name' },
          type: { type: 'string', enum: ['all', 'owner', 'member'], default: 'all' }
        },
        required: ['username']
      }
    },
    
    'github.get_issues': {
      description: 'Get issues from a repository',
      inputSchema: {
        type: 'object',
        properties: {
          owner: { type: 'string', description: 'Repository owner' },
          repo: { type: 'string', description: 'Repository name' },
          state: { type: 'string', enum: ['open', 'closed', 'all'], default: 'open' },
          per_page: { type: 'number', default: 30 }
        },
        required: ['owner', 'repo']
      }
    },
    
    'github.create_issue': {
      description: 'Create a new issue in a repository',
      inputSchema: {
        type: 'object',
        properties: {
          owner: { type: 'string', description: 'Repository owner' },
          repo: { type: 'string', description: 'Repository name' },
          title: { type: 'string', description: 'Issue title' },
          body: { type: 'string', description: 'Issue description' },
          labels: { type: 'array', items: { type: 'string' } }
        },
        required: ['owner', 'repo', 'title']
      }
    },
    
    'github.get_file': {
      description: 'Get a file from a repository',
      inputSchema: {
        type: 'object',
        properties: {
          owner: { type: 'string', description: 'Repository owner' },
          repo: { type: 'string', description: 'Repository name' },
          path: { type: 'string', description: 'File path in repository' },
          ref: { type: 'string', description: 'Branch, tag, or commit SHA' }
        },
        required: ['owner', 'repo', 'path']
      }
    },

    'github.get_user': {
      description: 'Get information about a GitHub user',
      inputSchema: {
        type: 'object',
        properties: {
          username: { type: 'string', description: 'GitHub username' }
        },
        required: ['username']
      }
    },

    'github.search_repositories': {
      description: 'Search for repositories on GitHub',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Search query' },
          sort: { type: 'string', enum: ['stars', 'forks', 'help-wanted-issues', 'updated'], default: 'stars' },
          order: { type: 'string', enum: ['desc', 'asc'], default: 'desc' }
        },
        required: ['query']
      }
    },

    'github.get_pull_requests': {
      description: 'Get pull requests from a repository',
      inputSchema: {
        type: 'object',
        properties: {
          owner: { type: 'string', description: 'Repository owner' },
          repo: { type: 'string', description: 'Repository name' },
          state: { type: 'string', enum: ['open', 'closed', 'all'], default: 'open' }
        },
        required: ['owner', 'repo']
      }
    }
  };

  // Register tools
  server.setRequestHandler({
    async listTools() {
      return Object.entries(githubTools).map(([name, tool]) => ({
        name,
        description: tool.description,
        inputSchema: tool.inputSchema
      }));
    },

    async callTool(name, arguments_) {
      try {
        if (!githubTools[name]) {
          throw new Error(`Unknown tool: ${name}`);
        }

        let result;
        
        switch (name) {
          case 'github.get_repository':
            result = await github.getRepository(arguments_.owner, arguments_.repo);
            break;
            
          case 'github.list_repositories':
            result = await github.listRepositories(arguments_.username, arguments_.type);
            break;
            
          case 'github.get_issues':
            result = await github.getIssues(arguments_.owner, arguments_.repo, arguments_.state, arguments_.per_page);
            break;
            
          case 'github.create_issue':
            result = await github.createIssue(
              arguments_.owner, 
              arguments_.repo, 
              arguments_.title, 
              arguments_.body || '', 
              arguments_.labels || []
            );
            break;
            
          case 'github.get_file':
            result = await github.getFile(arguments_.owner, arguments_.repo, arguments_.path, arguments_.ref);
            break;
            
          case 'github.get_user':
            result = await github.getUser(arguments_.username);
            break;
            
          case 'github.search_repositories':
            result = await github.searchRepositories(arguments_.query, arguments_.sort, arguments_.order);
            break;
            
          case 'github.get_pull_requests':
            result = await github.getPullRequests(arguments_.owner, arguments_.repo, arguments_.state);
            break;
            
          default:
            throw new Error(`Tool ${name} not implemented`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error calling tool ${name}: ${error.message}`
            }
          ],
          isError: true
        };
      }
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  console.error('MCP GitHub Server started');
}

main().catch(console.error);

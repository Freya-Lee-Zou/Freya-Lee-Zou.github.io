// Test script for MCP GitHub Server
import GitHubClient from './github-client.js';
import { config } from './config.js';

async function testGitHubClient() {
  console.log('Testing GitHub Client...');
  
  if (config.githubToken === 'your_github_token_here') {
    console.log('⚠️  Please set your GITHUB_TOKEN in the .env file first');
    return;
  }

  try {
    const github = new GitHubClient();
    
    // Test getting authenticated user
    console.log('Testing authenticated user...');
    const user = await github.getAuthenticatedUser();
    console.log('✅ Authenticated as:', user.login);
    
    // Test getting a public repository
    console.log('Testing repository fetch...');
    const repo = await github.getRepository('microsoft', 'vscode');
    console.log('✅ Repository:', repo.full_name);
    console.log('   Description:', repo.description);
    console.log('   Stars:', repo.stargazers_count);
    
    // Test searching repositories
    console.log('Testing repository search...');
    const searchResults = await github.searchRepositories('typescript', 'stars', 'desc');
    console.log('✅ Search results count:', searchResults.total_count);
    console.log('   Top result:', searchResults.items[0]?.full_name);
    
    console.log('\n🎉 All tests passed! Your MCP server is ready.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.message.includes('401')) {
      console.log('💡 This usually means your GitHub token is invalid or expired');
    }
  }
}

testGitHubClient();


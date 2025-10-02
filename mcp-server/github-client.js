// GitHub API Client for MCP Server
import { config } from './config.js';

class GitHubClient {
  constructor() {
    this.token = config.githubToken;
    this.baseUrl = config.github.baseUrl;
    this.userAgent = config.github.userAgent;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `token ${this.token}`,
      'User-Agent': this.userAgent,
      'Accept': 'application/vnd.github.v3+json',
      ...options.headers
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`GitHub API request failed: ${error.message}`);
    }
  }

  // Repository operations
  async getRepository(owner, repo) {
    return this.request(`/repos/${owner}/${repo}`);
  }

  async listRepositories(username, type = 'all') {
    return this.request(`/users/${username}/repos?type=${type}&sort=updated&per_page=100`);
  }

  async listOrganizationRepositories(org, type = 'all') {
    return this.request(`/orgs/${org}/repos?type=${type}&sort=updated&per_page=100`);
  }

  // Issue operations
  async getIssues(owner, repo, state = 'open', perPage = 30) {
    return this.request(`/repos/${owner}/${repo}/issues?state=${state}&per_page=${perPage}`);
  }

  async createIssue(owner, repo, title, body = '', labels = []) {
    return this.request(`/repos/${owner}/${repo}/issues`, {
      method: 'POST',
      body: JSON.stringify({ title, body, labels })
    });
  }

  async getIssue(owner, repo, issueNumber) {
    return this.request(`/repos/${owner}/${repo}/issues/${issueNumber}`);
  }

  // File operations
  async getFile(owner, repo, path, ref = 'main') {
    return this.request(`/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${ref}`);
  }

  async getFileContents(owner, repo, path, ref = 'main') {
    const file = await this.getFile(owner, repo, path, ref);
    if (file.content) {
      return Buffer.from(file.content, 'base64').toString('utf-8');
    }
    throw new Error('File content not available');
  }

  // User operations
  async getUser(username) {
    return this.request(`/users/${username}`);
  }

  async getAuthenticatedUser() {
    return this.request('/user');
  }

  // Organization operations
  async getOrganization(org) {
    return this.request(`/orgs/${org}`);
  }

  async listOrganizationMembers(org) {
    return this.request(`/orgs/${org}/members?per_page=100`);
  }

  // Search operations
  async searchRepositories(query, sort = 'stars', order = 'desc') {
    return this.request(`/search/repositories?q=${encodeURIComponent(query)}&sort=${sort}&order=${order}&per_page=100`);
  }

  async searchIssues(query, sort = 'created', order = 'desc') {
    return this.request(`/search/issues?q=${encodeURIComponent(query)}&sort=${sort}&order=${order}&per_page=100`);
  }

  // Pull request operations
  async getPullRequests(owner, repo, state = 'open') {
    return this.request(`/repos/${owner}/${repo}/pulls?state=${state}&per_page=100`);
  }

  async getPullRequest(owner, repo, prNumber) {
    return this.request(`/repos/${owner}/${repo}/pulls/${prNumber}`);
  }

  // Branch operations
  async getBranches(owner, repo) {
    return this.request(`/repos/${owner}/${repo}/branches?per_page=100`);
  }

  async getBranch(owner, repo, branch) {
    return this.request(`/repos/${owner}/${repo}/branches/${branch}`);
  }
}

export default GitHubClient;


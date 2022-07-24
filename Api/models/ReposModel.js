const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: ""
})

const getRepoModel = async (user, language) => {  
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: `org:${user} language:${language}`,
  })

  return githubApiResponse.data.items
};

module.exports = getRepoModel;

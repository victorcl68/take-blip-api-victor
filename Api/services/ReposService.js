const getRepoModel = require('../models/ReposModel');
const compareDates = require('../helpers');

const getRepoService = async (repo, key) => {  
  const githubProjects = await getRepoModel("takenet", "c#")

  const sortedProjects = githubProjects.sort(compareDates)
  
  const sortedProjectsString = JSON.stringify(sortedProjects[repo][key]);

  try {
    return {repoStatus: 200, repoResponse: sortedProjectsString.replace(/"/g, "")};
  } catch (error) {
    return {repoStatus: 500, repoResponse: `Algo deu errado! Mensagem: ${error.message}`};
  }
};

module.exports = getRepoService;

const getRepoService = require('../services/ReposService');

const getRepoController = async (req, res) => {  
  const { repo, key } = req.params;
  const {repoStatus, repoResponse} = await getRepoService(repo, key);

  res.status(repoStatus).send(repoResponse);
};

module.exports = getRepoController;
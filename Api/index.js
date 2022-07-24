require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const { Octokit } = require('@octokit/rest');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));

const octokit = new Octokit({
  auth: ''
})

const compareDates = (a,b) => {
  return new Date(a.created_at) - new Date(b.created_at);
}

app.get('/repos/:repo/:key', async(req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const { repo, key } = req.params;

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  const projectWithoutQuotes = sortedProjects[repo][key].replace(/"/g, "");

  res.status(200).send(projectWithoutQuotes);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});

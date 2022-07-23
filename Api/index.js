const express = require('express');
const bodyParser = require('body-parser');
const { Octokit } = require('@octokit/rest');
require('dotenv').config()

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('uploads'));

const port = process.env.PORT || 3001;

const octokit = new Octokit({
  auth: ''
})

function compareDates(a,b) {
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

app.get('/image-url', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /users/{username}', {
    username: "takenet"
  })

  res.status(200).send(githubApiResponse.data.avatar_url)
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});

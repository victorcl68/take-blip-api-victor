const express = require('express');
const bodyParser = require('body-parser');
const { Octokit } = require('@octokit/rest');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const octokit = new Octokit({
  auth: ''
})

function compareDates(a,b) {
  return new Date(a.created_at) - new Date(b.created_at);
}

app.get('/a', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  res.status(200).send(slicedProjects[0])
});

app.get('/b', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  res.status(200).send(slicedProjects[1])
});

app.get('/c', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  res.status(200).send(slicedProjects[2])
});

app.get('/d', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  res.status(200).send(slicedProjects[3])
});

app.get('/e', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  res.status(200).send(slicedProjects[4])
});

app.get('/f', async(_req, res) => {
  const githubApiResponse = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const result2 = await octokit.request('GET /users/{username}', {
    username: "takenet"
  })

  const githubProjects = githubApiResponse.data.items
  const sortedProjects = githubProjects.sort(compareDates)

  let slicedProjects = sortedProjects.slice(0, 4)
  
  c.push({avatar_url: result2.data.avatar_url})

  res.status(200).send(c[5].avatar_url)
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});

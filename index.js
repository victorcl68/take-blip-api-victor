const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const { Octokit } = require('@octokit/rest');

const app = express();
app.use(bodyParser.json());


app.get('/', async(req, res) => {
  const octokit = new Octokit({
    auth: ''
  })

  const result = await octokit.request('GET /search/repositories', {
    q: "org:takenet language:c#",
  })

  const result2 = await octokit.request('GET /users/{username}', {
    username: "takenet"
  })

  function compare(a,b) {
    return new Date(a.created_at) - new Date(b.created_at);
}

  const RESULTADO = result.data.items.sort(compare)

  let c = RESULTADO.slice(0, 5)
  
  c.push({avatar_url: result2.data.avatar_url})

  res.status(200).json({res: c})

});

app.listen(process.env.PORT, () => {
  console.log('Aplicação ouvindo na porta ');
});

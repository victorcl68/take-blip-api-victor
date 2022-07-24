require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
const router = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(bodyParser.json());
app.use('/repos', router);
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});

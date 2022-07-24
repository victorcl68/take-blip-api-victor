const errorMiddleware = async (err, _req, res, _next) => {  
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
};

module.exports = errorMiddleware;

const notFoundMiddleware = async (req, res) => {  
  res.status(404).send(`Rota '${req.path}' não existe!`);
};

module.exports = notFoundMiddleware;

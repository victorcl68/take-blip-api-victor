const express = require('express');
const router = express.Router();
const getRepo = require('../controllers/ReposController');
const notFoundMiddleware = require('../middlewares/notFoundMiddleware');

router.get('/:repo/:key', getRepo)
router.all('*', notFoundMiddleware);

module.exports = router;

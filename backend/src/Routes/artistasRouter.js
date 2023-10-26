const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

const {artistas} = require('../controllers/artistasController')
router.get('/artistas', artistas);

module.exports = router;
const express = require('express');
const router = express.Router();
const musicasController = require('../controllers/musicasController');
router.get('/', musicasController.listarMusicas);
router.get('/nomemusica/:nomemusica', musicasController.buscarPorNome);
router.get('/:id', musicasController.buscarPorId);
router.post('/', musicasController.criar);
router.put('/:id', musicasController.atualizar);
router.delete('/:id', musicasController.deletar);

module.exports = router;
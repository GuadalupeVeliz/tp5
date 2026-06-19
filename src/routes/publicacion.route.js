const publicacionCtrl = require('./../controllers/publicacion.controller');

const express = require('express');

const router= express.Router();

router.get('/', publicacionCtrl.getPublicaciones);
router.post('/', publicacionCtrl.createPublicacion);
router.delete('/:id',publicacionCtrl.deletePublicacion);
router.put('/:id',publicacionCtrl.editPublicacion);
router.get('/filtrar',publicacionCtrl.filtrarPorTituloVigente);

module.exports = router;
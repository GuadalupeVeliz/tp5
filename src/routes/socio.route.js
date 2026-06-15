const socioCtrl=require('./../../src/controllers/socio.controller');

const express = require('express');
const router = express.Router();

router.get('/',socioCtrl.getSocios);
router.post('/',socioCtrl.createSocio);
router.delete('/:id',socioCtrl.deleteSocio);
router.put('/',socioCtrl.editSocio);
router.get('/activos',socioCtrl.getSociosActivos);

module.exports=router;
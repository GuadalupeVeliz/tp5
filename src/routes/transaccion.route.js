const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/',transaccionCtrl.getTransactions);
router.post('/',transaccionCtrl.createTransaction);
router.get('/:email',transaccionCtrl.getTransactionsByEmail);
router.get('/:idiomaOrigen/:idiomaDestino', transaccionCtrl.getTransactionsByLanguage);

module.exports=router;

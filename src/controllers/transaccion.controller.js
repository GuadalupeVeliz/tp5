const Transaccion = require('./../models/transaccion.model');

const transaccionCtrl={};

transaccionCtrl.getTransactions = async (req,res) => {
    /*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Obtener las transacciones'
    #swagger.description = 'Retorna la lista de transacciones.'
    #swagger.responses[200] = {
    description: 'Lista de transacciones obtenida con exito.',
    }
  */
    try{
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    }catch(error){
        res.status(400).json({
            status:'0',
            msg:'Error al obtener las transacciones'
        });
    }
};

transaccionCtrl.createTransaction = async (req,res) => {
/*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Agrega una Transaccion'
    #swagger.description = 'Agrega una transaccion a la lista de transacciones'
    #swagger.consumes = ['application/json']
    #swagger.parameters['body'] = {
    in: 'body',
    description: 'Datos de la transaccion a agregar.',
    required: true,
    schema: { $ref: '#/definitions/Transaccion' }
    }
    #swagger.responses[200] = {
    description: 'Transaccion agregado correctamente.',
    schema: { $ref: '#/definitions/Transaccion' }
    }
*/
    try{
        await Transaccion.create(req.body);
        res.json({status:'1', msg :'Transaccion Guardada'});
    }catch(error){
        res.status(400).json({status: '0', msg: 'Error procesando la operacion'});
    }
};

transaccionCtrl.getTransactionsByEmail = async (req,res) => {
    /*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Filtrar transacciones por email'
    #swagger.description = 'Retorna la lista de transacciones segun el email ingresado'
    #swagger.responses[200] = {
    description: 'Lista de transacciones con email ingresado obtenida con exito.',
    }
  */
    try{
        const transacciones = await Transaccion.findAll({
            where: {emailCliente: req.params.email}
        })
        res.json(transacciones);
    }catch(error){
        res.status(500).json({status: '0', msg: 'Error procesando la operacion'});
    }
};

transaccionCtrl.getTransactionsByLanguage = async (req,res) => {
    /*
    #swagger.tags = ['Transacciones']
    #swagger.summary = 'Filtrar transacciones por lenguaje de origen y destino.'
    #swagger.description = 'Retorna la lista de transacciones segun el origen y destino.'
    #swagger.responses[200] = {
    description: 'Lista de transacciones obtenida con exito.',
    }
  */
    try{
        const transactions = await Transaccion.findAll({
            where: {
                idiomaOrigen: req.params.idiomaOrigen,
                idiomaDestino: req.params.idiomaDestino
            }
        })
        res.json(transactions);
    }catch(error){
        res.status(500).json({status: '0', msg: 'Error procesando la operacion'});
    }
}

module.exports = transaccionCtrl;

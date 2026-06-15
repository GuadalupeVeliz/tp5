const Empleado = require('./../models/empleado.model');

const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req,res) => {
/*
    #swagger.tags = ['Empleados']
    #swagger.summary = 'Obtener todos los empleados'
    #swagger.description = 'Retorna una lista de todos los empleados.'
    #swagger.responses[200] = {
    description: 'Lista de empleados obtenida con éxito.',
 }
*/
    try{
        const empleados = await Empleado.findAll();
        res.json(empleados);
    }catch(error){
        res.status(500).json({status: '0', msg: 'Error al obtener los empelados'});
    }
};

empleadoCtrl.getEmpleado = async (req,res) => {
/*
    #swagger.tags = ['Empleados']
    #swagger.summary = 'Obtener empleado por su id'
    #swagger.description = 'Retorna un empleado.'
    #swagger.responses[200] = {
    description: 'Empleado obtenido con éxito.',
 }
*/
    try{
        const empleado = await Empleado.findByPk(req.params.id);
        if (!empleado){
            return res.status(404).json({ status: '0', msg: 'Empleado no encontrado' });
        }
        res.json(empleado);
    }catch(error){
        res.status(500).json({ status: '0', msg: 'Error al obtener el empleado.' });
    }
}

empleadoCtrl.createEmpleado = async (req, res) => {
  /*
 #swagger.tags = ['Empleados']
 #swagger.summary = 'Agrega un empleado'
 #swagger.description = 'Agrega un empleado a la lista de empleados'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos del empleado a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Empleado' }
 }
 #swagger.responses[200] = {
 description: 'Empleado agregado correctamente.',
 schema: { $ref: '#/definitions/Empleado' }
 }
 */
  try {
    await Empleado.create(req.body);
    res.json({ status: "1", msg: "´Empleado Guardado" });
  } catch (error) {
    res.status(400).json({ status: "0", msg: "Error Procesando operacion" });
  }
};

module.exports= empleadoCtrl;
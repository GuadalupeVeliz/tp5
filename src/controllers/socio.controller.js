const Socio = require("./../models/socio.model");

const socioCtrl = {};

socioCtrl.getSocios = async (req, res) => {
  /*
 #swagger.tags = ['Socios']
 #swagger.summary = 'Obtener todos los socios'
 #swagger.description = 'Retorna una lista de todos los socios.'
 #swagger.responses[200] = {
 description: 'Lista de socios obtenida con éxito.',
 }
 */
  try {
    const socios = await Socio.findAll();
    res.json(socios);
  } catch (error) {
    res.status(500).json({
      status: "0",
      msg: "Error al obtener los socios",
    });
  }
};

socioCtrl.createSocio = async (req, res) => {
  /*
 #swagger.tags = ['Socios']
 #swagger.summary = 'Agrega un socio'
 #swagger.description = 'Agrega un socio a la lista de socios'
 #swagger.consumes = ['application/json']
 #swagger.parameters['body'] = {
 in: 'body',
 description: 'Datos del socio a agregar.',
 required: true,
 schema: { $ref: '#/definitions/Socio' }
 }
 #swagger.responses[200] = {
 description: 'Socio agregado correctamente.',
 schema: { $ref: '#/definitions/Socio' }
 }
 */
  try {
    await Socio.create(req.body);
    res.json({ status: "1", msg: "´Socio Guardado" });
  } catch (error) {
    res.status(400).json({ status: "0", msg: "Error Procesando operacion" });
  }
};

socioCtrl.editSocio = async (req, res) => {
  /*
    #swagger.tags = ['Socios']
    #swagger.summary = 'Actualizar un Socio'
    #swagger.description = 'Actualiza un socio de la lista de Socios.'
    #swagger.responses[200] = {
    description: 'Socio actualizado con éxito.',
    }
  */
  try {
    await Socio.update(req.body, {
      where: { id: req.body.id },
    });
    res.json({ status: "1", msg: "Socio Actualizado" });
  } catch (error) {
    res.status(400).json({ status: "0", msg: "Error procesando la operacion" });
  }
};

socioCtrl.deleteSocio = async (req,res) => {
  /*
    #swagger.tags = ['Socios']
    #swagger.summary = 'Eliminar un Socio'
    #swagger.description = 'Elimina un socio de la lista de Socios.'
    #swagger.responses[200] = {
    description: 'Socio eliminado con éxito.',
    }
  */
  try{
    await Socio.destroy({
      where: {id: req.params.id}
    })
    res.json({status:'1', msg: 'Socio eliminado'});
  }catch(error){
    res.status(400).json({status:'0',msg: 'Error procesando la operacion'});
  }
};

socioCtrl.getSociosActivos = async (req,res) => {
  /*
    #swagger.tags = ['Socios']
    #swagger.summary = 'Filtrar socios activos'
    #swagger.description = 'Retorna la lista de socios activos.'
    #swagger.responses[200] = {
    description: 'Lista de socios activos obtenida con exito.',
    }
  */
  try{
    const socios = await Socio.findAll({
      where :{ activo : true}
    })
    res.json(socios);
  }catch(error){
    res.status(500).json({status:'0', msg: 'Error procesando la operacion'});
  }
}

module.exports = socioCtrl;

const Publicacion=require('./../models/publicacion.model');
const Empleado = require('./../models/empleado.model');

const publicacionCtrl= {};

publicacionCtrl.createPublicacion = async (req, res) => {
    try{
        await Publicacion.create(req.body);
        res.json({status:'1', msg: 'Publicacion registrada'});
    }catch(error){
        res.status(400).json({status: '0', msg:'Error procesando la operacion'});
    }
}

publicacionCtrl.getPublicaciones = async (req,res) => {
    try{
        const publicaciones = await Publicacion.findAll({
            attributes: {exclude :['createdAt','updatedAt']},
            include: [{ 
                model: Empleado , as : 'empleado',
                attributes: {exclude :['createdAt','updatedAt']}
            }]
        });
        res.json(publicaciones);
    }catch(error){
        console.log(error);
        res.status(500).json({status: '0', msg:'Error procesando la operacion'});
    }
}

publicacionCtrl.deletePublicacion = async (req,res) => {
    try{
      await Publicacion.destroy({
        where: {id: req.params.id}
    });
    res.json({status:'1', msg:'Publicacion eliminada con exito.'});
    }catch(error){
        res.status(400).json({status: '0', msg:'Error procesando la operacion'});
    }
}

publicacionCtrl.editPublicacion = async (req,res) => {
    try{
        await Publicacion.update(req.body,{
            where: {id: req.params.id}          
        })
        res.json({status:'1', msg:'Publicacion Actualizada'});
    }catch(error){
        res.status(400).json({status: '0', msg:'Error procesando la operacion'});
    }
}

publicacionCtrl.filtrarPorTituloVigente= async (req,res) => {
    try{
        const {Op} = require('sequelize');
        const {titulo,vigente} = req.query;
        const publicaciones = await Publicacion.findAll({
            where :{
                titulo: {[Op.like]: `%${titulo}%`},
                vigente: vigente
            }
        });
        res.json(publicaciones);
    }catch(error){
        res.status(400).json({status: '0', msg:'Error procesando la operacion'});
    }
}

module.exports = publicacionCtrl;
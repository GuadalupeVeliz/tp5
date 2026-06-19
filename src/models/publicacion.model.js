const {DataTypes} = require('sequelize');

const sequelize = require('./../../config/database');
const Empleado = require('./empleado.model');

const Publicacion = sequelize.define('Publicacion',{
    titulo: {type: DataTypes.STRING, allowNull:false},
    contenido: {type: DataTypes.STRING,allowNull:false},
    imagenAsociada: {type: DataTypes.STRING, allowNull:false},
    fechaPulicacion: {type: DataTypes.STRING, allowNull:false},
    vigente: {type: DataTypes.BOOLEAN, allowNull:false}
},
{
    tableName: 'publicaciones',
    timestamps: true
});

Publicacion.belongsTo(Empleado, {
    foreignKey: {
        name: 'empleadoId',
        allowNull:false
    },
    as: 'empleado'
});

module.exports = Publicacion;
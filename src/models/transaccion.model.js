const {DataTypes} = require('sequelize');

const sequelize = require ('./../../config/database.js');

const Transaccion = sequelize.define('Transaccion',{
    idiomaOrigen: {type: DataTypes.STRING, allowNull: false},
    textoOrigen: {type: DataTypes.STRING, allowNull: false},
    idiomaDestino: {type: DataTypes.STRING, allowNull: false},
    textoDestino: {type: DataTypes.STRING, allowNull:false},
    emailCliente: {type: DataTypes.STRING, allowNull:false}
}
,{
    tableName: 'transacciones',
    timestamps: true
});

module.exports=Transaccion;
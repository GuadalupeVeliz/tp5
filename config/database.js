const {Sequelize} =require('sequelize');

const sequelize = new Sequelize('tpweb','postgres','web2026',
    {
        host: 'localhost',
        dialect : 'postgres',
        logging : false
    }
);

sequelize.authenticate()
.then( () => console.log('DB is connected to PostgreSQL'))
.catch( error => console.log ( 'Error al conectar a PostgreSQL:', error) );

module.exports= sequelize;
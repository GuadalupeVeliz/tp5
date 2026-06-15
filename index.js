const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');

var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

const swaggerUi=require('swagger-ui-express');
const swaggerFile=require('./swagger_output.json');

app.use('/api/socio',require('./src/routes/socio.route'));
app.use('/api/transacciones', require('./src/routes/transaccion.route'))
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.set('port', process.env.PORT || 3000);

sequelize.sync({force : false })
.then( () => {console.log('Tablas de PostgreSQL Sincronizadas')
    app.listen(app.get('port'), () => { console.log('Server started on port', app.get('port'))});
})
.catch( error => console.error('No se pudo iniciar el servidor debido a un error en la BD:', err));


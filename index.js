import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express()

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

//Definir el puerto
const port = process.env.Port || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Obtener ano actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    next();
})

//Agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true}));

//Definir carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);

//Puerto y host para la app
// const port = 

app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
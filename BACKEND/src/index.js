const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const prestamom = require('./prestamo')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection ready');

        res.json({
            message: 'Demo API'
        })
    } catch (error) {
        console.log('db error');
    }
})

app.get('/allPrestamos', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        const Prestamo = db.sequelize.define('Prestamo', prestamom);
        const prestamos = await Prestamo.findAll();

        res.json({
            data: prestamos
        })
    } catch (error) {
        console.log('db error', error);
    }
})

app.post('/prestamos', async (req, res) => {
    try {
        await db.sequelize.authenticate();

        console.log(req.body)

        const { nombre, dpi, monto, cuotas} = req.body;
        const Prestamo = db.sequelize.define('Prestamo', prestamom);
        const newPrestamo = await Prestamo.create({nombre, dpi, monto, cuotas});

        res.status(200).json({"message": "dato insertado", "prestamo": newPrestamo});
    } catch (error) {
        console.log(error)
        res.status(400).json({"message": "error insertando"});
    }
})

app.listen(8093, () => { console.log("Running Server")});
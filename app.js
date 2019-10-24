const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMessaje = require('./configMensaje');

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    configMessaje(req.body);
    res.status(200).send();
})
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo')
});
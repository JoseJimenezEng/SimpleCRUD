const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const personaRoutes = require('./routes/personaRoutes');
const cors = require('cors');  

const app = express();

app.use(cors({
  origin: 'https://clientcrud.netlify.app'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/personas', personaRoutes);

app.listen(process.env.PORT, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
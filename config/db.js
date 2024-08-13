const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado'))
  .catch((error) => console.error(process.env.DB_URI + " ", error));
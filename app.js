const express = require('express');
const songroutes = require('./src/routes/song.routes');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',songroutes);


module.exports = app;
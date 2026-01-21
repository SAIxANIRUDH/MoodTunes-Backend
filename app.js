// app.js
const express = require('express');
const cors = require('cors');
const songRoutes = require('./src/routes/song.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.use('/api/songs', songRoutes);

module.exports = app;

require('dotenv').config();
const app = require('../app');
const connectDB = require('./db/db');

connectDB();

app.get('/', (req, res) => {
  res.send('Server is running on port 5000');
});
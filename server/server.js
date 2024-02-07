require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoiceRoutes')

const app = express()
const port = 3000

app.use(cors());

app.use(express.json());
// app.use('/invoice', invoiceRoutes);




mongoose.connect(process.env.mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
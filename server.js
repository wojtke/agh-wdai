require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8080;

const routesMenu = require('./api/routes/menu');
const routesUser =  require('./api/routes/users');


//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(cookieParser());

app.use('/api', routesMenu);
app.use('/api', routesUser);

app.use(morgan('tiny'));



app.listen(PORT, console.log(`Server is starting at ${PORT}`));

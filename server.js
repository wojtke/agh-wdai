require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8080;

const routesMenu = require('./api/routes/menu');
const routesUser =  require('./api/routes/users');
const routesCart = require('./api/routes/cart');
const routesBan = require('./api/routes/bans');
const routesHistory = require('./api/routes/history');
const routesReview = require('./api/routes/reviews');


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

app.use(cookieParser());

app.use('/api', routesMenu);
app.use('/api', routesUser);
app.use('/api', routesCart);
app.use('/api', routesBan);
app.use('/api', routesHistory);
app.use('/api', routesReview);

app.use(morgan('tiny'));



app.listen(PORT, console.log(`Server is starting at ${PORT}`));

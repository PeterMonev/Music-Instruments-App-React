const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()

const cors = require('./src/middlewares/cors');
const auth = require('./src/middlewares/auth');
const instrumentController = require('./src/controllers/instrumentcontroller');
const usersController = require('./src/controllers/usersController');

async function start() {

    try {
  
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect(  process.env.MONGODB_URI , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });


        console.log('DataBase Ready');
    } catch (err) {
        console.log(err);
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use('/data/instrument', instrumentController);
    app.use('/users', usersController);
    app.use('/users/:id', usersController);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();
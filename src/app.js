//const express = require('express');
//const routes = require('./routes');

import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.tlwqnbr.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}

//module.exports = new App().server;
export default new App().server;
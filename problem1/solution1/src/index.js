
const express  = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index');

//const {ApiController} = require('')

const setupAndStartServer = async () => {

    // Create an express object
    const app = express();

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use('/api', ApiRoutes);

    app.listen(3000 , async() => {
        console.log("server is started "); 
    });
};

setupAndStartServer();
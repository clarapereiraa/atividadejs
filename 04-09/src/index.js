const express = require('express')
const router = express.Router();
const { checkPar, checkImpar } = require('./controllerNumbers');

class AppController{
    constructor(){
        
        this.express = express();
        
        this.middlewares();
       
        this.routes();
    }
    middlewares(){
      
        this.express.use(express.json());
    }
   
    routes(){
        const apiRoutes = require('./routes/apiRoutes');
        this.express.use('/controlenumeros/api/v1/',apiRoutes);
       
        this.express.get('/health/',(req,res) => 
            {res.send({ status: "OK" });
    });
    }
}

module.exports = new AppController().express;
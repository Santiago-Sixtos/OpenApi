const express = require('express');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();

const port = process.env.PORT || 8802;
const  cors  = require ('cors');
app.use(cors());
 
const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API Empleados',
    version: '1.0.0',
    },
    servers:[
    { url: "http://localhost: ${port}" }
    ],
    },
    apis: [`${path.join(__dirname,"Index.js")}`],
    };

/**
* @swagger
* /empleado:
*   get:
*     description: Consultar todos los empleados
*     responses:
*       200:
*         description: Rregresa un arreglo de objetos con los empleados.
*/

/**
* @swagger
* /empleado:
*   post:
*     description: Alta de Empleados
*     responses:
*       200:
*         description: Regresa un objeto con el resultado de la operacion de alta
*/

app.get('/',(req,res)=>{
    res.send('Server Express contestando a peticion get')
})

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.get("/api-spec", (req,res)=>{ 
    res.json(swaggerDocs); 
})

app.listen(port,()=>{
    console.log('http://localhost: ${port}')
})
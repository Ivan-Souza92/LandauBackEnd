const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//rotas
const categoriaRoutes = require('./routes/categorias');
const produtoRoutes = require('./routes/produtos');

app.use('/categorias', categoriaRoutes);
app.use('/produtos', produtoRoutes);


app.listen(3000, ()=>{
    console.log('Servidor on');
})

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const cors = require('cors');
// criando serviço express 
const app = express();
// aplicando config dentro de express - // Config básicas para criação de APIS - geral
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json());
app.use(cors())
 // bloqueando tentativas de outros sites para nao acessar nossa API
 // só vai acessar a API quem estiver definido abaixo
var corsOptions = {
    origin: "http:\\exemplo.com",
    optionsSucessStatus: 1200
}

var allowlist = ['http://exemplo1.com', 'http://exemplo2.com']
var corsOptionsDelegate = function(req, callback)
{
    var corsOptions;
    if(allowlist.indexOf(req.header('Origin')) !== -1)
    {
        corsOptions = {origin: true}

    }
    else{
        corsOptions  = {origin: true}
    }
    callback(null, corsOptions);
}

// Config porta para Armazenar o serviço de API 

app.listen(5000,() => console.log('Servidor ligdo na porta 5000 - http://localhost:5000'))

// Simular banco de dados 

const data = [];

app.get('/',(req, res)=> {
    return res.json({data})
})

// ADCIONAR
app.post('/add',(req, res) => {
    const result = req.body;

    if(!result){
        return res.status(400).end();
    }
    data.push(result);
    return res.json({result})
}
)
//http://localhost:5000/addCors
app.post('/addCors', cors(corsOptions), (req, res) => {
    const result = req.body;

    if(!result){
        return res.status(400).end();
    }
    data.push(result);
    return res.json({result})
}
)
//http://localhost:5000/addListCors
app.post('/addListCors', cors(corsOptionsDelegate), (req, res) => {
    const result = req.body;

    if(!result){
        return res.status(400).end();
    }
    data.push(result);
    return res.json({result})
}
)

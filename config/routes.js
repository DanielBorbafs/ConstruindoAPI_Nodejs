const express = require('express')
const routes = express.Router()
module.exports = routes

let db = [
    {'1': { Nome: 'Cliente1', idade: '20'}},
    {'2': { Nome: 'Cliente2', idade: '2'}},
    {'3': { Nome: 'Cliente3', idade: '25'}},
]
//só a barra significa ir na pagina inicial
// BUSCAR DADOS
routes.get('/',(req,res) => {
    return res.json(db)
})


//Inserir Dados
routes.post('/add',(req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})

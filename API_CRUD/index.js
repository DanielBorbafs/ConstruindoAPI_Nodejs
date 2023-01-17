(async() => 
{
    const database = require('./db');
    const produto = require('./produto')

    await database.sync();

    await produto.create(
        {
            Nome: "Primeiro teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Segundo teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Terceiro teste",
            DataCriacao: Date()
        }
    )
    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo Alterado"
    await alterProd.save();

    produto.destroy({where : {id: 1 }});

    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findALLProd = await produto.findALL();
    console.log(findALLProd)



})();

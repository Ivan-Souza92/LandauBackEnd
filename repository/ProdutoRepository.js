const Produto = require('../models/Produto');

exports.create = async (data) => {

        const produto = new Produto(); 

        produto.nome = data.nome;
        produto.descricao = data.descricao;
        produto.preco = data.preco;
        produto.categoria_id = data.categoria_id;

        await produto.save();
}

exports.get = async () => {

    const res =  await Produto.findAll({
        attributes: ['nome', 'preco', 'descricao', 'categoria_id']
    });

    return res;  
}

exports.update = async (id,data) => {

    await Produto.update({
        nome: data.nome,
        preco: data.preco,
        descricao: data.descricao,
        categoria_id: data.categoria_id
     },
     {
         where: {id: id}
     })
}

exports.delete = async (id) => {

    await Produto.destroy({
        where:{id: id}
    })
}

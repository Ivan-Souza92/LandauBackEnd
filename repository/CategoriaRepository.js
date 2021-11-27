const Categoria = require("../models/Categoria");

exports.create = async (data) => {

    const categoria = new Categoria(); 

    categoria.nome = data.nome;
    await categoria.save();
}

exports.get = async () => {

    const res =  await Categoria.findAll({
        attributes: ['nome']
    });

    return res;  
}

exports.update = async (id,data) => {

    await Categoria.update({
        nome: data.nome,
        preco: data.preco,
        descricao: data.descricao
     },
     {
         where: {id: id}
     })
}

exports.delete = async (id) => {

    await Categoria.destroy({
        where:{id: id}
    })
}
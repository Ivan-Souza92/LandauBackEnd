const repository = require('../repository/ProdutoRepository');

exports.post = async (req,res) => {

    try {
        await repository.create(req.body);
        res.status(200).json({message: 'Produto cadastrado com sucesso!'});
        
    } catch (e) {
        res.status(400).json({
            message: 'Falha ao processar a sua requisição!!',
            error: e
        });
    }
}

exports.get = async (req,res) => {

    try {
        var data = await repository.get();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar a sua requisição',
            error: error   
        });
    }
}

exports.put = async (req,res) => {

    try {

        await repository.update(req.params.id ,req.body);
        res.status(200).send({message: 'Produto atualizado com sucesso!'})
        
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar a sua requisição',
            error: error  
        })
    }
}

exports.delete = async (req,res) => {

    try {
        await repository.delete(req.params.id);
        res.status(200).send({message: 'Produto deletado com sucesso!'})
        
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar a sua requisição',
            error: error  
        })
    }
}
const repository = require('../repository/CategoriaRepository');

exports.post = async (req,res) =>{

    try {
        await repository.create(req.body);
        res.status(200).send({message:'Categoria criado com sucesso'})
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar a sua requisição',
            error: e
        })
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
        res.status(201).send({message: 'Categoria atualizada com sucesso!'})
        
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
        res.status(201).send({message: 'Categoria deletada com sucesso!'})
        
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar a sua requisição',
            error: error  
        })
    }
}


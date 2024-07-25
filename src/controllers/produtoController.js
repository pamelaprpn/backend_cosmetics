import produto from "../models/Produto.js";

class ProdutoController {

    static async listarProdutos (req, res){
        try{
            const listaProdutos = await produto.find({});
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'content-type');
            res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE, PATCH');
            res.status(200).json(listaProdutos);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
        
    };

    static async listarProdutosPorId (req, res){
        try{
            const id = req.params.id;
            const produtoFind = await produto.findById(id);
            res.status(200).json(produtoFind);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
        
    };


    static async cadastraProduto (req, res){
        try {
            const novoProduto = await produto.create(req.body);
            res.status(201).json({message: "Criado com sucesso", produto: novoProduto});
        }catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar produto`});
        }
        
    };

    static async atualizarProduto (req, res){
        try{
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Produto atualizado"});
        }catch (erro){
            res.status(500).json({message: `${erro.message} - Falha no update`});
        }
        
    };

    static async deletarProduto (req, res){
        try{
            const id = req.params.id;
            await produto.findByIdAndDelete(id);
            res.status(200).json({ message: "Produto excluído"});
        }catch (erro){
            res.status(500).json({message: `${erro.message} - Falha na exclusão`});
        }
        
    };

    


};

export default ProdutoController;
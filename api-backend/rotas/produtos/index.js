const TabelaProdutos = require('./TabelaProdutos');
const roteador = require ('express').Router();
const Produto = require('./Produto');


roteador.get('/', async (req, res) => {
    const products = await TabelaProdutos.listar();
    res.send(
        JSON.stringify(products)
    );
});

roteador.post('/', async (req,res) => {
    const dadosRecebidos = req.body
    const product = new Produto(dadosRecebidos)
    await product.criar()
    res.send(
        JSON.stringify(product)
    )
});

roteador.get('/:id', async (req, res) => {
    
    try{
        const id = req.params.id
        const productId = new Produto({id:id})
        await productId.carregar()
        res.send(
        JSON.stringify(productId)
        )
    }catch(erro){
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }   

})


module.exports = roteador;
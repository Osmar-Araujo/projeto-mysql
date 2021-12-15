const TabelaProduto = require('./TabelaProdutos');

class Produto{
    constructor({ id, name, category, image, price, countInStock, brand,rating, numReviews,description }){
        this.id = id
        this.name = name
        this.category = category
        this.image = image
        this.price = price
        this.countInStock = countInStock
        this.brand = brand
        this.rating = rating
        this.numReviews = numReviews
        this.description = description
    }

    async criar(){
        const resultado = await TabelaProduto.inserir({
            name: this.name,
            category: this.category,
            image: this.image,
            price: this.price,
            countInStock: this.countInStock,
            brand: this.brand,
            rating: this.rating,
            numReviews: this.numReviews,
            description: this.description
        })

        this.id = resultado.id
    }

    async carregar(){
        const prodFound = await TabelaProduto.buscaPorId(this.id)
        this.name = prodFound.name
        this.category = prodFound.category
        this.image = prodFound.image
        this.price = prodFound.price
        this.countInStock = prodFound.countInStock
        this.brand = prodFound.brand
        this.rating = prodFound.rating
        this.numReviews = prodFound.numReviews
        this.description = prodFound.description
    }
}

module.exports = Produto;
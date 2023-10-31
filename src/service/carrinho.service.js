const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhoService = () => {
    return Carrinho.find();
}

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
}

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
} 

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}

module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
}
const crypto = require('crypto');
const connection = require('../../src/database/connection');

module.exports = {
   async index(request, response){
      const products = [
          {
              "products": "sabao",
              "price": 2.90,
              "categorie": "limpeza"
          },
          {
              "product": "Camiseta Code",
              "price": 30.90,
              "categorie": "Roupa"
          }
      ]
      return response.json(products)
    },
    async create(request, response) {
       
    }
}
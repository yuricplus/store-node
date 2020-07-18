const crypto = require('crypto');
const connection = require('../../src/database/connection');

module.exports = {
   async index(request, response){
      const products = await connection('products').select('*');
      return response.json(products)
    },
    async create(request, response) {
       
    }
}
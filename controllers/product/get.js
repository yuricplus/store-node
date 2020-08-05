const crypto = require('crypto');
const connection = require('../../src/database/connection');

module.exports = {
   async index(request, response){
      try {
         const products = await connection('products').select('*');
         return response.json(products)
      } catch (error) {
         return response.status(400).json({error: "Try again later"})
      }
    },
    async create(request, response) {
       
    }
}
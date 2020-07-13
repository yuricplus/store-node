const connection = require('../../src/database/connection');
const { create } = require('./get');

module.exports = {
    async create(request, response){
        const { name, id, price, promotion, price_promotion, categorie } = request.body;
        
    }
}
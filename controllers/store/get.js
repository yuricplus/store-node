const crypto = require('crypto')
const connection = require('../../src/database/connection');
const _ = require('loadsh')

module.exports = {
    async index(request, response){
        const store = await connection('store_list').select("*");
        
        if(request.query.password){
            return response.status(400).json({error: "Operation Denied"})
        }
        
        if(request.query.categorie){
            const request_filter = Object.getOwnPropertyNames(request.query).toString()
            
            const store_filter = await connection('store_list').where(`${request_filter}`, request.query[request_filter]).select('*')
            
            return response.json({store_filter})
        }

         return response.json({store})
    }
}
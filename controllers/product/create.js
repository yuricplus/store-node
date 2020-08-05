const connection = require('../../src/database/connection');
const nodemailer = require('nodemailer');
const crypto = require('crypto');


const create =  async function(request, response){
    const { product_name, product_price, product_promotion, product_price_promotion, product_categorie } = request.body;

    try {
        const product_id = crypto.randomBytes(4).toString('HEX');

        const auth = await connection('store_db').where('id', request.headers.auth).first();

        if(!auth){
            return response.status(400).json({error: "Operation Denied"})
        }

        const products = await connection('products').insert(
            {
                product_name, 
                product_id, 
                product_price, 
                product_price_promotion, 
                product_categorie, 
                product_promotion
            }
        )
        return response.status(200).json(products)
    } catch (error) {
        return response.status(400).json({error: "Try again later"})
    }
    
}

module.exports = {create}
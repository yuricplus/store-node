const { index } = require("./get");
const { json } = require("body-parser");
const connection = require('../../src/database/connection');
const { select } = require("../../src/database/connection");

module.exports = {
    async index(request, response){
        const { email, password } = request.body;

        const login = await connection("store_db").where('email', email).select('*').where('password', password);

        console.log(login)
        
        return response.json({email})
    }
}
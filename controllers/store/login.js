const { json } = require("body-parser");
const connection = require('../../src/database/connection');
const { select } = require("../../src/database/connection");

const index = async function(request, response){
    const { email, password } = request.body;

        const login = await connection("store_db").where('email', email).select('*').where('password', password);

        if(login.length === 1){
            const id = login.id;

            return response.json({id})
        } else {
            const error = "Verifique os dados de login"

            return response.json({error});
        }

}

module.exports = {index}
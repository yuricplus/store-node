const crypto = require('crypto')
const connection = require('../../src/database/connection');

module.exports = {
    async create(request, response){
       const { name, email, whatsapp, categorie, city, uf, password } = request.body;

       const id = crypto.randomBytes(4).toString('HEX');

       const emailDb = await connection('store_db').select("*").where("email", email);

       console.log(emailDb)

       if(emailDb !== []){
           let error = "Já existe uma loja cadastrado com esse email"

           console.log(error)

           return response.json({error});
       };

       await connection('store_db').insert({
           id,
           name,
           email,
           password,
           whatsapp,
           categorie,
           city,
           uf
       })

       await connection('store_list').insert({
        name,
        email,
        whatsapp,
        categorie,
        city,
        uf
       })
      
       const store = await connection('store_db').select("*");
       

       return response.json({id})
    }
}
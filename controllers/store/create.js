const crypto = require('crypto')
const connection = require('../../src/database/connection');
const sendEmail = require('../service/mailSend');

const create = async function(request, response){
    const { name, email, whatsapp, categorie, city, uf, password } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    const emailDb = await connection('store_db').select("*").where("email", email);

    console.log(emailDb)

    if(emailDb.length > 0){
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
    const text = "Conta Criada com sucesso!"
    const subject = "OBA";
    const html = "<h1>Cadastro realizado com sucesso</h1><br><h4>Seja bem vindo a nossa plataforma</h4>"

    console.log(request.email)

    
    sendEmail(email, text, subject, html);
    return response.json({id})
 }

module.exports = {create}
const crypto = require('crypto')
const connection = require('../../src/database/connection');
const sendEmail = require('../service/mailSend');

const create = async function(request, response){
    const { name, email, whatsapp, categorie, city, uf, password } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    const emailDb = await connection('store_db').select("*").where("email", email);


    if(emailDb.length > 0){
        let error = "Já existe uma loja cadastrado com esse email"

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
    
    emailConfig(name, email)
    return response.json({id})
}

const emailConfig = (name, email) => {
   const text = `Seja bem vindo ${name}`;
   const subject = "Sua conta foi criada com sucesso!";

   const html = `<div style="text-align:center;"><h1>Bem vindo ${name}</h1><p>Pronto para anunciar sua loja?</p><span>Clique <a>aqui</a> para adicionar o seu primeiro produto a nossa loja.</span></div>`

   sendEmail(email, text, subject, html);
}

module.exports = {create}
const connection = require('../../src/database/connection')

module.exports = {
    async delete(request, response){
        const { id, email } = request.body;

        await connection('store_db').where('id', id).delete();
        await connection('store_list').where('email', email).delete();

        let success = "Loja apagada com sucesso";

        return response.json({success});
    }
}
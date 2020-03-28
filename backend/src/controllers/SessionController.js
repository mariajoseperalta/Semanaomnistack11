const connection = require('../database/conection');

module.exports = {
    async create(request, response){
        //Verifica se a ONG realmente existe. Vem através do campo
        const { id } = request.body;

        //Busca uma ONG do banco de dados 
        const ong = await connection ('ongs')
        //Procura pelo id da Ong
        .where('id', id)
        //Seleciona pelo nome, única informação que eu quero.
        .select('name')
        //Retorna somente uma única ONG 
        .first();

        if (!ong){
            return response.status(400).json({error: 'No ONG found with this ID.'});
        }
        return response.json(ong);
    }
}
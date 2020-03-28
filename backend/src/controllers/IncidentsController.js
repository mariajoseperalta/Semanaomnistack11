// request.headers; - Traz dados da autenticação, localização, idioms do usuário

const connection = require('../database/conection');

module.exports = {
    async index (request, response){
        const  {page = 1} = request.query;

        //contador
        const [count] = await connection('incidents').count();
            

        const incidentes = await connection('incidents')
        //Sao 5 registros por página
        //Relacionar dados de duas tabelas
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        //Eu quero todos os dados do incidente, mas a Ong eu seleciono quais campos eu quero
        .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(incidentes);
    },

    async create (request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        // O primeiro valor do array vai ser armazenado na variável "id".
        const [id] = await connection('incidents').insert({
            title,
            description,
            value, 
            ong_id,
        });

        return response.json({ id });
    },
    // Valida se a pessoa que esta querendo deletar pertence a ong deletada.Para não deletar algo de outra ONG
    async delete (request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
    const incident = await connection('incidents')
        // onde esse id é igual ao id.
            .where('id', id)
            .select ('ong_id')
            //retorna apenas um resultado
            .first();

        if (incident.ong_id != ong_id ){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }
        

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

};  
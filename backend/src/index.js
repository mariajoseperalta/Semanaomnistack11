
const express = require('express');
const cors = require('cors');
//Pede para ir lá no corpo da requisição e converter Json em objeto de JavaScript!
//./ quer dizer que estou passando um arquivo e não um pacote como o exemplo do express.
const routes = require ('./routes');

const app = express();

app.use(cors({
   origin:'http://localhost:3000'
   }));
app.use(express.json());
app.use(routes);




/**
 * Rotas / Recurso
 * Métodos HTTP
 * GET: Buscar uma informação/recurso do backend;
 * POST: Criar uma informação no Backend;
 * PUT: Alterar uma informação no Backend;
 * DELETE: Deletar uma informação no Backend;
 * 
 */

/**
 * Tipos de parâmetros:
 * A requisição é o que está no Insomnia!
 * Request: Guarda todos os dados da requisição do usuário;
 * Response: Retornar uma resposta para o usuário;
 * Query Parms:Parâmetros nomeados enviados na rota após o "?" (servem para: filtros, paginação).Exemplo abaixo:
 * -const params = request.query; console.log(params);  
 * Route Parms: Parâmetros utilizados para identificar recursos. Exemplo abaixo:
 * -Para procurar uma pessoa em específico faço: get('/users/:id'), neste caso faço const params = request.params;
    console.log(params);
 * Request Body(formato JSON): Corpo da requisição, utilizado para criar ou alterar recursos. Exemplo:
    app.post('/users', (request, response) =>
    const body= request.body;
    console.log(body);

    Nodemon (npm install nodemon -D) é usado enquando está sendo realizado a aplicação
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB...
 * Driver: SELECT * FROM users
 * Query Builder: table ('users').select('*).where() ---- MELHOR 
 * npx instala um pacote ao invés de executar.
 */



app.listen(3333);



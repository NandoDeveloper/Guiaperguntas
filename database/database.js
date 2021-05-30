const Sequelize = require('sequelize'); //TODO impotando o Sequelize


const connection = new Sequelize('guiaperguntas', 'root', 'nando123',{ // TODO criando conexão do bando de dados com o Sequelize
     host: 'localhost',
     dialect: 'mysql',
     define:  {
        timestamps: true,
     },
});

module.exports = connection; //TODO exportando a conexão do Banco de Dados

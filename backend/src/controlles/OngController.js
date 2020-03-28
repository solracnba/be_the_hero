const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    //Rota para Listar Ons cadastradas no Banco de Dados

    async index(request, response) {

        const ongs = await connection('ongs').select('*');

        return response.json(ongs);

    },

    //Rota para adicionar uma Ong no Banco de Dados

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });


    }
};
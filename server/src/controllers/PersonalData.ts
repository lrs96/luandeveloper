import {Request, Response } from 'express';
import knex from '../database/connection';

class PersonalData {
    async index(req: Request, res: Response) {
        try {
            const dados = await knex('personal_data').select('*');
            const serializedDados = dados.map(dado => {
                return{
                    name: dado.name,
                    lastname: dado.lastname,
                    age: dado.age,
                    email: dado.email,
                    'social': {
                        'facebook': 'https://www.facebook.com/luanlrs96',
                        'linkedin': 'https://www.linkedin.com/in/luanlrs/',
                        'instagram': 'https://www.instagram.com/luanrodrigues.py/',
                        'github': 'https://github.com/lrs96'
                    }
                }
            })
            return res.json(serializedDados)
        }
        catch(e) {
            console.log('Não foi possível listar os dados')
            return res.json({
                message: "Não foi possível listar os dados",
                error: `${e}`
            })
        }
        
        return res.json({message: "Ainda não existem dados cadastrados"})
    }
}

export default PersonalData;
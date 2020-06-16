import {Request, Response } from 'express';
import knex from '../database/connection';

class PersonalData {
    async index(req: Request, res: Response) {
        try {
            const dados = await knex('personal_data').select('*');
            const socials = await knex('social_media').select('*');
            const social_media = socials.map(social_item => {
                return {
                    id: social_item.id,
                    social: social_item.social,
                    social_url: social_item.social_url
                }
            });
            const serializedDados = dados.map(dado => {
                return{
                    name: dado.name,
                    lastname: dado.lastname,
                    age: dado.age,
                    email: dado.email,
                    social_media: {
                            "facebook": "https://www.facebook.com/luanlrs96",
                            "linkedin": "https://www.linkedin.com/in/luanlrs/",
                            "instagram": "https://www.instagram.com/luanrodrigues.py/",
                            "github": "https://github.com/lrs96",
                            "behance": "https://www.behance.net/luandeveloper",
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
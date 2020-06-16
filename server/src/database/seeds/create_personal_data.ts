import Knex from 'knex';

import InsertPersonalData  from './insertDados/InsertPersonalData';
import InsertSocialMedia from './insertDados/InsertSocialMedia';
import InsertVoluntterWork from './insertDados/InsertVoluntterWork';

// Instancia dos inserts;

const insertPersonalData = new InsertPersonalData();
const insertSocialMedia = new InsertSocialMedia();
const insertVoluntterWork = new InsertVoluntterWork();

export async function seed(knex: Knex){ 

    await knex('personal_data').insert([
        {
            name: "Luan",
            lastname: "Rodrigues",
            age: "23",
            email: "luanlrs96@gmail.com"
        },
    ]) 

    await knex('social_media').insert([
        {
            "social": "facebook",
            "social_url": "https://www.facebook.com/luanlrs96"
        },
        {
            "social": "linkedin",
            "social_url": "https://www.linkedin.com/in/luanlrs/"
        },
        {
            "social": "instagram",
            "social_url": "https://www.instagram.com/luanrodrigues.py/"
        },
        {
            "social": "github",
            "social_url": "https://github.com/lrs96"
        },
        {
            "social": "behance",
            "social_url": "https://www.behance.net/luandeveloper"
        }
    ]); 

    if(process.env.NODE_ENV == 'production') {
        await knex('voluntter_work').insert([
          {
              "id": 1,
              "image_url": "comite-da-hackathon-brasil.svg",
              "funcao": "Organizador",
              "name_work": "Membro do comite da Hachathon Brasil",
              "description": "Ajuda na organização de hackathon, palestras e workshops pela comunidade.",
              "site": "https://hackathonbrasil.com.br/home/"
            },
            {
              "id": 2,
              "image_url": "wordcamp-2019-luan-rodrigues.svg",
              "funcao": "Voluntário",
              "name_work": "WordCamp São Paulo 2019",
              "description": "Responsável por auxiliar os palestrantes e participantes do eventos, cuidar do tempo das palestras ou quaisquer necessidades que surgissem durante o evento.",
              "site": "https://2019.saopaulo.wordcamp.org/"
            },
            {
              "id": 3,
              "image_url": "wordcamp-2018.svg",
              "funcao": "Voluntário",
              "name_work": "WordCamp São Paulo 2018",
              "description": "Responsável por auxiliar os palestrantes e participantes do eventos, cuidar do tempo das palestras ou quaisquer necessidades que surgissem durante o evento.",
              "site": "https://2018.saopaulo.wordcamp.org/"
            }
        ]) 
    }
}
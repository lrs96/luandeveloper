import { Response, Request, text } from 'express'
import knex from '../database/connection';


class volunterWork {
    async index(req: Request, res: Response) {
        try {
            const dados = await knex('voluntter_work').select('*');
            const serializedDados = dados.map(dado => {
                return {
                    id: dado.id,
                    image_url: `http://localhost:3333/uploads/${dado.image_url}`,
                    funcao: dado.funcao,
                    name_work: dado.name_work,
                    description: dado.description,
                    site: dado.site
                }
            })
            return res.json(serializedDados);
        }
        catch {
            console.log('Não foi possível selecionar os trabalhos voluntários cadastrados')
        }

        return res.json({ message: 'Ainda não existem dados cadastrados'})
    }

    async create(req: Request, res: Response) {
        const { funcao, image_url, name_work, description, site } = req.body;

        const voluntter_work = {
            funcao, image_url, name_work, description, site
        }

        try{
            const trx = await knex.transaction()
            await trx('voluntter_work').insert(voluntter_work);
            await trx.commit()
            return res.json( {
                    message: 'cadastrado com sucesso',
                    ...voluntter_work }
                )
        }
        catch{
            return res.json({message: 'Ops, algo de errado ao tentar cadastrar o trabalho voluntário'})
        }
    }
}

export default volunterWork;
import { Request, Response } from 'express'
require('dotenv').config();

import CreateMail from './CreateMail';

const createMail = new CreateMail();

class SendMail {
    async send(req: Request, res: Response) {
        const {nome, email, telefone, mensagem } = req.body;
        createMail.create(nome, email, telefone, mensagem);
        return res.json({menssage: 'send mail'})
    }
}

export default SendMail;
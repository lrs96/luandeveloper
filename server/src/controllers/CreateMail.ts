import nodemailer from 'nodemailer';

class CreateMail {
    async create(nome: string, email: string, telefone: string, mensagem: string) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS_KEY_APPS_GMAIL
            }
        })

        let dados = {
            from: `${email}`,
            to: process.env.USER,
            subject: "Luan Developer - Contato através do site",
            html: `
                <h3>Corpo da mensagem</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Mensagem enviada:</strong></p>
                <p>${mensagem}</p>
            `
        }
        await transporter.sendMail(dados, (err, data) =>     {
            if(err) {
                console.log(`error: ${err}`)
            } else {
                console.log("E-mail enviado com sucesso", data)
            }
        })
    }
}

export default CreateMail;
import express from 'express';

const routes = express.Router();

// Controlles
import PersonalData from './controllers/PersonalData';
import VoluntterWork from './controllers/VoluntterWork';
import SendMail from './controllers/SendMail'

import upload from './upload';

const personalData = new PersonalData();
const sendMail = new SendMail();
const voluntterWork = new VoluntterWork();

routes.get('/', (req, res) => {
    return res.json({'message': 'funcionou'})
})
routes.get('/personal-data', personalData.index);
routes.get('/voluntter-work', voluntterWork.index);
routes.post('/voluntter-work', voluntterWork.create);
routes.post('/send-mail', sendMail.send);

routes.get('/upload-image',(req,res) => {
    res.sendFile('templates/index.html', { root: __dirname });
})

routes.post('/upload-image', upload.single('avatar'), (req, res) => {
    try {
        res.send('Arquivo enviado com sucesso: ' + req.file.filename)
    } catch(e) {
        console.log(e)
    }
})


export default routes;
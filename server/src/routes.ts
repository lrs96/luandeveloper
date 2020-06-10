import express from 'express';

const routes = express.Router();

// Controlles
import PersonalData from './controllers/PersonalData';
import VoluntterWork from './controllers/VoluntterWork';
import SendMail from './controllers/SendMail'

const personalData = new PersonalData();
const sendMail = new SendMail();
const voluntterWork = new VoluntterWork();

routes.get('/personal-data', personalData.index);
routes.get('/voluntter-work', voluntterWork.index);
routes.post('/voluntter-work', voluntterWork.create);
routes.post('/send-mail', sendMail.send);

export default routes;
import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
const app = express()
require('dotenv').config()

const port : string|number= process.env.PORT || 3333;

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))
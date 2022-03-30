import express from 'express';
import db from './db.connection.js';
import routes from '../routers/index.js';

db.on('error', console.log.bind(console, 'Error ao iniciar DB'));
db.once('open', console.log.bind(console, 'Conexão do DB iniciado com sucesso!'))

const app = express();

//app.use(express.json());

routes(app);

export default app;
import express from 'express';
import livrosRouter from './livrosRouter.js';
import autoresRouter from './autoresRouter.js';

const routes = app => {
    app.get('/', (req, res) => {
        res.status(200).send('Rota de teste UP')
    })
    app.use(
        express.json(),
        livrosRouter,
        autoresRouter
    )
}

export default routes;


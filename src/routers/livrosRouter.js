import express from 'express';
import LivrosController from '../controllers/LivrosController.js';

const router = express.Router();

export default router
    //.get('/', (req, res) => res.status(200).send('Rota de Teste UP'))
    .get('/livros', LivrosController.getAll)
    .get('/livros/titulo',LivrosController.getLivroPorTitulo)
    .post('/livros', LivrosController.postLivro)
    .delete('/livros', LivrosController.removeLivroPorTitulo)
    .put('/livros/:id', LivrosController.updateLivroPortitulo)
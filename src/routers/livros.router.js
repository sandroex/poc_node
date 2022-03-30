import app from '../config/app.js';
import { livros } from '../mocks/Livros.js';
//const router = app.Router();

app
    .get('/livros', (req, res) => {
        res.status(200).json(livros);
    })
    .get('/livros/:id', (req, res) => {
        const livro = buscarLivros(req.params.id);
        res.status(200).json(livros[livro]);
    })
    .post('/livros', (req, res) => {
        livros.push(req.body);
        res.status(201).send('Livro adicionado com sucesso!');
    })
    .put('/livros', (req, res) => {
        const livro = buscarLivros(req.body.id);
        livros[livro] = req.body;
        res.status(200).send('Livro modificado com sucesso!');
    })
    .delete('/livros/:id', (req, res) => {
        const livro = buscarLivros(req.params.id);
        livros.splice(livro, 1);
        res.status(203).send(`Livro ${req.params.id} deletado!`);
    });

const buscarLivros = id => livros.findIndex(livro => livro.id === Number(id));

export default app;
import Livro from '../models/Livro.js';

export default class LivrosController 
{
    static getAll = (req, res) => {
        Livro
            .find()
            .populate('autor')
            .exec((err, data) => {
                if(err) return res.status(500).send({message: `${err} - Falha ao buscar livros`})
                res.status(200).json(data);
        }) 
    }

    static getLivroPorTitulo = (req, res) => {
        let titulo = req.body.titulo;
        Livro
            .find({titulo})
            .populate('autor', 'nome')
            .exec((err, data) => {
                if(err) return res.status(500).send({message: `${err} - Falha ao buscar o título`})
                res.status(200).json(data);
        } )
    }

    static postLivro = (req, res) => {
        const livro = new Livro(req.body);
        livro.save((err) => {
            if(err) return res.status(500).send({message: `${err} - Falha ao cadastrar um livro`});
            res.status(201).json(livro.toJSON());
        })
    }

    static removeLivroPorTitulo = (req, res) => {
        const titulo = req.body.titulo;
        Livro.remove({titulo}, (err) => {
            if(err) return res.status(500).send({message: `${err} - Falha ao deleter o livro`})
            res.status(204).send('Livro deletado com sucesso');
        })
    }

    static updateLivroPortitulo = (req, res) => {
        const livro = req.body;
        Livro.findByIdAndUpdate(req.params.id, {$set: livro}, (err) => {
            if(err) return res.status(500).send({message: `${err} - Erro ao atualizar livro`})
            res.status(204).send('Livro atualizado com sucesso');
        })
    }
}
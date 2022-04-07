import Autores from '../models/Autor.js';

export default class AutoresController {

    static getAll = (req, res) => {
        Autores.find((err, data) => {
            if(err) return res.status(500).send({message: `${err} - Erro ao buscar autores`})
            res.status(200).json(data);
        });
    }

    static getPorId = (req, res) => {

        Autores.find({_id: req.params.id}, (err, data) => {
            if(err) return res.status(500).send('Autor não encontrado')
            res.status(200).json(data);
        });
    }

    static postAutor = (req, res) => {
        const autor = new Autores(req.body);
        autor.save((err) => {
            if(err) return res.status(500).send('Erro ao cadastrar autor')
            res.status(201).json(autor.toJSON());
        });
    }

    static updateAutor = (req, res) => {
        Autores.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if(err) return res.status(500).send('Erro ao atualizar autor')
            res.status(204).send('Autor atualizado com sucesso');
        });
    }

    static deleteAutor = (req, res) => {
        Autores.findByIdAndRemove(req.params.id, {}, (err) => {
            if(err) return res.status(500).send('Erro ao deletar autor')
            res.status(204).send('Autor deletado com sucesso');
        });
    }
}
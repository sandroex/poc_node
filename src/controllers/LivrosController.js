import Livro from '../models/Livro.js';

export default class LivrosController 
{
    static getAll = (req, res) => {
        Livro.find((err, data) => {
            if(err) {
                console.log(err);
                throw new Error(err);
            }
            res.status(200).json(data);
        }) 
    }
}
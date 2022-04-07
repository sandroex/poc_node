import mongoose from 'mongoose';

const LivroSchema = new mongoose.Schema({
    _id       : { type: String },
    titulo   : { type: String, required: true },
    autor    : { type: mongoose.Types.ObjectId, ref: 'Autores', required: true },
    editora  : { type: String, required: true },
    n_paginas: {type: Number }

})

const Livraria = mongoose.model('Livraria', LivroSchema);

export default Livraria;
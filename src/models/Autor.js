import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true }
},
    { versionKey: false }
)

const Autores = mongoose.model('Autores', AutorSchema);

export default Autores;
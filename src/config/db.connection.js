import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://node:node@cluster0.diiff.mongodb.net/poc-livraria');
let db = mongoose.connection;

export default db;
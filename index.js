import app from './src/config/app.js';

const port = process.env.EXPRESS_PORT|| 3000;

app.listen(port, err => {
    if (err) console.error(err);
    console.log(`Server up in ${port}`);
})
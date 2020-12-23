import express from 'express';

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000;

app.get('/', async (req, res) => {
    return res.json('Gotcha!');
});

const server = app.listen(port, err => {
    if (err) return console.log('can\'t start to services ')
    console.log(`Services listening at http://localhost:${port}`)
});

module.exports = server;

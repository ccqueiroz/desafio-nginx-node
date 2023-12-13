import express from 'express'
import './database/init.js';
import bodyParser from 'body-parser';
import { selectPeoples } from './database/selectPeoples.js';
import { insertPeople } from './database/insertPeople.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3030;

app.get('/', async (_, res) => {
    const registeredNames = await selectPeoples().then(result => result).catch(error => error);

    let listNames = '';
    registeredNames?.forEach(item => {
        listNames += `<li>${item.name}</li>`;
    });

    res.send(`
        <div>
            <h1>Full Cycle Rocks!</h1>
            <form action="/cadastrar-nome" method="post">
                <div>
                    <input type="text" name="name" placeholder="Digite seu nome" />
                    <button type="submit">Cadastrar Nome</button>
                </div>
            </form>
            <h2>Lista de Nomes Cadastrados</h2>
            <ul>
                ${listNames}
            </ul>
        </div>
    `)
});

app.post('/cadastrar-nome', async (req, res) => {
    if (!req.body.name) res.redirect('/');

    await insertPeople(req.body.name);

    res.redirect('/');
});

app.listen(PORT, () => console.log('server running, on port: ', PORT));
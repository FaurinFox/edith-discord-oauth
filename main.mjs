import express from 'express';
import path from 'path';
import Config from './config.mjs';

const PORT = Config.port;
const app = express();

app.use(express.static('page'));

app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
});

app.get('/cfg/oauth', (req, res) => {
    const data = {result: { oauth: { url: Config.discord.oauth_url}}}
    res.json(data);
    console.info(`JSON data for oauth provided`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'index.html'));
})


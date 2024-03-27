import express from 'express';
import path from 'path';
import config from './config.mjs';
import utils from './modules/utils.mjs';

const PORT = config.port;
const app = express();

app.use(express.static('page'));

app.listen(PORT, () => {
    utils.log(`Listening on port ${PORT}`);
});

app.get('/cfg/oauth', (req, res) => {
    const data = {result: { oauth: { url: config.discord.oauth_url}}}
    res.json(data);
    utils.debug(`JSON data for oauth provided`);
});

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'page', 'index.html'));
    res.sendFile(path.resolve('page', 'index.html'));
});

app.get('/auth/discord', (req, res) => {
    res.sendFile(path.resolve('page', 'discord-auth.html'));
});

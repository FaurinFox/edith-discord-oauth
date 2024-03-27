import express from 'express';
import path from 'path';
import Config from './config.mjs';
import Utils from './modules/utils.mjs';

const PORT = Config.port;
const app = express();

app.use(express.static('page'));

app.listen(PORT, () => {
    Utils.debug(`App listening on port ${PORT}`);
});

app.get('/cfg/oauth', (req, res) => {
    const data = {result: { oauth: { url: Config.discord.oauth_url}}}
    res.json(data);
    Utils.debug(`JSON data for oauth provided`);
});

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'page', 'index.html'));
    res.sendFile(path.resolve('page', 'index.html'));
});

app.get('/auth/discord', (req, res) => {
    res.sendFile(path.resolve('page', 'discord-auth.html'));
});

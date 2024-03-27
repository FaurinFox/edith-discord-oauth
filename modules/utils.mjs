import config from '../config.mjs';

const configDebug = config.debug;

const Utilities = {
    checkConfigPlaceholders() {
        const configPlaceholders = {
            c_id: "YOUR_CLIENT_ID",
            c_secret: "YOUR_SECRET_TOKEN",
            oauth_url: "YOUR_OAUTH_URL"
        }
        if (
        config.discord.client_id !== configPlaceholders.c_id && 
        config.discord.client_secret !== configPlaceholders.c_secret &&
        config.discord.oauth_url !== configPlaceholders.oauth_url)
            return true;
        else if (config.discord.client_id === configPlaceholders.c_id) 
            throw new Error("Config file client id is equal to the placeholder");
        else if (config.discord.client_secret === configPlaceholders.c_secret) 
            throw new Error("Config file client secret is equal to the placeholder");
        else if (config.discord.oauth_url === configPlaceholders.oauth_url) 
            throw new Error("Config file OAuth url is equal to the placeholder");
        
    },
    DEBUG: function (logMsg, type) {
        if (typeof logMsg !== "string") return;
        if (typeof type === "string") {
            type = type.toLowerCase();
        }
        switch (type) {
            case undefined:
                if (configDebug) console.info(logMsg);
                break;
            case 'log':
                if (configDebug) console.log(logMsg);
                break;
            case 'info':
                if (configDebug) console.info(logMsg);
                break;
            case 'warn':
                if (configDebug) console.warn(logMsg);
                break;
            case 'error':
                if (configDebug) console.error(logMsg);
                break;
            default:
                if (configDebug) console.info(logMsg);
                break;
        }
    },
    LOG: function (logMsg, type) {
        if (typeof logMsg !== "string") return;
        if (typeof type === "string") {
            type = type.toLowerCase();
        }
        switch (type) {
            case undefined:
                console.info(logMsg);
                break;
            case 'log':
                console.log(logMsg);
                break;
            case 'info':
                console.info(logMsg);
                break;
            case 'warn':
                console.warn(logMsg);
                break;
            case 'error':
                console.error(logMsg);
                break;
            default:
                console.info(logMsg);
                break;
        }
    },
    get debug() {
        return this.DEBUG;
    },
    get log() {
        return this.LOG;
    }
}

export default Utilities;
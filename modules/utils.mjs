import Config from '../config.mjs';

const configDebug = Config.debug;

const Utilities = {
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
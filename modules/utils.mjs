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
    get debug() {
        return this.DEBUG;
    }
}

export default Utilities;
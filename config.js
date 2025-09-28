const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ==============================
    //          SESSION
    // ==============================
    SESSION_ID: process.env.SESSION_ID || "HansTz&H9xy1BrA#i-YCwAyZBkkMXsLj0aGTVfYbjQiWNgJCRjcPdZlZbFc",

    // ==============================
    //           OWNER
    // ==============================
    OWNER_NUMBER: process.env.OWNER_NUMBER || "50942239713",
    OWNER_NAME: process.env.OWNER_NAME || "MrAnonymous",
    DEV: process.env.DEV || "255760774888",

    // ==============================
    //         ANTI CALL
    // ==============================
    ANTI_CALL: process.env.ANTI_CALL || "false", // "true" = Warn only, no block
    ANTI_CALL_BLOCK: process.env.ANTI_CALL_BLOCK || "false", // "true" = 5 warnings then block
    AUTO_BLOCK: process.envAUTO_BLOCK || "false",
    // ==============================
    //            MODE
    // ==============================
    MODE: process.env.MODE || "private",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",

    // ==============================
    //          CHATBOT
    // ==============================
    CHAT_BOT: process.env.CHAT_BOT || "false",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ==============================
    //          MESSAGES
    // ==============================
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "some",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    READ_CMD: process.env.READ_CMD || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    
    // ==============================
    //           GROUP
    // ==============================
    WELCOME: process.env.WELCOME || "true",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "true",
    MENTION_REPLY: process.env.MENTION_REPLY || "false",

    // ==============================
    //          STATUS
    // ==============================
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐕𝐎𝐑𝐓𝐄𝐗-𝐗𝐌𝐃*",
    
    // ==============================
    //      BOT APPEARANCE
    // ==============================
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/di5kdx.jpg",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "MR Anonymous",
    STICKER_NAME: process.env.STICKER_NAME || "MrAnonymous",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/di5kdx.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> 𝐕𝐎𝐑𝐓𝐄𝐗-𝐗𝐌𝐃⚡ IS ALIVE",
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ HansTech*",

    // ==============================
    //         REACTIONS
    // ==============================
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",

    // ==============================
    //          PRIVACY
    // ==============================
    ANTI_VV: process.env.ANTI_VV || "false",

    // ==============================
    //         STICKER
    // ==============================
    AUTO_STICKER: process.env.AUTO_STICKER || "true"
};

"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (content) => {
    console.log('content', content);
    switch (content) {
        case message.buttons[0]: //밥집
            return(message.baseType(`
                bab zip
            `));
            break;
        case message.buttons[1]: //술집
            return(message.baseType(`
                sul zip
            `));
            break;
        case message.buttons[2]: //치킨집
            return(message.baseType(`
                chicken zip
            `));
            break;
        case '돌아가기':
            return(message.buttons.type());
            break;
    }
}

module.exports = bot;
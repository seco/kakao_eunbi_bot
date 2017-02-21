"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (req, content, callback) => {
    console.log('content', content);
    switch (content) {
        case message.buttons[0]: //밥집
            callback(message.baseType(`
                bab zip
            `));
            break;
        case message.buttons[1]: //술집
            callback(message.baseType(`
                sul zip
            `));
            break;
        case message.buttons[2]: //치킨집
            callback(message.baseType(`
                chicken zip
            `));
            break;
        case '돌아가기':
            break;
    }
}

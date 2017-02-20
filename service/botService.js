"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (req, content) => {
    switch (content) {
        case message.buttons[0]: //밥집
            return message.baseType(JSON.stringify({
                'aa': '1',
                'bb': '2',
                'cc': '3'
            }));
            break;
        case message.buttons[1]: //술집
            return message.baseType(JSON.stringify({
                'dd': '11',
                'ee': '12',
                'ff': '13'
            }));
            break;
        case message.buttons[2]: //치킨집
            return message.baseType(JSON.stringify({
                'gg': '21',
                'hh': '22',
                'ii': '23'
            }));
            break;
        case '돌아가기':
            break;
    }
}
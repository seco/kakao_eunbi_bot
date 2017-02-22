"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (req, content, callback) => {
    switch (content) {
        case message.buttons[0]: //밥집
            req.cache.hgetall('bab', (err, results) => {
                console.log('results', results);
                callback(err, results);
            });
            break;
        case message.buttons[1]: //술집
            req.cache.hgetall('sul', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[2]: //치킨집
            req.cache.hgetall('chick', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[3]: //추가요청
            break;
    }
}

module.exports = bot;
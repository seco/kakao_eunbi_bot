"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (req, content, callback) => {
    switch (content) {
        case message.buttons[0]: //아빠
            req.cache.hgetall('dad', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[1]: //엄마
            req.cache.hgetall('mom', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[2]: //은비
            req.cache.hgetall('eunbi', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[3]: //아리
            req.cache.hgetall('ari', (err, results) => {
                callback(err, results);
            });
            break;
        case message.buttons[4]: //계좌추가
            req.cache.hgetall('ari', (err, results) => {
                callback(err, results);
            });
            break;
    }
}

bot.addAccount = (callback) => {
    
}

module.exports = bot;
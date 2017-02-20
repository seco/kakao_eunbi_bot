const message = require('./message');

let bot = {};

bot.selectMenu = (req, content, callback) => {
    switch (content) {
        case message.buttons[0]: //밥집
            break;
        case message.buttons[1]: //술집
            break;
        case message.buttons[2]: //치킨집
            break;
        case '돌아가기':
            break;
    }
}
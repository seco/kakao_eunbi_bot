"use strict"

const message = require('./message');
let bot = {};

bot.selectMenu = (content) => {
    console.log('content', content);
    switch (content) {
        case message.buttons[0]: //밥집
            return(message.baseType(`미스터피자(평촌점) : 031-385-0111`));
            break;
        case message.buttons[1]: //술집
            return(message.baseType(`여기에 술집 전화번호를 입력하면 됨`));
            break;
        case message.buttons[2]: //치킨집
            return(message.baseType(`여기에 치킨집 전화번호를 입력하면 됨`));
            break;
        case message.buttons[3]: //추가요청
            return(message.baseType(`관리자에게 연락처를 전해주세요 kakao talk id: unbiarirang`));
            break;
    }
}

module.exports = bot;
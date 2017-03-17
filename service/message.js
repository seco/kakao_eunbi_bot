"use strict"

let message = {};
message.buttons = ['아빠', '엄마', '은비', '아리', '기타 정보'];

message.buttonsType = () => {
    return {
        type: 'buttons',
        buttons: message.buttons
    }
};

message.baseType = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.buttons
        }
    }
};

message.photoType = (text, url_photo, label, url_button) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

message.messageButtonType = (text, label, url_button) => {
    return {
      message: {
        text: text,
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.buttons
      }
    }
};

message.buttonsBack = () => {
    return {
        type: 'buttons',
        buttons: ['돌아가기']
    }
};

module.exports = message;
var TelegramBot = require('node-telegram-bot-api');
var token = '';
var bot = new TelegramBot(token, {polling: true});

var item = [
    {Key: "Hi", Value: "Sup!"},
    {Key: "Name", Value: "Muscular Nerd!"},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""}
];

bot.onText(/\/help/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var help = `Welcome to Muscular Nerd!
    \n"/echo *MSG*" - To Repeat your message
    \n"/swag *MSG*" - To swag it up
    `;

    bot.sendMessage(chatId, help);
});

bot.onText(/\/start/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var help = `Welcome to Muscular Nerd!
    \n"/echo *MSG*" - To Repeat your message
    \n"/swag *MSG*" - To swag it up
    `;

    bot.sendMessage(chatId, help);
});

bot.onText(/\/echo (.+)/, (msg, match) => {   
    var chatId = msg.chat.id;
    var echo = match[1];
    bot.sendMessage(chatId, echo);
});

bot.onText(/\/swag (.+)/, (msg, match) => {   
    var chatId = msg.chat.id;
    var echo = match[1];
    let result = item.find(x=> x.Key == echo);

    bot.sendMessage(chatId, result.Value);
});


// bot.on('message', (msg) => {
//     var chatId = msg.chat.id;
   
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });



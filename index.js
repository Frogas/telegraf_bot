/*----------------------------------
Create Simple Telegram bot 
with Telegraf Framework ~ NodeJS
-----------------------------------*/

const Telegraf = require('telegraf');
const bot = new Telegraf('ISI TOKEN @BotFather');

bot.on('text', (ctx) => {
 console.log(ctx.message);
});

if(ctx.message.text == '/start'){
  ctx.replyWithHTML('Selamat Datang <b>'+ ctx.from.first_name +'</b>',{
    'reply_to_message_id':ctx.message.message_id
    }
  )}
};

if(ctx.message.text == '/bye'){
  ctx.replyWithMarkdown('Bye-Bye *'+ ctx.from.first_name +'*', {
    'reply_to_message_id':ctx.message.message_id
    }
  )}
};

bot.startPolling();

const Telegraf = require('telegraf')

const bot = new Telegraf('498240136:AAGBLzR7d0eRM5anktL7UpdmepFnRd6SVaM')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('message', (ctx) => ctx.reply('We are offline right now'))
bot.hears('message', (ctx) => ctx.reply('Hey there'))
bot.launch()
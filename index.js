const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👋 Olá, ${msg.from.first_name}!

Sou um bot para registro de dívidas 📒

Comandos:
/nova_divida
/minhas_dividas
/termos`
  );
});

bot.onText(/\/termos/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `📌 Termos de uso
Este bot apenas registra acordos informais.
Não empresta dinheiro, não cobra, não garante pagamento.`
  );
});

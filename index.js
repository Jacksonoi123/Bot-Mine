const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'pl-01.freezehost.pro',
  port: 10710,
  username: 'Bot_Aliado',
});

bot.once('spawn', () => {
  console.log('✅ Bot conectado ao servidor!');

  setTimeout(() => {
    bot.chat('/login bot123456');  // Troque pela senha correta
    console.log('🔐 Login enviado!');
  }, 30000);

  // Evita o kick por inatividade, enviando uma mensagem a cada 5 minutos
  setInterval(() => {
    bot.chat('Oi Pessoal');
  }, 3000000); // 5 minutos

  // Mantém o bot ativo e tenta reconectar se for desconectado
  bot.on('end', () => {
    console.log('🔌 Bot desconectado! Tentando reconectar...');
    reconnect();
  });

  bot.on('error', (err) => {
    console.log(`❌ Erro: ${err.message}`);
  });

  bot.on('kicked', (reason) => {
    console.log(`⛔ Bot foi expulso: ${reason}`);
  });
});

function reconnect() {
  setTimeout(() => {
    bot.createBot({
      host: 'pl-01.freezehost.pro',
      port: 10710,
      username: 'Bot_Aliado',
    });
  }, 50000); // Espera 5 segundos antes de tentar reconectar
}

console.log('🤖 Bot inicializado!');

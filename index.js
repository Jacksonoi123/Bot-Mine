const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'pl-01.freezehost.pro',
  port: 10710,
  username: 'Bot_AliadoCraft',
});

bot.once('spawn', () => {
  console.log('✅ Bot conectado no servidor!');

  // Espera um pouco e envia o login
  setTimeout(() => {
    bot.chat('/login bot123456');  // <- troque "senha123" pela senha do seu bot
    console.log('🔐 Login enviado!');
  }, 300); // espera 3 segundos antes de tentar logar

  // Depois de 10 minutos, sai do servidor
  setTimeout(() => {
    console.log('🕒 Desconectando...');
    bot.quit();
  }, 600000); // 10 minutos
});

bot.on('end', () => {
  console.log('🔌 Bot desconectado!');
});

const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'aliadocraft.duckdns.org',
  port: 10710,
  username: 'Bot_AliadoCraft',
});

bot.once('spawn', () => {
  console.log('✅ Bot conectado no servidor!');

  // Espera um pouco e envia o login
  setTimeout(() => {
    bot.chat('/register bot123456 bot123456');
    bot.chat('/login bot123456');  // <- troque "senha123" pela senha do seu bot
    console.log('🔐 Login enviado!');
  }, 3000); // espera 3 segundos antes de tentar logar

  // Depois de 10 minutos, sai do servidor
  setTimeout(() => {
    console.log('🕒 Desconectando...');
    bot.quit();
  }, 10 * 60 * 1000); // 10 minutos
});

bot.on('end', () => {
  console.log('🔌 Bot desconectado!');
});

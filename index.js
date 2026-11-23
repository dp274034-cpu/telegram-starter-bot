const { spawn } = require('child_process');

// Запускаем наш Python-бота
const child = spawn('python', ['main.py'], { stdio: 'inherit' });

child.on('error', (err) => {
  console.error('Не удалось запустить main.py:', err);
});

// Не даём Node.js закончить работу, пока работает бот
child.on('exit', () => {
  console.log('main.py завершился');
});

const button = document.getElementById('soundButton');
const audio = document.getElementById('audio');
let isPlayed = false;

// Пробуем запустить звук при загрузке страницы
window.addEventListener('load', () => {
  audio.play().then(() => {
    isPlayed = true;
  }).catch(() => {
    console.log('Автовоспроизведение заблокировано. Ожидание взаимодействия...');
  });
});

// Запускаем звук при любом клике на документ
document.addEventListener('click', () => {
  if (!isPlayed) {
    audio.play().then(() => {
      isPlayed = true;
    }).catch(error => console.log('Ошибка воспроизведения:', error));
  }
});

// Нажатие на кнопку (только один раз)
button.addEventListener('click', () => {
  if (!isPlayed) {
    audio.play().catch(error => console.log('Ошибка воспроизведения:', error));
    isPlayed = true;
  }
  button.disabled = true; // Блокируем кнопку навсегда
});

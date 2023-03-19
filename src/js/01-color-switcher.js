const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const newColor = () => {
  const timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;

  const stopColor = () => {
    clearInterval(timerId);
    startButton.disabled = false;
  };
};

startButton.addEventListener('click', newColor);
stopButton.addEventListener('click', stopColor);

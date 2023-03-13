import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]');
const leftDays = document.querySelector('.value[data-days]');
const leftHours = document.querySelector('.value[data-hours]');
const leftMinutes = document.querySelector('.value[data-minutes]');
const leftSeconds = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startDate = selectedDates[0];
    const chosenDate = startDate.getTime();
    const showActualDate = new Date().getTime();
    if (chosenDate <= showActualDate) {
      startButton.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startButton.disabled = false;

      startButton.addEventListener('click', convertMs);

      function convertMs(ms) {
        timerId = setInterval(() => {
          const actualDate = new Date().getTime();
          let timeLeft = chosenDate - actualDate;
          const ms = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timerId);
            /* console.log('count finished'); */
          }

          // Number of milliseconds per unit of time

          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          // Remaining days
          const days = Math.floor(ms / day);
          // Remaining hours
          const hours = Math.floor((ms % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((ms % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          leftDays.textContent = days;
          if (days === 0) {
            leftDays.style.color = 'azure';
          } else {
            leftDays.style.color = 'red';
          }
          const daysDisplayLength = leftDays.textContent.length;
          if (daysDisplayLength < 2) {
            leftDays.textContent = leftDays.textContent.padStart(2, '0');
          }
          leftHours.textContent = hours;
          if (hours === 0) {
            leftHours.style.color = 'azure';
          } else {
            leftHours.style.color = 'red';
          }
          const hoursDisplayLength = leftHours.textContent.length;
          if (hoursDisplayLength < 2) {
            leftHours.textContent = leftHours.textContent.padStart(2, '0');
          }
          leftMinutes.textContent = minutes;
          if (minutes === 0) {
            leftMinutes.style.color = 'azure';
          } else {
            leftMinutes.style.color = 'red';
          }
          const minutesDisplayLength = leftMinutes.textContent.length;
          if (minutesDisplayLength < 2) {
            leftMinutes.textContent = leftMinutes.textContent.padStart(2, '0');
          }
          leftSeconds.textContent = seconds;
          if (minutes === 0 && seconds === 0) {
            leftSeconds.style.color = 'azure';
          } else {
            leftSeconds.style.color = 'red';
          }
          const secondsDisplayLength = leftSeconds.textContent.length;
          if (secondsDisplayLength < 2) {
            leftSeconds.textContent = leftSeconds.textContent.padStart(2, '0');
          }
          if (timeLeft <= 0) {
            /* clearInterval(timerId); */
            console.log('count finished');
            leftDays.textContent = '00';
            leftDays.style.color = 'azure';
            leftHours.textContent = '00';
            leftHours.style.color = 'azure';
            leftMinutes.textContent = '00';
            leftMinutes.style.color = 'azure';
            leftSeconds.textContent = '00';
            leftSeconds.style.color = 'azure';
          }
          /*  return { days, hours, minutes, seconds }; */
        }, 1000);
      }
    }
  },
};

flatpickr('#datetime-picker', options);

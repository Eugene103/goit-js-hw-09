import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dataInp = document.querySelector(`#datetime-picker`)
const startBtn = document.querySelector(`[data-start]`)
const days = document.querySelector(`[data-days]`)
const hours = document.querySelector(`[data-hours]`)
const minutes = document.querySelector(`[data-minutes]`)
const seconds= document.querySelector(`[data-seconds]`)

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentData = options.defaultDate.getTime()
    const timeEnd = selectedDates[0].getTime();
    if (currentData >= timeEnd) {
      Notiflix.Notify.failure("Please choose a date in the future");
startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      let ms = timeEnd - currentData;

      startBtn.addEventListener(`click`, () => {
        const timerId = setInterval(() => {
          const buffer = Number(ms) - 1000;
          ms = buffer;
          function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
        days.textContent = convertMs(ms).days.toString().padStart(2, '0'),
        hours.textContent = convertMs(ms).hours.toString().padStart(2, '0'),
        minutes.textContent = convertMs(ms).minutes.toString().padStart(2, '0'),
            seconds.textContent = convertMs(ms).seconds.toString().padStart(2, '0')
          if (ms < 1000) {
            clearInterval(timerId)
          }
        }, 1000);
})
    }
  }
}
flatpickr(dataInp, options)


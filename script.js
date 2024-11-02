"use ctrict"
// Кнопка НАВЕРХ

const btnUp = {
    el: document.querySelector('.btn-up'),
    hide() {
      // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
});
      // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
    }
}

btnUp.addEventListener();

// Календарь

const now = new Date();
const month = now.toLocaleString('default', { month: 'long' });
const weekday = now.toLocaleString('default', { weekday: 'long' });
const day = now.toLocaleString('default', { day: '2-digit' });
const year = now.toLocaleString('default', { year: 'numeric' });

document.querySelector('.calendar-month').textContent = month;
document.querySelector('.calendar-weekday').textContent = weekday;
document.querySelector('.calendar-day').textContent = day;
document.querySelector('.calendar-year').textContent = year;

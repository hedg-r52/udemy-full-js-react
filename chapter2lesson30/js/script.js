/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость"
    ]
};

// 1)
let adv;
while (!!(adv = document.querySelector(".promo__adv img"))) {
    adv.remove();
}

// 2)
const genre = document.querySelector(".promo__genre");
genre.textContent = "ДРАМА";

// 3)
const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4)

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}
                                <div class="delete"></div>
                            </li>`;
});


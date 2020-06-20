// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log('Start');
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();

        console.log('End');
    });

    // свойства событий
    // -------------------------------- 
    // touches
    // targetTouches 
    // changedTouches


});

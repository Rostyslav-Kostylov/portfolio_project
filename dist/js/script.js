const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

// const counters = document.querySelectorAll('.skills__item-percent'),
//     lines = document.querySelectorAll('.skills__item-scale');

// counters.forEach(  (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });


const counters = document.querySelectorAll('.skills__item-percent'),
    lines = document.querySelectorAll('.skills__item-scale');

counters.forEach((item, i) => {
    const widthPercentage = parseFloat(item.innerHTML); // Преобразуем строку в число
    const fullWidth = lines[i].offsetWidth; // Получаем ширину родительского элемента

    const widthInPixels = (widthPercentage / 100) * fullWidth + 'px';
    lines[i].querySelector('span').style.width = widthInPixels;
});

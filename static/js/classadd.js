document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('#bar-b');
    const over = document.querySelector('#over');
    const con = document.querySelector('#con');
    bar.addEventListener('click', () => {
        con.classList.toggle('open');

    });
    over.addEventListener('click', () => {
        con.classList.remove('open');
    });
});
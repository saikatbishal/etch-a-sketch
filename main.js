const red = document.querySelector('.red');
red.addEventListener('click', function () {
    let script = document.createElement('script');
    script.src = 'app.js';
    document.head.appendChild(script);
});
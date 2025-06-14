document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = randomColor;
    });
});

document.getElementById('colorPicker').addEventListener('change', function() {
    let chosenColor = this.value;
    displayColor(chosenColor);
    addToHistory(chosenColor);
});

document.getElementById('randomColor').addEventListener('click', function() {
    let randomColor = getRandomColor();
    displayColor(randomColor);
    addToHistory(randomColor);
});

function displayColor(color) {
    document.getElementById('displayArea').style.backgroundColor = color;
    document.body.style.backgroundColor = color; // Part 1: Change whole page background
    document.getElementById('colorValue').textContent = color; // Part 2: Display color value
}

function addToHistory(color) {
    let historyDiv = document.getElementById('paletteHistory');
    let newColorBox = document.createElement('div');
    newColorBox.style.backgroundColor = color;
    newColorBox.classList.add('color-box');
    historyDiv.appendChild(newColorBox);

    // Optional: allow clicking on history colors to reselect them
    newColorBox.addEventListener('click', function() {
        displayColor(color);
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

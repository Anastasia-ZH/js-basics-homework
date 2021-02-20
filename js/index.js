
const button = document.getElementById('calculate');

button.addEventListener('click', function () {
    let temperatureC = prompt('enter temperature');

    if (isNaN(parseInt(temperatureC))) {
        alert('this is not a number');
        return;
    }

    let temperatureF = parseInt((9 / 5) * temperatureC + 32);
    alert("Temperature in F: " + temperatureF);
})
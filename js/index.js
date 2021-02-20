const button = document.getElementById('calculate');
const cloneButton = document.getElementById('clone');


/**
 * calculate temperature
 */
function calculate() {
    let temperatureC = prompt('enter temperature');

    if (isNaN(parseInt(temperatureC))) {
        alert('this is not a number');
        return;
    }

    let temperatureF = parseInt((9 / 5) * temperatureC + 32);
    alert("Temperature in F: " + temperatureF);
}

/**
 * clone variables
 */
function clone() {
    let name = "Вася"
    let admin = name;
    console.log(admin);
}


button.addEventListener('click', calculate)
cloneButton.addEventListener('click', clone);


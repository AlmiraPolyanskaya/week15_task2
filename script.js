let cities = [
    'Москва',
    'Токио',
    'Дели',
    'Стамбул',
    'Лондон',
    'Нью-Йорк'
];

let citiTemperatures = [];

for (let i = 0; i < cities.length; i++) {
    let citiTemperature = prompt(`Введите температуру воздуха (в ℃) в городе: ${cities[i]}`);
    if (!isNaN(citiTemperature)) {
        citiTemperatures.push(Number(citiTemperature));
    }
    else {
        alert(`Вы ввели не число`);
        i--
    }
}

console.log(citiTemperatures);

const citiTemperatureList = document.getElementById('citiTemperatureList');
for (let i = 0; i < cities.length; i++) {
    citiTemperatureList.insertAdjacentHTML('beforeend', `
    <li>
        Температура воздуха в городе ${cities[i]}: ${citiTemperatures[i]}℃
    </li>
`);
}

const minTemperature = Math.min(...citiTemperatures);
const maxTemperature = Math.max(...citiTemperatures);
document.getElementById('min').innerText = `Минимальная температура: ${minTemperature}℃`;
document.getElementById('max').innerText = `Максимальная температура: ${maxTemperature}℃`;
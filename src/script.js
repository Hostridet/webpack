import { Method } from './method';
let button = document.querySelector('.get');
const method = new Method('7daa9527746f554b7acdcce2ea914f59');


function getWeather() {
    let city = document.querySelector('.city');
    method.getWeather(city.value);
}

button.addEventListener("click", () => {
    getWeather();
})
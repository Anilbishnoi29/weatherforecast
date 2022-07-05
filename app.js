'use strict';
const btn = document.querySelector("#cityBtn");
let data;
btn.addEventListener('click', () => {
    let cityName = document.querySelector("#cityName").value;

    if (cityName !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=c7a63b60eeae09d18918380ee3d695f2`)
            .then(response => response.json())
            .then(data => showWeather(data));


    } else {
        alert("Enter a city name");
    }
});

function showWeather(data) {
    // var
    data = data;
    let weather = document.querySelector(".weather");
    let name = document.querySelector("#name");
    let weatherType = document.querySelector("#weatherType");
    let weatherStyle = document.querySelector("#weatherStyle");
    let wind = document.querySelector("#wind");
    let visibility = document.querySelector("#visibility");
    weather.style.display = 'block';
    name.innerText = `${data.name}, ${data.sys.country}`;
    weatherType.innerText = `${data.main.temp}°C`;
    weatherStyle.innerText = `${data.weather[0].main}`;
    wind.innerHTML = `<span><i class="fa-solid fa-wind"></i> ${data.wind.speed}m/s </span><span id="pressure"><i class="fa-solid fa-down-left-and-up-right-to-center"></i> ${data.main.pressure}hPa</span>`;
    visibility.innerHTML = `<span>Humidity:${data.main.humidity}% </span><span id="pressure"> visibility:${data.visibility / 1000}km</span>`;

}
const myOpenWeatherKey = "e92f31998175f614d9fb38e7357685f1";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const requestURL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myOpenWeatherKey}&units=metric`;
    const requested = fetch(requestURL).then(
        response => {
            return response.json()
        }
    );
    requested.then(data => {
        const weatherSpan = document.querySelector("#weatherDiv span:first-child");
        const citySpan = document.querySelector("#weatherDiv span:last-child");

        citySpan.innerText = data.name;
        weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
}
function geoFail() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
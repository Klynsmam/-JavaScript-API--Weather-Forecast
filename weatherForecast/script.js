const key = "120fa59314b3444e3efab296f121ce25"

function buttonClick() {

    const city = document.querySelector('.cityInput').value;

    searchCity(city);
}

async function searchCity(city) {

    const dataBase = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dataOnScreen(dataBase);
    console.log(dataBase);
}

function updateCountryCode(dataBase) {
 
    document.querySelector('.codeCountry').value = dataBase.sys.country;
    
}
    

function dataOnScreen(dataBase) {
    updateCountryCode(dataBase);
    document.querySelector('.cities').innerHTML = dataBase.name;
    document.querySelector('.temp').innerHTML = Math.round(dataBase.main.temp) + "°C";
    document.getElementById('minimum').innerHTML= Math.round(dataBase.main.temp_min) + "°C";
    document.getElementById('maximum').innerHTML= Math.round(dataBase.main.temp_max) + "°C";
    document.querySelector('.textForecast').innerHTML = dataBase.weather[0].description;
    document.querySelector(".imgWeather").src = `https://openweathermap.org/img/wn/${dataBase.weather[0].icon}.png`
    document.getElementById('feeling').innerHTML= Math.round(dataBase.main.feels_like) + "°C";
    document.querySelector('.humidity').innerHTML =  "Umidade  " + dataBase.main.humidity + "%" 
}

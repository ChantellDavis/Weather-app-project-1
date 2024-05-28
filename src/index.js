function displayTemperature(response){
    
    let currentTemperature = document.querySelector("#current-Temperature");
    let temperature = (response.data.temperature.current)
    let windSpeed = (response.data.wind.speed)
    let humidity = (response.data.temperature.humidity)
    let weatherCondition = document.querySelector("#weather-Condition");
    let currentHumidityData = document.querySelector("#current-humidity-data");
    let currentWindData = document.querySelector("#current-Wind-Data");
    let mainCity = document.querySelector("#main-City");
    let currentDate = document.querySelector("#current-Date");
    let date = new Date(response.data.time * 1000);

    currentDate.innerHTML = formattedDate(date);
    mainCity.innerHTML = response.data.city
    weatherCondition.innerHTML = (response.data.condition.description);
    currentHumidityData.innerHTML = `${(humidity)}%`;
    currentWindData.innerHTML = `${Math.round(windSpeed)} Mph`;
    currentTemperature.innerHTML = Math.round(temperature);
}

function formattedDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    if (minutes < 10) {
        let minutes = `0${minutes}`
    }


let day = days[date.getDay()];


return `${day} ${hours}:${minutes}`
}


function searchingCity(city) {
    let apiKey = "50a8380f4oe8265a54940c506tc9b3e0"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
    axios.get(apiUrl).then(displayTemperature)
}

function searching(event) {
    event.preventDefault()
    let searchFormInput = document.querySelector("#search-Form-Input");
    
    searchingCity(searchFormInput.value)
}

let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit", searching);

searchingCity("Queens")
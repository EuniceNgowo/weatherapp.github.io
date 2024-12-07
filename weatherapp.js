document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    getWeatherBtn.onclick = () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    };

    async function fetchWeather(city) {
        const apiKey = '134e610b2f1840bb5bc4982ae2764208'; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${'buea'}&appid=${'134e610b2f1840bb5bc4982ae2764208'}&units=metric`;
        

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
            weatherInfo.style.display = 'block';
        }
    }

    function displayWeather(data) {
        const { main, weather, name } = data;
        const temperature = main.temp;
        const description = weather[0].description;
        const icon = weather[0].icon;

        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
        `;
        weatherInfo.style.display = 'block';
    }
});
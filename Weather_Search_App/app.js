let userInput = document.querySelector('.searchInput');
let button = document.querySelector('button');
let weatherIcon = document.querySelector('.weatherIcon');
let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.windSpeed');
let apiKey = '8d634d1e481c58de32e78fffdb21af8d'


button.addEventListener('click', async () => { 
    let destination = userInput.value
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${destination}&appid=${apiKey}`)
    let response = await request.json()

    city.innerHTML = response.name
    temp.innerHTML = Math.round(response.main.temp) + "°c"
    humidity.innerHTML = response.main.humidity  + "%"
    windSpeed.innerHTML = response.wind.speed + "km/h"

    if (response.weather[0].main == 'Smoke') {
        weatherIcon.src = `./Images/fog.png`
    }
    else if (response.weather[0].main == 'Clouds') { 
        weatherIcon.src = `./Images/cloudy.png`
    }
    else if (response.weather[0].main == 'Rain') { 
        weatherIcon.src = `./Images/rain.png`
    }
    else if (response.weather[0].main == 'Clear') { 
        weatherIcon.src = `./Images/sun.png`
    }
    else if (response.weather[0].main == 'Drizzle') { 
        weatherIcon.src = `./Images/cloudy(1).png`
    }
    else if (response.weather[0].main == 'Mist') { 
        weatherIcon.src = `./Images/mist.png`
    }
    else if (response.weather[0].main == 'Haze') { 
        weatherIcon.src = `./Images/fog.png`
    }
    
    userInput.value = null
    console.log(response.weather[0].main);
})

/*
document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Izhevsk');
});
function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d6e481919bcce169184f16536bb64bd8&units=metric')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector('.city')
            .innerText = weather.name;
            document.querySelector('.date')
            .innerText = new Date;
            document.querySelector('.tempValue').innerText = Math.round(weather.main.temp);
            document.querySelector('.hi-low').innerText = Math.round(weather.main.temp_max) + " / " + Math.round(weather.main.temp_min);
            document.querySelector('.weather').innerText = weather.weather[0].description;
        })
        .catch(err => console.log(err));
}
*/

document.addEventListener("DOMContentLoaded", function (event) {
    const cat = document.getElementById("showCat");
});

function showCat() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=YPIGxAd3kqGpf7H7GBpW2RAwfB7eLxXA&q=cat&limit=50&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then(cat => {
        /*const catGif = `
        <div class="gif">${cat.data.images.url}</div>
        `*/
        document.getElementById("cat");       console.log(cat);
    })
    .catch(error => console.log(error));
}

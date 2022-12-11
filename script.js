document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=YPIGxAd3kqGpf7H7GBpW2RAwfB7eLxXA&q=cat&limit=5&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then(cat => {
        document.getElementById("cat").src = user.avatar_url;
        console.log(cat);
    })
    .catch(error => console.log(error));
});
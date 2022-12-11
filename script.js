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

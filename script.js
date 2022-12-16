document.addEventListener("DOMContentLoaded", function (event) {
    const cat = document.getElementById("showCat");
});

function showCat() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=YPIGxAd3kqGpf7H7GBpW2RAwfB7eLxXA&q=cat&limit=5&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then(cat => {
        let result = ('');
        cat.data.forEach(element => {
            result += `<img src="${element.images.original.url}">`
        });

        console.log(cat);
        document.getElementById("cat");  
        innerHTML = result;     
    })
    .catch(error => console.log(error));
}


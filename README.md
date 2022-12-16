# giphy-cats
week21 task1
1. Сделайте форму поиска по GIF-кам к открытому API [https://developers.giphy.com/](https://developers.giphy.com/) 
    
    Используйте GET-запрос с параметрами в строке адреса. Страница должна выводить не более 5 картинок одновременно.

    Гифки из респонса в твоем случае можно так
.then(cat => {
        let result = ‘’;
        cat.data.forEach(element => {
            result += `<img src=“${element.images.original.url}“>`
        });
        /*const catGif = `
        <div class=“gif”>${cat.data.images.url}</div>
        `*/
        console.log(cat);
        document.getElementById(“cat”).innerHTML = result;
    })
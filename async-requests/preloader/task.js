let valute;
let valuteContainer = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        valute = xhr.response.response.Valute;
        console.log(valute);
        console.log(typeof(valute));    
    }

    loader.classList.toggle('loader_active');

    for (let valuteItem of valute) {
        valuteContainer.insertAdjacentHTML("afterBegin",
        `<div class="item__code">${valuteItem.CharCode}</div>
        <div class="item__value">${valuteItem.Value}</div>
        <div class="item__currency">руб.</div>`);
    }
}
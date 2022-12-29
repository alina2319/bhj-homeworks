let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener('submit', () => {
    var formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru');
    xhr.send(formData);

    xhr.upload.onprogress = function() {
        alert( 'Загружено на сервер');
    }

    xhr.upload.onprogress = function(event) {
        console.log(event);
    }
})

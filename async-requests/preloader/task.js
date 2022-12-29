const items = document.getElementById("items");
const img = document.querySelector(".loader")
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      let data = JSON.parse(xhr.response).response.Valute;
      img.classList.remove("loader_active");
      for (let key in data) {
         items.innerHTML += ` <div class="item">
         <div class="item__code">
         ${data[key].CharCode}
         </div>         
         <div class="item__value">
         ${data[key].Value}
         </div>         
         <div class="item__currency">
         руб.
         </div>
         <div>
         </div>`
      }
   }
   else img.classList.add("loader_active");
}
);

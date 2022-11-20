const links = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < links.length; i++) {
    let placeLinks = links[i].getBoundingClientRect();
    let hints = `<div class="tooltip tooltip_active" style="left:${placeLinks.x}px">${links[i].title}</div>`;

    links[i].addEventListener("click", (event) => {
        event.preventDefault();
        if(!event.target.nextElementSibling.classList.contains("tooltip_active")) {
            event.target.insertAdjacentHTML("afterEnd", hints)
        } else {
            event.target.nextElementSibling.remove();
        }
    });
}
const tasksInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

const taskWrite = function() {
    let taskText = tasksInput.value;
    return `<div class="task">
                <div class="task__title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
}

tasksInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && tasksInput.value !== "") {
        event.preventDefault();
        tasksList.innerHTML += taskWrite();
        tasksInput.value = "";
    }    
});

tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (tasksInput.value !== "") {
        tasksList.innerHTML += taskWrite();
        tasksInput.value = "";
    }    
});

tasksList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.closest(".task").remove();
    }
});
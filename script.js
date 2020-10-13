const form = document.getElementById('form');
const input = document.getElementById('input');
const tasks = document.getElementById('tasks');
const history = JSON.parse(localStorage.getItem("tasks"));
var btn = document.getElementById("completed");
var ttl = document.getElementById("title");
var chck = new Audio("noise.wav");
var rmve = new Audio("sweep.wav");
var fnfr = new Audio("fanfare.wav");

/* For using the enter key */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo() {
    const taskText = input.value;

    if(taskText) {
        const taskEl = document.createElement('li');
        taskEl.innerText = taskText;

        taskEl.addEventListener("click", () => {
            taskEl.classList.toggle('completed');

            chck.play();

            updateLS();
        });

        taskEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            rmve.play();

            taskEl.remove();

            updateLS();
        });

        completed.addEventListener("click", (e) => { 
            e.preventDefault();
        
            taskEl.remove();

           /* btn.classList.toggle('animate'); */

            ttl.classList.toggle('colorspray');

            fnfr.play();
        
            updateLS(); 
        });
        tasks.appendChild(taskEl);

        input.value = "";
    }
}


/* For using the add button */
button.addEventListener("click", (e) => {
    e.preventDefault();

    addTodo();

    input.focus();
});

function updateLS() {
    const tasksEl = document.querySelectorAll('li');

    const tasks = [];

    tasksEl.forEach(taskEl => {
        tasks.push({
            text: taskEl.innerText,
            completed: taskEl.classList.contains
            ('completed')
        })
    })
/*
    if(history.includes("true")) {
        fnfr.play();
    } else {
    }
*/

    localStorage.setItem("tasks", JSON.stringify
    (tasks));
}

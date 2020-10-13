const form = document.getElementById('form');
const input = document.getElementById('input');
const tasks = document.getElementById('tasks');
const history = JSON.parse(localStorage.getItem("tasks"));
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
        const taskEl = document.createElement
        ("li");
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

        tasks.appendChild(taskEl);

        input.value = "";
    }
}


/* For using the add button */
button.addEventListener("click", (e) => {
    e.preventDefault();

    addTodo();
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

    if(tasks.push.includes('false')) {
    } else {
        fnfr.play();
    }

    localStorage.setItem("tasks", JSON.stringify
    (tasks));
}

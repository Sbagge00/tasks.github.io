const form = document.getElementById('form');
const input = document.getElementById('input');
const tasks = document.getElementById('tasks');
var btn = document.getElementById("completed");
var ttl = document.getElementById("title");
var chck = new Audio("noise.wav");
var rmve = new Audio("sweep.wav");
var fnfr = new Audio("fanfare.wav");
var todos = [];
const taskEl = document.createElement('li');

/* when user presses enter key, call todo function */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

/* add task and listen for ui interactions */
function addTodo() {
    const taskText = input.value;

    if(taskText) {
        const taskEl = document.createElement('li');
        taskEl.innerText = taskText;

        taskEl.addEventListener("click", () => {
            taskEl.classList.toggle('completed');

            chck.play();

            saveTodos();
        });

        taskEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            rmve.play();

            taskEl.remove();
            saveTodos();
        });

        completed.addEventListener("click", (e) => { 
            e.preventDefault();
        
            taskEl.remove();
            tasks.remove();

            ttl.classList.toggle('colorspray');

            fnfr.play();
            saveTodos();
        });
        tasks.appendChild(taskEl);

        input.value = "";
        saveTodos();
    }
}

/* when user presses button, call todo function */
button.addEventListener("click", (e) => {
    e.preventDefault();

    addTodo();

    input.focus();
});

function saveTasks() {
    const tasksEl = document.querySelectorAll('li');

    const tasks = [];

    tasksEl.forEach(taskEl => {
        tasks.push(taskEl.innerText)
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveTodos() {
    const tasksEl = document.querySelectorAll('li');

    const todos = [];

    tasksEl.forEach(taskEl => {
        todos.push(taskEl.innerText)
    })

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    var str = localStorage.getItem("todos");
    todos = JSON.parse(str);
    if (!todos) {
        todos = [];
    }
}

function getTasks() {
    var str = localStorage.getItem("tasks");
    mtasks = JSON.parse(str);
    if (!mtasks) {
        mtasks = [];
    }
}

function listTodos() {
    var html = "";
    for (var i in todos) {
        var x = todos[i].toString();
        console.log(x);
        tasks.innerHTML += "<li>"+`${x}`+"</li>";
    }
}

getTodos();
listTodos();

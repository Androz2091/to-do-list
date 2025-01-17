const writeTask = document.getElementById("text");
const addTask = document.getElementById("submit");
let todo = document.getElementById("todo");
let task = "";
let newTask;
let removeTask;


// Put input text content into a new variable

writeTask.addEventListener("input", (e) => {
    task = e.target.value;
});


// Check if input variable isn't empty. If okay, insert a new div with input text value

function addTheTask() {
    const taskID = Math.random().toString().substring(2, 15);
    newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.setAttribute('id', taskID);
    newTask.innerHTML = `
        <p>${task}</p>
        <input type="button" value="Remove" id="remove" onclick="removeTheTask('${taskID}')">`
    todo.appendChild(newTask);
}

function removeTheTask(taskID) {
    let tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskID) {
            tasks[i].remove();
        }
    }
}

addTask.addEventListener("click", (e) => {
    e.preventDefault();
    (task !== "") ? addTheTask() : alert("Please, enter your task");
}); 


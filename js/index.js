window.onload = function() {
    start();
    document.getElementById("buttonInput").addEventListener('click', addTask)
}


function start() {
let n =  new Date();
let year = n.getFullYear();
let month = n.getMonth() + 1;
let date = n.getDate();
document.getElementById("date").innerHTML = month + "/" + date + "/" + year;
}

function addTask(){

    let li = document.createElement("li");
    let newTask = document.getElementById("inputValue").value;
    let task = document.createTextNode(newTask);
    task.document.id = ("list-item");
    li.appendChild(task);

    document.getElementById("list-ul").innerHTML += task;
    localStorage.setItem("Tasks", task);

    
    // let ul = document.getElementById("list-ul");
    
}


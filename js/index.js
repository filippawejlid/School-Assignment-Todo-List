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

    let input = document.createElement("input");
    input.type = "checkbox";
    li.appendChild(input);


    let newTask = document.getElementById("inputValue").value;
    let task = document.createTextNode(newTask);
    li.appendChild(task);
    if (newTask === '') {
      alert("Du måste skriva något!");
    } else {
      document.getElementById("list-ul").appendChild(li);
    }

} 
   // let ul = document.getElementById("list-ul");
    // let li = document.createElement("li")

    // let newTask = document.getElementById("inputValue").value;
    // let task = document.createTextNode(newTask);
    

    // li.appendChild(document.createTextNode(checkbox + task));
    // document.getElementById("list").appendChild(li);
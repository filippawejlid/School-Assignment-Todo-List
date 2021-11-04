window.onload = function() {
    start();
    document.getElementById("buttonInput").addEventListener('click', addTask)
    document.getElementById("inputValue").addEventListener('click', clearInput)
    document.getElementById("list-item").addEventListener('click', moveTask)

}


function start() {
let n =  new Date();
let year = n.getFullYear();
let month = n.getMonth() + 1;
let date = n.getDate();
document.getElementById("date").innerHTML = month + "/" + date + "/" + year;
}

function clearInput(){
  document.getElementById("inputValue").value = "";
}

let taskList = [];
function addTask(){
    let li = document.createElement("li");
    li.id = "list-item";

    let newTask = document.getElementById("inputValue").value;
    let task = document.createTextNode(newTask);
  
    li.appendChild(task);


    if (newTask === '' || newTask=== ' ') {
      alert("Du måste skriva något!");
    } else {
      document.getElementById("list-ul").appendChild(li);
      taskList.push(task);

    }
} 

function moveTask () {

  for (let i = 0; i < taskList.length; i++) {

    
    // taskList[i].addEventListener("click", ()=> {taskList.splice([i], 1)})
    taskList[i].addEventListener("click", ()=> {taskList[i] = [0]})
    console.log(taskList);
    
  }
}
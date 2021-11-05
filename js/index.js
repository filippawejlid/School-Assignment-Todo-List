
window.onload = function() {
    date();
    document.getElementById("buttonInput").addEventListener('click', addTask)
    document.getElementById("inputValue").addEventListener('click', clearInput)
}


function date() {
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

    let newTask = document.getElementById("inputValue").value.trim();

    if (newTask === '') {
      alert("Du måste skriva något!");
    } else {
      taskList.push(newTask);
      document.getElementById("list-ul").innerHTML= null;

      for (let i = 0; i < taskList.length; i++) {
        let li = document.createElement("li");
        li.id = "list-item" +i;

        document.getElementById("list-ul").appendChild(li);  
        li.addEventListener("click", ()=> {moveTask(i)})
        
        li.innerHTML = taskList[i];

        
      }
      console.log(taskList)

    }
} 


let finishedTasks = [];
function moveTask (clickedItem) {

  for (let i = 0; i < taskList.length; i++) {
    console.log("list-item" + [i]);
    // document.getElementById("list-ul").removeChild("list-item" + [i])

  }

  let removedItems = taskList.splice(clickedItem, 1);


  finishedTasks.push(removedItems[0])

  addToDoneList();


}     

function addToDoneList(){

  document.getElementById("finishedtask").innerHTML= null;
  for (let i = 0; i < finishedTasks.length; i++) {
    let finishedLi = document.createElement("li");
    finishedLi.id = "finished-item" +i;
    document.getElementById("finishedtask").appendChild(finishedLi);  

    finishedLi.innerHTML = finishedTasks[i];

    let span = document.createElement("span");
    span.innerHTML = "X";
    span.classList.add("close-button");
    // span.addEventListener("click", ()=> {deleteTask(i)})

    finishedLi.appendChild(span)

    console.log(taskList + " " + "Ska göra");
    console.log(finishedTasks + " " + "Har gjort");

  
  }


}

// function deleteTask(itemToDelete){

// }


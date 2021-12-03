
window.onload = function() {
    date();
    document.getElementById("buttonInput").addEventListener('click', addTask)
    document.getElementById("inputValue").addEventListener('click', clearInput)
    document.getElementById("clear-all").addEventListener('click', clearAll)
    document.getElementById("sort-button").addEventListener('click', listSort)

    
}


class Todo {

  constructor(todo) {
    this.item = todo;
  }
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
    let newTodo = new Todo(newTask);



    if (newTask === '') {
      alert("Du måste skriva något!");
    } else {
      taskList.push(newTodo);

      createHTML();
      
    }
} 


let finishedTasks = [];
function moveTask (clickedItem) {

  let removedItems = taskList.splice(clickedItem, 1);  

  finishedTasks.push(removedItems[0]);
  console.log(finishedTasks);

  createHTML();

}     

function createHTML(){

  document.getElementById("list-ul").innerHTML= null;

  for (let i = 0; i < taskList.length; i++) {
    let li = document.createElement("li");
    li.id = "list-item" +i;

    document.getElementById("list-ul").appendChild(li);  
    li.addEventListener("click", ()=> {moveTask(i)})
        
    li.innerHTML = taskList[i].item;

  }
        

  document.getElementById("finishedtask").innerHTML= null;

  for (let i = 0; i < finishedTasks.length; i++) {

    let liContainer = document.createElement("div")
    liContainer.classList.add("li-container")
    document.getElementById("finishedtask").appendChild(liContainer); 


    let finishedLi = document.createElement("li");
    finishedLi.id = "finished-item" +i;
    liContainer.appendChild(finishedLi)
 
    finishedLi.addEventListener("click", ()=> {bringBackTask(i)})
    finishedLi.innerHTML = finishedTasks[i].item;

    let span = document.createElement("span");
    span.innerHTML = "X";
    span.classList.add("close-button");
    span.addEventListener("click", ()=> {deleteTask(i)})

    liContainer.appendChild(span)
  }


}

function bringBackTask(bringBackItem) {
  
  
  let bringBackList = finishedTasks.splice(bringBackItem, 1);  
  
  taskList.push(bringBackList[0])
  
  createHTML();
  
  console.log(bringBackList);
  console.log(taskList);
}

function deleteTask(itemToDelete){

  finishedTasks.splice(itemToDelete, 1);  

  createHTML();

}


function listSort() {
  let x, y;

  let sorting = taskList.sort(function(a,b){
    x = a.item.toLowerCase();
    y = b.item.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}

    return 0;

  });

  for (let i = 0; i < sorting.length; i++) {
    
    document.getElementById("list-item" + [i]).innerHTML = sorting[i].item;
    
  }
}

function clearAll() {

  finishedTasks = [];
  taskList = [];

  createHTML();

}
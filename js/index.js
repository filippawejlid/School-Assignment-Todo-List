
window.onload = function() {
    date();
    document.getElementById("buttonInput").addEventListener('click', addTask)
    document.getElementById("inputValue").addEventListener('click', clearInput)
    document.getElementById("sort-button").addEventListener('click', sortList)
    document.getElementById("clear-all").addEventListener('click', clearAll)
    
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

      createHTML();
      
    }
} 


let finishedTasks = [];
function moveTask (clickedItem) {

  let removedItems = taskList.splice(clickedItem, 1);  

  finishedTasks.push(removedItems[0]);

  createHTML();

}     

function createHTML(){

  document.getElementById("list-ul").innerHTML= null;
  for (let i = 0; i < taskList.length; i++) {
    let li = document.createElement("li");
    li.id = "list-item" +i;

    document.getElementById("list-ul").appendChild(li);  
    li.addEventListener("click", ()=> {moveTask(i)})
        
    li.innerHTML = taskList[i];

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
    finishedLi.innerHTML = finishedTasks[i];

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

}

function deleteTask(itemToDelete){

  finishedTasks.splice(itemToDelete, 1);  

  createHTML();

}

function sortList() {
  let ul, i, switching, li, shouldSwitch;
  ul = document.getElementById("list-ul");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    li = ul.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (li.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      li[i].parentNode.insertBefore(li[i + 1], li[i]);
      switching = true;
    }
  }
}

function clearAll() {

  finishedTasks = [];
  taskList = [];

  createHTML();

}
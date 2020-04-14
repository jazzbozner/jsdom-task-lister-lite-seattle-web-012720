
document.addEventListener("DOMContentLoaded", () => {
  addTask();
});

function createTask(e) {
  const taskList = document.getElementById('tasks')
  let button = document.createElement('button')
  let task = document.createElement('li')
  button.innerHTML = 'x'
  task.innerHTML = e
  task.appendChild(button)
  taskList.appendChild(task)
}

function addTask() {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    createTask(e.target['new-task-description'].value);
    e.target.reset();
  })
}

function deletTask() {
  let button = document.querySelector('button')
  button.addEventListener('click', function(e) {
    let list = document.getElementById('tasks')
    // remove child
  })
}




// function addTask(task) {
//   let newTask = document.createElement('li');
//   newTask.textContent = task;
//   document.querySelector('ul').appendChild(newTask);
// }

//   function deleteTask() {
//   let deleteTask = document.createElement('button')
//   deleteTask.textContent = "x"
 
// }

// document.addEventListener("DOMContentLoaded", () => {

//   const form = document.getElementById('create-task-form');
  
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const taskToAdd = event.target["new-task-description"].value;
//     if (taskToAdd !== "") {
//       addTask(taskToAdd);
//     }
//   form.addEventListener('button', function(event) {
//     let elem = document.getElementById('create-task-form')
//     elem.parentNode.removeChild(elem)
//     }
//   });
// });

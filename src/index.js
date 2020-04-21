document.addEventListener("DOMContentLoaded", () => {
  addPriorities();
  addTask();
});
const form = document.getElementById('create-task-form')

function addPriorities() {
  const dropDown = document.createElement('select')
  dropDown.id = "priority-value"
  dropDown.innerHTML = "<option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option"
  form.insertBefore(dropDown, form.childNodes[4])
}

function addTask() {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskList = document.getElementById('tasks')

    let task = document.createElement('li')
    task.innerText = e.target['new-task-description'].value
    task.className = e.target["priority-value"].value

    let button = document.createElement('button')
    button.innerText = 'x'

    task.appendChild(button)
    taskList.appendChild(task)

    deleteTask(button);
      e.target.reset();
  })
}

function deleteTask(button) {
  button.addEventListener('click', function(e) {
    button.parentElement.remove();
  })
}


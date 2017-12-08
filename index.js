window.onload = onReady;
function onReady() {
  var todoContainer = document.getElementById('ToDoApp');
  var todoForm = todoContainer.querySelector('#ToDoForm');
  var taskEntered = todoContainer.querySelector('#Task');
  var taskList = todoContainer.querySelector('#TaskList');
  var itemCount = 1;

  todoForm.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask.bind(taskList));

  function addTask(event) {
    event.preventDefault();
    var taskValue = taskEntered.value;
    var taskItem = getTaskItem(taskValue);

    if(!taskValue.trim().length) {
      return;
    }
    taskList.appendChild(taskItem);
    taskEntered.value = "";
    itemCount++;
  }

  function removeTask(event) {
    var target = event.target,
        liItem = target.parentNode;

    if(target.type === 'checkbox') {     
      if(target.checked) {
         // do some operation
      } 
    }
    if(target.className === 'remove-task') {
      liItem.parentNode.removeChild(liItem);
    }
  }

  function getTaskItem(taskValue) {
    var liItem = document.createElement('li');
    var input = document.createElement('input');
    var label = document.createElement('label');
    var span = document.createElement('span');
    var task = document.createTextNode(taskValue);
    var button = document.createElement('button');

    input.type = "checkbox";
    input.name = "TaskItem" + itemCount;
    input.id = "TaskItem" + itemCount;
    label.htmlFor = "TaskItem" + itemCount;
    button.className = "remove-task";

    label.appendChild(span);
    label.appendChild(task);
    liItem.appendChild(input);
    liItem.appendChild(label);
    liItem.appendChild(button);

    return liItem;
  }
  
}
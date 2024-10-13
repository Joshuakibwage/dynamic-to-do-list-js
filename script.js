
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementByiD('task-list')
      
    function addTask(){
        
        let taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('Enter a task!');
            return;
        }
        let task = document.createElement('li');
        task.textContent = taskText;

        let rmvButton = document.createElement('button');
        rmvButton.textContent = "Remove";
        rmvButton.classList.add ="remove-btn";

        rmvButton.onclick = function(){
            taskList.removeChild(task);

        };
        task.appendChild(rmvButton);
        taskList.appendChild(task);

        taskInput.value = '';
    }
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            addTask();
        }
    });
 
});


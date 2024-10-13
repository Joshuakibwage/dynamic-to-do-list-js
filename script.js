
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementByiD('task-list')
      
    function addTask(){
        
        let taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('Enter a task!');
            return;
        }
        let task = document.createElement('li')
        textContent = taskText;

        let rmvButton = document.createElement('Remove')
        rmvButton.textContent = "Remove";
        rmvButton.className = "remove-btn";

        rmvButton.onclick = function(){
            taskList.removeChild(task);
            
        }
    }
 
});


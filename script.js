
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementByiD('task-list')
      
    function addTask(){
        
        let taskTest = taskInput.value.trim();
        if(taskTest === ''){
            alert('Enter a task!');
            return;
        }
        let task = document.createElement('li')
        textContent = taskTest;

        let rmvButton = document.createElement('Remove')
        rmvButton.textContent = "Remove";
        rmvButton.className = "remove-btn";

        rmvButton.onclick = function(){
            taskList.child = '';
        }
    }
 
});


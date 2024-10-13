
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
    
    }
 
});


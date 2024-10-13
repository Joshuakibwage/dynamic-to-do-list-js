
document.addEventListener('DOMContentLoaded', function() {

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 

        function addTask(taskText, save = true) {

        
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
    }
        
    const addButton = document.getElementById('add-task-btn')
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

document.addEventListener('DOMContentLoaded', () =>{
const taskBox= document.getElementById('taskBox');
const rescheduleBtn= document.getElementById('rescheduleBtn');
const icons= document.getElementById('icons');

let tasks=[];

taskBox.addEventListener('keypress', (e) =>{
    if (e.key=== 'Enter') {
        let taskText= taskBox.value.trim();
        if (taskText!=='') {
            const newTask={
                id: Date.now(),
                text:taskText,
                Completed: false
            }
            tasks.push(newTask);
            saveTasks();
            taskBox.value='';
            
            
    }else{
        return
    }
}});
//     let addbtn=document.createElement('button')
//     // alert('taskBox clicked');
//     // taskBox.innerHTML= '';
//     // let task= document.createElement('input');
//     // let taskText= task.value.trim();
//     // if (taskText==='') {
//     //     return
//     // }else{
//     //     tasks.push(taskText);
//     // }
//     // console.log(tasks);
    
    
// })
function saveTasks(){
   localStorage.setItem('tasks', JSON.stringify(tasks)); 
}
function renderTask(task){
    
}
    
    
});
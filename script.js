document.addEventListener('DOMContentLoaded', () =>{
const taskBox= document.getElementById('taskBox');
const rescheduleBtn= document.getElementById('rescheduleBtn');
const icons= document.getElementById('icons');

let tasks=[];
taskBox.addEventListener('keypress', (e) =>{
    if (e.key=== 'Enter') {
        let taskText= taskBox.value.trim();
        if (taskText!=='') {
            taskBox.value='';
            tasks.push(taskText);
            console.log(tasks);
            
    }else{
        console.log(tasks);
        
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
    
    
});
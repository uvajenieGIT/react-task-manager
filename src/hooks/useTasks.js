import { useState, useEffect } from "react";

export function useTasks(){
    const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : []
})


useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks])



function addTask(text){
  setTasks(prev => [
    ...prev,
    {
      id:Date.now(),
      text,
      completed:false
    }
    
  ])
  console.log(tasks);
}

function deleteTask(id){
  setTasks(prev => prev.filter(task => task.id !== id));
}


function toggleTask(id){
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task
    )
  )
}


function taskUpdate(id, newText){
  if(!newText.trim()) return;

  setTasks(prev => 
    prev.map(task =>
      task.id === id ? {...task, text: newText.trim()} : task
    )
  )

  
}



return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    taskUpdate
  };
}
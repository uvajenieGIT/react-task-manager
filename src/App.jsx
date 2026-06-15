
import './App.css'
import { useState, useEffect } from 'react'
import TaskForm from "./components/TaskForm/TaskForm"
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import { useTasks } from './hooks/useTasks'
function App() {

const {tasks, addTask, deleteTask, toggleTask, taskUpdate} = useTasks();
const totalCount = tasks.length
const completedCount = tasks.filter(task => task.completed).length
const activeCount = tasks.length - completedCount
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
})

const [filter, setFilter] = useState("all")


useEffect(() => {
  localStorage.setItem("theme", theme)

  document.body.className = theme;
},[theme])

function toggleTheme(){
  setTheme(prev => prev === "light" ? "dark": "light")
}

const filteredTasks = tasks.filter(task => {
  if(filter === "active") return !task.completed;
  if(filter === "completed") return task.completed;
  return true;
})


  return (
    <>
    <div className="container">
       <TaskForm theme={toggleTheme} onAddTask={addTask}></TaskForm>
       <TaskFilter
        currentFilter={filter}
         onFilterChange={setFilter}
         total={totalCount}
         active={activeCount}
         completed={completedCount}
         ></TaskFilter>
       <TaskList onUpdateTask={taskUpdate} onToggleTask={toggleTask} onRemoveTask={deleteTask} tasks={filteredTasks}></TaskList>
    </div>
   
    </>
  )
}

export default App

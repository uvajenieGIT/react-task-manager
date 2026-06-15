import "./TaskList.css"
import TaskItem from "../TaskItem/TaskItem";
const TaskList = ({tasks, onRemoveTask, onToggleTask, onUpdateTask}) => {
    if(tasks.length == 0){
        return <div className="empty">There nothing here...</div>
    }
    return ( 
        <>
        <div className="task_container">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={onToggleTask} deleteTask={onRemoveTask} editTask={onUpdateTask}></TaskItem>
            ))}
        </div>

        </>
     );
}
 
export default TaskList;
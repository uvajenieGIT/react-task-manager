import "./TaskItem.css"
import { useState } from "react";
const TaskItem = ({task, deleteTask, toggleTask, editTask}) => {

    const [editing, setEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)

    function handleSave(){
         editTask(task.id, editText)
         setEditing(false)
    }

    return ( 
        <div className="item_container">
        <div className={task.completed ? "task completed" : "task"}>
            {editing ? (
                <input 
                className="inputCard"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                type="text" />
            ) : (
                <p>{task.text}</p>
            )}
        </div>
        <button onClick={() => deleteTask(task.id)} className="removeBTN">Remove</button>
        {editing ? (
            <button onClick={handleSave} className="editBtn">Save</button>
        ) : (
            <button onClick={() => setEditing(true)} className="editBtn">Edit</button>
        )}
        <button onClick={() => toggleTask(task.id)} className="complete">Completed</button>
        </div>
     );
}
 
export default TaskItem;
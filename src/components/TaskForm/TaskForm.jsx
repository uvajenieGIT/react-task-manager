import "./TaskForm.css"
import { useState } from "react";
const TaskForm = ({onAddTask,theme}) => {
    const [text, setText] = useState("")
    function handleAdd() {

        if(!text.trim()) return;

        onAddTask(text)

        setText("")

    }
    return (
        <>
            <div className="form_container">
                <input
                type="text"
                placeholder="Enter Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="buttonAdd"
            onClick={handleAdd}
            >
                Add
            </button>

            <button onClick={theme} className="theme">Theme</button>
            </div>
        </>
    );
}

export default TaskForm;
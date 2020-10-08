import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from "../context/TaskListContext";

const TaskFrom = ({ task }) => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    const [title, setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(editItem === null) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(()=> {
        if(editItem!==null) {
            setTitle(editItem.title);
            console.log(editItem);
        } else {
            setTitle("");
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form" >
            <input type="text" className="task-input" placeholder="Add task..." required onChange={handleChange} value={title} />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    Add task
                </button>
                <button onClick={ clearList } className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskFrom;
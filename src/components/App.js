import React from 'react';
import "../App.css";
import TaskList from "./TaskList";
import TaskListContextProvider from '../context/TaskListContext';
import TaskFrom from './TaskForm';

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <TaskFrom />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    )
}

export default App;
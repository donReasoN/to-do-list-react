import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDoneTasks, removeTask}) => (

    <ul className="tasks">
        {tasks.map(task => (
        <li 
            key={task.id}
            className={`tasks__item${
                task.done && hideDoneTasks 
                ? " tasks__item--hidden" 
                : ""}`}>
            
            <button className="tasks__button tasks__button--done">
                <span className={`tasks__icon ${task.done ? "fas fa-check" : ""}`}></span>
            </button>

            <span className={`tasks__content ${task.done ? "task-content--done" : ""}`}>{task.content}</span>

            <button 
                onClick={() => removeTask(task.id)}
                className="tasks__button tasks__button--remove"
            >
                <span className="tasks__icon fas fa-trash-alt"></span>
            </button>
        </li>
        ))}
    </ul>
);

export default Tasks;
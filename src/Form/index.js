import React, { useState } from "react";
import "./style.css"

const Form = ({buttonName, addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input 
                value={newTaskContent} 
                onChange={(event) => setNewTaskContent(event.target.value)}
                placeholder="What do you want to do?"
                className="form__input" 
                type="text"/>
            <button className="form__button">{buttonName}</button>
        </form>
    )
}
export default Form;
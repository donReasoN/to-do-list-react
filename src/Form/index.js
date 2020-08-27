import React from "react";
import "./style.css"

const Form = ({buttonName}) => (
    <form className="form">
        <input 
            placeholder="What do you want to do?"
            className="form__input" 
            type="text"/>
            
        <button className="form__button">{buttonName}</button>
    </form>
);

export default Form;
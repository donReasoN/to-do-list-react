import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks, toogleHideDoneTasks}) => {
    
    if(!tasks.length) {
        return null;
    };

    return (
        <div className="buttons">
            <button 
                onClick={toogleHideDoneTasks}
                className="button toggleHideTasks">{hideDoneTasks ? "Show completed" : "Hide completed"}
            </button>
            
            <button 
                className="button toggleDoneTasks"
                disabled={tasks.every(({ done }) => done)}
                >Complete all
            </button>
        </div>
    );
};
    


export default Buttons;
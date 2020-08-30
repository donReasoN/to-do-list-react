import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDoneTasks, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Eat breakfast", done: true },
    { id: 2, content: "Do exercises", done: false },
  
  ]);

  const toogleHideDoneTasks = () => { 
    setHideDoneTask(hideDoneTasks => !hideDoneTasks);
  }

  const markAllTaskDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  }
  
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  } 

  const toogleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }));
  } 


  return (
    <Container>
        <Header title="To-do list"/>
        <Section 
          title="Add task"
          sectionBody={<Form buttonName="Add task"/>}
        />
        <Section 
          title="To-do list" 
          extraHeaderContent={
            <Buttons 
              tasks={tasks} 
              hideDoneTasks={hideDoneTasks} 
              toogleHideDoneTasks={toogleHideDoneTasks}
              markAllTaskDone={markAllTaskDone}
            />}

          sectionBody={
            <Tasks 
              tasks={tasks} 
              hideDoneTasks={hideDoneTasks}
              removeTask={removeTask}
              toogleTaskDone={toogleTaskDone}
            />}
        />
    </Container>
  );
};

export default App;

import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Eat breakfast", done: true },
  { id: 2, content: "Do exercises", done: false },
];



function App() {
  const [hideDoneTasks, setHideDoneTask] = useState(false);
  
  const toogleHideDoneTasks = () => { 
    setHideDoneTask(hideDoneTasks => !hideDoneTasks);
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
            />} 
          sectionBody={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
        />
    </Container>
  );
};

export default App;

import { useState } from 'react';


import React from 'react';
import FormAddTask from './FormAddTask';
import TableForTasks from './TableForTasks';

const TodoMain = () => {
    // state turi buti virsuje
    // 1. kintamasis kuris saugoja state reiksme
    // 2. metodas, kuris atnaujina reiksme
    // 3. state pradine reiksme (use state skliaustuose nusirodme pradine reiksme)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "isplauti indus",
            isCompleted: false
        },
        {
            id: 2,
            text: "issiurbliuoti kamabri",
            isCompleted: true 
        },
        {
            id: 3,
            text: "nuplauti kompiuteri",
            isCompleted: false 
        }
    ]);

    const addTodoNewTask = (text) => {
        // turiu iskviesti setTasks metoda
        // turiu prideti nauja uzduoti i esamu uzduociu sarasa
        const temporaryVar = [...tasks, {text, isCompleted: false}]
        setTasks(temporaryVar);

    }


  return (
    <div>
        <TableForTasks tasks={tasks}/>
        <FormAddTask addTodoNewTask={addTodoNewTask}/>
    </div>
  )
}

export default TodoMain

import React from 'react';

import { useState} from 'react';
import Form from 'react-bootstrap/Form';

const FormAddTask = ({ addTodoNewTask }) => {

  const [inputValue, setinputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // jeigu nera ivesta reiksme i inputa returninam (iseinam)
    if (!inputValue) return;

    addTodoNewTask(inputValue);
    setinputValue('');


  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h3>New Task</h3></Form.Label>
          <Form.Control 
              type="text" 
              placeholder="Enter new Task..."
              value={inputValue}
              onChange={(event) => setinputValue(event.target.value)} 
              />
      
        </Form.Group>
      </Form>
    </div>
  )

}

export default FormAddTask
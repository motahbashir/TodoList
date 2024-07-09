import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
    



export const EditTodoForm = ({editTodo,task}) => {
  const[value,setValue] =useState(task.task)

  const handleSubmit = e =>{
    e.preventDefault();
   editTodo(value, task.id)
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
       <input type='text' className='todo-input'  value={value}
       placeholder='Updating Task'
        onChange={(e)=>setValue(e.target.value)}/>
     <button type='submit' className='todo-btn'>Update Task</button>
     
     </form>)
}




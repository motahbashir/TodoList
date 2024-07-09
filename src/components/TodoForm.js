import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
    



export const TodoForm = ({addTodo}) => {
  const[value,setValue] =useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value)
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
       <input type='text' className='todo-input'  value={value}
       placeholder='what is the task today'
        onChange={(e)=>setValue(e.target.value)}/>
     <button type='submit' className='todo-btn'>Add Task</button>
     
     </form>)
}

export default TodoForm
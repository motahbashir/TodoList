
import { useReducer, useState } from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import Todo from './Todo.js'

 

 export const ACTIONS ={ADD_TODO:'add-todo',TOGGLE_TODO:'toggle-todo',
  DELETE_TODO:'toggle-todo'
 

}
 

function reducer(todos, action){
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]
      case ACTIONS.Toggle_TODO:
        return todos.map(todo =>{
          if( todo.id===action.payload.id){
            return{...todo,complete: !todo.complete}
            
          }
          return todo
        })

        case ACTIONS.DELETE_TODO:
          return todos.filter(todo=> todo.id !== action.payload.id)
            

                  
 default:
  return todos
          }
        }

  
      

  

  function newTodo (name){
    return {id:Date.now(),name:name,complete:false}
  }


function App() {

  const[todos, dispatch]= useReducer(reducer,[])
  const[name,setName]=useState("")
  //const[count, setCount]=useState(0)

  function handleSubmit(e){
    e.preventDefault()
    dispatch ({type:ACTIONS.ADD_TODO, payload:{name:name}})
    setName('')
  }
  console.log(todos)
  return (
    <>
  <form onSubmit={handleSubmit}>
 
    <input type='text' value={name} onChange={e =>setName(e.target.value)}></input>
  </form>
    
    {todos.map(todo => {
     return < Todo key={todo.id } todo={todo} dispatch={dispatch}/>
    })}
    </>
    
  );
  
}
export default App;

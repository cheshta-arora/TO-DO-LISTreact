import React from 'react'
import {TodoItems}  from '../components/TodoItems';

 export const Todos = (props) => {
  let myStyle ={
    minHeight :"70vh" , 
    margin: "40px auto" 
  }
  return (
   <div className='container' style={myStyle}>
    <h3 className=' my-3'>Todos List</h3>
    {console.log(props.todos.length)}
    {console.log(props.todos)}
    {props.todos.length===0?<p>"No Todos to Display"</p>:
    props.todos.map((todo)=>{
      return(  <> <TodoItems todo={todo} key= {todo.sno} onDelete={props.onDelete}/> <hr/></>)
    })}
   
   </div>
  )
};


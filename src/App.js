
import Header from './components/Header';
import {Footer} from './components/Footer';
import{AddTodo} from './components/AddTodo';
import {Todos}  from './components/Todos';
import React , {useEffect, useState} from 'react';

function App() {
let initTodo  ;
if( localStorage.getItem("todos")===null){
  initTodo = [] ;
}
else{
  initTodo  = JSON.parse(localStorage.getItem("todos"));
}

 const  onDelete = (todo) =>{
    console.log("i am on delete", todo); 
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1 );
    setTodos(todos.filter((e)=>{
      return e!==todo;
    })) ; 
    localStorage.setItem("todos",  JSON.stringify(todos));
  } 
  const addtodo = (title, desc) =>{
   console.log("i am adding this todo" , title , desc) 

   let sno ;
   if(todos.length==0){
    sno=0; 
   } 
   else{
    sno = todos[todos.length-1].sno+1 ;
   }
   
   const myTodo = {
    sno: sno , 
    title :title , 
    desc : desc 
   }
     setTodos([...todos , myTodo]);
   console.log(myTodo); 
  }


  const [todos, setTodos] = useState (initTodo);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
  <>
  <Header title="My Todo List" searchBar={false}/>
  <AddTodo addTodo={addtodo}/>
  <Todos todos={todos} onDelete={onDelete }/>
  <Footer/>
 
  </>
  );
}

export default App;

import React, {useState, useCallback} from "react";
import "./style.css";
import  Todo from "./Todos"
export default function App() {

const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])

 function handleClick() {
   setCount(count +1)
 }

const addTodo = useCallback(() =>{
  setTodos([...todos, "new todo"])
}, [todos])

  return (
    <div>
    <button onClick={handleClick}>Click me</button>  
    {count}
    <Todo todos={todos} addTodo={addTodo} />
    
    </div>
  );
}

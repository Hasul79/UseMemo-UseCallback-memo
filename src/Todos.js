import React, {memo} from "react"

 function Todo({todos,addTodo}){
console.log("render")
  return (
    <div>
      {todos.map((todo,index) => <div key={index}>{todo}</div>)}
      Hello
   <button onClick={addTodo}>Add todo</button> 
    </div>
  )
}

export default memo(Todo)
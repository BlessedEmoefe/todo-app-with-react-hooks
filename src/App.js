import React, {useState} from "react"
import Todo from "./Todo"
import "./App.css"


const App = (params) => {
  const [Todos,setTodos] = useState([{
    text:'learn about React',
    isCompleted:false
  },
  {
    text:'Meet friend for lunch',
    isCompleted:false
  },
  {
    text:'Build a todo app',
    isCompleted:false
  }])

return(
  <div className='app'>
    <div className="todo-list">
    {Todos.map((todo,index)=> (<Todo key={index} index={index} todo={todo}   />)) }
    </div>
  </div>
)
  
}
export default App;
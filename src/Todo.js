import React from 'react';

const Todo = ({index,todo, completeTodo,removeTodo}) => {
   
    return(
        <div className="todo" style={{textDecoration:todo.isCompleted? "line-through" :''}}>
            {todo.text}
            <div>
                <button onClick={()=>completeTodo(index)}>Complete</button>
                <button onClick={()=>removeTodo(index)}>Delete Todo</button>
            </div>
        </div>
    )
}
export default Todo;
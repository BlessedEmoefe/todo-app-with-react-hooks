import React from 'react';

const Todo = ({index,todo}) => {
    return(
        <div className="todo">
            {todo.text}
        </div>
    )
}
export default Todo;
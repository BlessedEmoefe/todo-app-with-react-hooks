import React, { useState } from 'react';
import "./App.css"

const TodoForm = ({addTodo}) => {
    const [value,setValue] =useState('')

     const handleSubmit= (e)=>{
        e.preventDefault();
        if(!value)return;
        addTodo(value);
        setValue('')
        }


    return(
        <form onSubmit={handleSubmit} >
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="input"/>
        </form>
    )
}
export default TodoForm;
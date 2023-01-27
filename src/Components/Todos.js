import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function Todos() {

    const [todoName,setTodoName] = useState("");
    const [todoList, setTodoList] = useState([]);



    const inputChangeHandler =(event)=>{
        setTodoName(event.target.value)
    }

    const todoAddHandler = () =>{
        setTodoList(todoList.concat(todoName));
    };

    return (
        <>
            <input type="text" placeholder = "Todo" onChange= {inputChangeHandler} value={todoName}>
            </input>
            <button onClick={todoAddHandler}>Add</button>

            <ul>
                {todoList.map(todo=>(
                    <li key={todo}>{todo} <button>Remove</button></li>
                ))}
            </ul>
        </>
    )
}

export default Todos
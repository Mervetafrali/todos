import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List';
import '../App.css';

export default function TODOs() {
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        console.log(todos);
    },[todos])
    return (
        
        <div class="todoapp">       
	        <header class="header">
		        <h1>TODOS</h1>
	        </header>
            <Form addTodo={setTodos} todos={todos}/>
            <List updateTodo={setTodos} todos={todos}/>
            
        </div>

    )
}

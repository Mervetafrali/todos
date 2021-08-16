import React, { useEffect,useState } from 'react'
import '../../App.css';
function List({updateTodo,todos}) {

    const[filterText,setFilterText]=useState("");

    useEffect(()=>{
    },[todos]);

    const onSubmit=(i,todo)=>(e)=>{
        e.preventDefault();
        if(todo.checked){
            todo.checked= false;
        }else{
            todo.checked=true;
        }
        todos[i].fullString=todo.fullString;
        updateTodo([...todos])
    };

    const deleteItem=(id)=>(e)=>{
        const newArr=[...todos];
        newArr.splice(id,1);
        updateTodo([...newArr]);
    };

    const itemCount= ()=>{
        let i=0;
        todos.forEach(todo=>{
            if(!todo.checked) i++
        }
        )
        return i;
    };
  function filterClick(value){
    setFilterText(value)
  };
  const filtered=todos.filter((item)=>{
      return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toString().toLocaleLowerCase())
      );
  })
 
    return (<div>
       
        <ul class="todo-list">
            {
                filtered.map((todo,i)=> <div>
                     
                    <li class={todo.checked ?"completed" :"active"}  key={i}>                 
                    <label onClick={onSubmit(i,todo)}>{todo.fullString}</label>  
                    <span><button class="destroy" onClick={deleteItem(i)}></button></span>
                    </li> 
                    </div>)
            }
            
        </ul>
        <div class="footer">
           <span class="todo-count">
			<strong>{itemCount()} </strong>
			items left
		    </span>
            <ul class="filters">
			<li>
				<button class="footerButton" onClick={(e)=>filterClick("")}>All</button>
			</li>
			<li>
            <button class="footerButton" onClick={(e)=>filterClick(false)}>Active</button>
				
			</li>
			<li>
            <button class="footerButton" onClick={(e)=>filterClick(true)}>Completed</button>
				
			</li>
		</ul>

		
        </div>
    </div>)
    
}
export default List;
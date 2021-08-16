import {useState,useEffect} from 'react';
import '../../App.css';
function Form({addTodo,todos}) {
    const [form, setForm] = useState({checked:false,fullString:""});

    useEffect(()=>{
        setForm({checked:false,fullString:""})
    },[todos]);

    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.todo===""){
            return false;
        }
        
        form.checked=false;

        addTodo([...todos,form])
    }
    return (
       <form  onSubmit={onSubmit}>
           <div>
               <input  class="new-todo" placeholder="What needs to be done?"
               name="fullString"
               placeholder="To Do"
               value={form.fullString}
               onChange={onChangeInput}/>
               
           </div>
            <div>
            
            </div>

       </form>
    )
}
export default Form;
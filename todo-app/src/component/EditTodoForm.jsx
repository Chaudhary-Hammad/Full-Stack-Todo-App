import React, {useState} from 'react'


const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]= useState(task.task);
    const handleSubmet = e =>{
         e.preventDefault();
          editTodo(value,task.id);
         setValue("")
       
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmet}>
        <input type="text" className='todo-input' value={value} placeholder='Update Task'
         onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )

}

export default EditTodoForm
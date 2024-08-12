import React, { useState } from 'react'

const Todo = () => {

  const [todos, setTodos] = useState([])
  const [val, setVal] = useState('')

const [edit, setEdit] = useState(null)
  const addTodo =()=>{

if(edit !==null){



    
    const updatedList =    todos.map((todo,index) =>  index ===edit ? val: todo)

   setTodos(updatedList)
   setEdit(null)
}
else{



    setTodos([...todos, val])
}
    setVal('')
  }


  const deleteTodo=(id)=>{

    const todoTobeDeleted = todos.filter((todo,index) => index !==id)
    setTodos(todoTobeDeleted)

    console.log('delete')
  }

  const updateTodo =(index)=>{

    console.log("UPDATE")
  //  const TobeUpdated= todos.find((todo,id)=> index ===id)
  //  setVal(TobeUpdated)
  setVal(todos[index])
   setEdit(index)
  }


  // const UpdateTodos =()=>{


  // }

  return (
    <div>Todo
      <input type='text' value={val}  onChange={(e) => setVal(e.target.value)} />
      <button onClick={addTodo}>{edit !==null ? 'Update': 'Add'}</button>
      {/* <button onClick={UpdateTodos}>Update Todo</button> */}
      <ul>{todos.map((todo,index) =>(
        <li key={index}>
          {todo}
          <button onClick={()=> deleteTodo(index)}>delete</button>
          <button onClick={()=> updateTodo(index)}>update</button></li>
      ))}</ul>
    </div>
  )
}

export default Todo
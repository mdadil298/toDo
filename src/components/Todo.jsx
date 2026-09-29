import React, { useState } from 'react'

function Todo() {
  const [todolist, setTodolist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const toname = e.target.toname.value
    // alert(toname)
    const exists = todolist.some((value) => value.value === toname)
        // alert(exists)
    if (!exists) {
      const finalTodolist = [...todolist, { value: toname, completed: false }]
      setTodolist(finalTodolist)
       e.target.reset()  
   
    } else {
      alert('Name already exist....')
    }
  }

  const toggleStatus = (indexNumber) => {
    const finalTodolist = todolist.map((value, index) =>
      index === indexNumber ? { ...value, completed: !value.completed } : value
    )
    setTodolist(finalTodolist)
  }

  const remaining = todolist.filter((value) => !value.completed).length

  const list = todolist.map((value, index) => {
    return (
      <TodoListvalue
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
        onToggle={toggleStatus}
      />
    )
  })

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="toname" placeholder='Enter To Do...' /> <button>Save</button>
      </form>
      <p>{remaining} : {remaining === 1 ? 'task' : 'tasks'} remaining</p>
      <ul>{list}</ul>
    </div>
  )
}

export default Todo

function TodoListvalue({ value, indexNumber, todolist, setTodolist, onToggle }) {
  const deletRow = () => {
    const finalData = todolist.filter((value, index) => index != indexNumber)
    // alert(indexNumber)
    // console.log(finalData)
    setTodolist(finalData)
  }

  return (
    <li className={value.completed ? 'completetodo' : ''}>
      <input
        type="checkbox"
        checked={value.completed}
        onChange={() => onToggle(indexNumber)}
      /> 
      <span style={{ textDecoration: value.completed ? 'line-through' : 'none' }}>
        {indexNumber + 1} : {value.value}
      </span> 
      <span className='delete-btn' onClick={deletRow}>&times;</span>
    </li>
  )
}

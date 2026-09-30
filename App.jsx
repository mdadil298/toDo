import { useState } from 'react'
import InputText from './components/InputText'
import TaskCounter from './components/TaskCounter'
import List from './components/List'

function App() {
  const [todolist, setTodolist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const toname = e.target.toname.value
    //  alert(toname)
    const exists = todolist.some((value) => value.value === toname)
    // console.log(exists)
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

  return (
    <div>
      <h1>Todo List</h1>
      <InputText onSubmit={handleSubmit} />
      <TaskCounter remaining={remaining} />
      <List
        todolist={todolist}
        setTodolist={setTodolist}
        onToggle={toggleStatus}
      />
    </div>
  )
}

export default App

function ListItem({ value, indexNumber, todolist, setTodolist, onToggle }) {
  const deletRow = () => {
    const finalData = todolist.filter((value, index) => index != indexNumber)
    // console.log(finalData)
    setTodolist(finalData)
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={value.completed}
        onChange={() => onToggle(indexNumber)}
      /> 
      <span style={{ textDecoration: value.completed ? 'line-through' : 'none' }}>
        {indexNumber + 1} : {value.value}
      </span> 
      <span className="delete-btn" onClick={deletRow}>&times;</span>
    </li>
  )
}

export default ListItem

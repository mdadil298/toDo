import ListItem from './ListItem'

function List({ todolist, setTodolist, onToggle }) {
  const list = todolist.map((value, index) => {
    return (
      <ListItem
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
        onToggle={onToggle}
      />
    )
  })

  return <ul>{list}</ul>
}

export default List

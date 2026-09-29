function TaskCounter({ remaining }) {
  return (
    <p>
      {remaining} : {remaining === 1 ? 'task' : 'tasks'} remaining
    </p>
  )
}

export default TaskCounter

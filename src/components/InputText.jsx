function InputText({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="toname" placeholder="Enter To Do..." /> <button>Save</button>
    </form>
  )
}

export default InputText

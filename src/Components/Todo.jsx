import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./TodoStyle.css"

import { useState, useEffect } from "react"

const Todo = () => {
  const [allTodos, setAllTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [todoDescription, setTodoDescription] = useState("")

  // adding todo
  const handleAddTodo = () => {
    let TodoItem = {
      title: todoTitle,
      description: todoDescription
    }
    let todo = [...allTodos]
    todo.unshift(TodoItem)
    setAllTodos(todo)
  }
  return (
    <div className="todo-wrapper">
      <div className="todo">
        <h2>MyTodo</h2>
        <hr />
        <form action="">
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" placeholder="what's the title?" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="desctiption">Description:</label>
            <input type="text" name="desctiption" id="desctiption" placeholder="what's the desctiption?" value={todoDescription} onChange={(e)=>setTodoDescription(e.target.value)}/>
          </div>
          <div className="input-field add-btn">
            <button type="button" onClick={handleAddTodo}>Add</button>
          </div>
        </form>
        <div className="task">
          {allTodos.map((item, index)=>{
            return(
              <li key={index}>
                <div className="task-name">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="task-modify-btn">
                  <IoMdCheckmarkCircleOutline size={20} />
                  <CiEdit size={20} />
                  <MdDelete size={20} />
                </div>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo
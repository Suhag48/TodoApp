import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./TodoStyle.css"

import { useState, useEffect } from "react"

const Todo = () => {
  return (
    <div className="todo-wrapper">
      <div className="todo">
        <h2>MyTodo</h2>
        <hr />
        <form action="">
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" placeholder="what's the title?"/>
          </div>
          <div className="input-field">
            <label htmlFor="desctiption">Description:</label>
            <input type="text" name="desctiption" id="desctiption" placeholder="what's the desctiption?"/>
          </div>
          <div className="input-field add-btn">
            <button type="button">Add</button>
          </div>
        </form>
        <div className="task">
          <li>
            <div className="task-name">
              <h3>Title</h3>
              <p>description</p>
            </div>
            <div className="task-modify-btn">
              <IoMdCheckmarkCircleOutline size={20} />
              <CiEdit size={20} />
              <MdDelete size={20} />
            </div>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Todo
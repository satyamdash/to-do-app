import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const AddTask = () => {
        if (task.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: task,
                completed: false
            }
            setTasks([...tasks, newTask]);
            setTask('');
        }
    }

    const DeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const editTask = (id) => 
    {
        const newTask = prompt('Edit task:');
        if (newTask !== null && newTask.trim() !== '') {
            setTasks(tasks.map((task) => task.id === id ? {...task, text: newTask} : task));
        }
    }

  return (
    <div className="todo-app">
      <input
        className="todo-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="todo-submit" onClick={AddTask}>Add</button>
      <ul className="todo-list">
        {tasks.map((task, index) => (
            <li key={index} className="todo-item">
                <span className="todo-text">{task.text}</span>
                <div className="todo-actions">
                    <button className="todo-delete" onClick={() => DeleteTask(task.id)}>Delete</button>
                    <button className="todo-edit" onClick={() => editTask(task.id)}>Edit</button>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

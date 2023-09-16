import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isComplete: false }]);
      setNewTask('');
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function markTaskComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTasks(newTasks);
  }

  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <h1 style={{display:"flex",justifyContent:"center",color:"blue"}}>Todo List</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <form onSubmit={addTask}  >
        <label>
          New Task:
          <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
        </label>
        <button type="submit" style={{marginLeft:3}}>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.isComplete} onChange={() => markTaskComplete(index)} />
            {task.isComplete ? <del>{task.text}</del> : task.text}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
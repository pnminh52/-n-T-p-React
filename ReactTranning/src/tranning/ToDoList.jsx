import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault(); 
    const trimmed = input.trim();
    if (!trimmed) {
      alert('Vui lòng nhập công việc');
      return;
    }
    setTasks([...tasks, trimmed]);
    setInput('');
  };

  const deleteTodo = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Đây là Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Nhập vào công việc cần làm"
        />
        <button type="submit">Thêm</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

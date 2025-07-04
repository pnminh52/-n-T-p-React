import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const trimmed = input.trim();
    // Hàm trim sẽ loại bỏ khoảng trắng ở đầu và cuối chuỗi
    // kiểm tra nếu chỉ nhập dấu cách thì vẫn sẽ validate là chưa nhập gì
    if (!trimmed) {
      alert("Không được bỏ trống~");
      return;
    }
    setTasks([...tasks, trimmed]);
    //Toán tử spread
    setInput("");
    //Xóa input sau khi thêm thành công
  };

  const deleteTodo = (id) => {
    const newTasks = tasks.filter((_, i) => i !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Đây là todolist</h1>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Thêm</button>

      <ul>
        {tasks.map((task, id) => {
          return (
            <li key={task}>
              {task}
              <button onClick={() => deleteTodo(id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

import React from "react";
import { Link } from "react-router-dom";

const RouterPath = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Welcome to the React Tranning ground</h1>
      <p>Chọn trang bạn muốn truy cập:</p>
      <ul>
        <li>
          <Link to="/todo">📝 ToDo List</Link>
         
        </li>
        <li>
        <Link to="/toantu">Toán Tử</Link>
        </li>
      </ul>
    </div>
  );
};

export default RouterPath;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterPath from './tranning/RouterPath';
import ToDoList from './tranning/ToDoList';
import ToanTu from './tranning/ToanTu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterPath />} />
      <Route path="/todo" element={<ToDoList />} />
      <Route path='/toantu' element={<ToanTu/>}/>
    </Routes>
  );
};

export default App;

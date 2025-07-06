import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterPath from './tranning/RouterPath';
import ToDoList from './tranning/ToDoList';
import ToanTu from './tranning/ToanTu';
import CounterApp from './tranning/CounterApp';
import FetchAPIRenderUsersById from './tranning/FetchAPIRenderUsersById';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterPath />} />
      <Route path="/todo" element={<ToDoList />} />
      <Route path='/counter' element={<CounterApp/>}/>
      <Route path='/toantu' element={<ToanTu/>}/>
      <Route path='/API' element={<FetchAPIRenderUsersById/>}/>

    </Routes>
  );
};

export default App;

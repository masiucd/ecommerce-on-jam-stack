import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Tasks from './components/tasks/Tasks';
import AddBtn from './components/layout/AddBtn';
import AddTask from './components/tasks/AddTask';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddTask />
        <Tasks />
      </div>
    </>
  );
}
export default App;

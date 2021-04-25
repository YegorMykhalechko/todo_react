import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {

  const arrToDoList = ['Run React', 'Build App'];
  return (
    <ul>
      <li>{arrToDoList[0]}</li>
      <li>{arrToDoList[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>ToDo App</h1>
  );
};

const SearchPannel = () => {
  const typeSearch = 'Start Search'
  const searchStyle = {
    fontSize: '20px',
  }
  return (
    <input style ={searchStyle} placeholder={typeSearch}></input>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPannel />
      <ToDoList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

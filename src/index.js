import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import ToDoList from './components/ToDoList';

const App = () => {
  const toDoData = [
    { label: 'Drink Coffe', important: false },
    { label: 'Drink More Coffe', important: true },
    { label: 'Drink More More Coffe', important: false },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPannel />
      <ToDoList todos = {toDoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

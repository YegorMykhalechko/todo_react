import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import ToDoList from './components/ToDoList';
import ItemFilter from './components/ItemFilter';
import './index.css';

const App = () => {
  const toDoData = [
    { label: 'Drink Coffe', important: false, id: 1 },
    { label: 'Drink More Coffe', important: true, id: 2 },
    { label: 'Drink More More Coffe', important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPannel />
        <ItemFilter />
      </div>
      <ToDoList todos={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

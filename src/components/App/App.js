import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPannel from '../SearchPannel/SearchPannel';
import ToDoList from '../ToDoList/ToDoList';
import ItemFilter from '../ItemFilter/ItemFilter';
import './App.css';

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

export default App;
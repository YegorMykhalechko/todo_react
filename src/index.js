import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import ToDoList from './components/ToDoList';

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

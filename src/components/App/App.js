import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPannel from '../SearchPannel/SearchPannel';
import ToDoList from '../ToDoList/ToDoList';
import ItemFilter from '../ItemFilter/ItemFilter';
import AddItem from '../AddItem/AddItem';
import './App.css';


export default class App extends Component {

  constructor() {
    super();

    this.maxId = 1;

    this.state = {
      toDoData: [
        this.createItem('Drink coffe'),
        this.createItem('Drink more coffe'),
        this.createItem('Drink more more coffe')
      ],
      term: '',
      filter: 'all'
    };

    this.deletedItem = (id) => {
      this.setState(({ toDoData }) => {
        const index = toDoData.findIndex((el) => el.id === id);
        const newToDoData = [...toDoData.slice(0, index), ...toDoData.slice(index + 1)]
        return {
          toDoData: newToDoData
        }
      })
    };

    this.addItem = (text) => {
      const newItem = this.createItem(text)
      this.setState(({ toDoData }) => {
        const newToDoData = [...toDoData, newItem]
        return {
          toDoData: newToDoData
        }
      })
    }

    this.toggleProperty = (arr, id, propertyNames) => {
      const index = arr.findIndex((el) => el.id === id)
      const oldItem = arr[index]
      const newItem = { ...oldItem, [propertyNames]: !oldItem[propertyNames] }
      return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
    }

    this.toggleImportant = (id) => {
      this.setState(({ toDoData }) => {
        return {
          toDoData: this.toggleProperty(toDoData, id, 'important')
        }
      })
    }

    this.toggleDone = (id) => {
      this.setState(({ toDoData }) => {
        return {
          toDoData: this.toggleProperty(toDoData, id, 'done')
        }
      })
    }

    this.inputSearchHandler = (term) => {
      this.setState({ term })
    }

    this.filterChangeHandler = (filter) => {
      this.setState({ filter })
    }
  }

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { toDoData, term, filter } = this.state
    const visibleItem = this.filter(this.search(toDoData, term), filter);

    const doneCount = toDoData.filter((el) => el.done).length;
    const todoCount = toDoData.length - doneCount;
    return (
      <div className="todo-app" >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPannel
            inputSearchHandler={this.inputSearchHandler} />
          <ItemFilter
            filter={filter}
            filterChangeHandler={this.filterChangeHandler} />
        </div>
        <ToDoList todos={visibleItem}
          onDeleted={this.deletedItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone} />
        <AddItem
          onAdd={this.addItem} />
      </div>
    );
  };
};

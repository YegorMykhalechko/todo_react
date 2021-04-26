import React from 'react'

import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.css'

const ToDoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
            <li key={item.id} className='list-group-item'>
                <ToDoListItem {...itemProps} />
            </li>);
    });
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default ToDoList;
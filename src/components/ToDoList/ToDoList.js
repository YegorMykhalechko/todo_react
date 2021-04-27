import React from 'react'

import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.css'

const ToDoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item
        return (
            <li key={item.id} className='list-group-item'>
                <ToDoListItem {...itemProps}
                onDeleted={()=>onDeleted(id)}
                onToggleImportant={()=>onToggleImportant(id)}
                onToggleDone={()=>onToggleDone(id)} />
            </li>);
    });
    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default ToDoList;
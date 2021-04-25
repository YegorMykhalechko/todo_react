import React from 'react'

import ToDoListItem from './ToDoListItem'

const ToDoList = () => {
    return (
        <ul>
            <li><ToDoListItem label="Drink Coffe" /></li>
            <li><ToDoListItem label="Drink More Coffe" important /></li>
        </ul>
    );
};

export default ToDoList;
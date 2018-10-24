import React from 'react';

/**component presents the list of to-dos*/
const Todo = ({todo, remove}) => {
    // EachTodo
    return (<a href="#" className="list-group-item " onClick={() => {remove(todo.id)}}><span className="glyphicon glyphicon-remove pull-right"></span>{todo.text}</a>);
    /**remove is an event handler that will be called and delete when the list item is clicked. This method is handled on main component */

};

module.exports = Todo;

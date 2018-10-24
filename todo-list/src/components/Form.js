import React from 'react';

/**Functional components (a.k.a stateless components) are simple to manage and reason about when compared with class components.*/
const Form = ({addTodo}) => { /**Functional components receive props (which we've destructed with ES6) as arguments*/
    //Retrieve data from input
    let todoInput;

    // Return JSX
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(todoInput.value);
            todoInput.value = '';
        }}>
            {/*The value of the input is passed to the todoInput variable using ref*/}
            <input className="form-control col-md-12" ref={node => {
                todoInput = node;
            }} />
            <br />
        </form>
    );
};

module.exports = Form;

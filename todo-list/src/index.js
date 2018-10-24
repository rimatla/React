import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

/**child components*/
import Title from './components/Title';
import TodoList from './components/TodoList';
import Form from './components/Form';
console.clear();
console.log('boom');

/**main app component*/
/**heart of application by regulating props and managing state among its child components.*/

// grab TodoId
window.id = 0;
class TodoApp extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            allTodoData: []
        };

        /**Mock API is a good mock backend for building frontend apps that needs to consume an API in the future.*/
        this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
    }

    /**Lifecycle methods ps:cannot be used in a stateless component.*/
    componentDidMount(){
        // Make HTTP request with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                /**Once there is a response and the promise resolves, we update the state*/
                this.setState({allTodoData:res.data});
            });
    }
    // Add todoHandler
    addTodo(val){ /**take this method to Form.js*/
        // Assemble data
        const myTodo = {text: val};

        // Update/Post data
        axios.post(this.apiUrl, myTodo)
            .then((res) => {
                /**We do not have to reload data when there is a newTodo, we just push to the existing array*/
                this.state.allTodoData.push(res.data);
                this.setState({allTodoData: this.state.allTodoData});
            });
    }
    // Handle remove
    handleRemove(id){
        // Filter all todos
        const remainder = this.state.allTodoData.filter((todoItem) => {
            //filter all, except the one to be removed
            //if not equal to id, returns true
            return todoItem.id !== id;
        });
        // Update state with filter
        axios.delete(this.apiUrl+'/'+id)
            .then((res) => {
                this.setState({allTodoData: remainder});
            })
    }

    render(){
        // Render JSX
        return (
            <div>
                {/*todoCount*/}
                <Title todoCount={this.state.allTodoData.length}/>
                <Form addTodo={this.addTodo.bind(this)}/>
                <TodoList
                    todos={this.state.allTodoData}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}
render(<TodoApp />, document.getElementById('container'));

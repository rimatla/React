/**
 FORMS - CONTROLLED COMPONENTS

 - HTML form elements work a little bit differently from other DOM elements in React,
 because form elements naturally keep some internal state.
 For example, this form in plain HTML accepts a single name:

 <form>
     <label>
        Name:
        <input type="text" name="name" />
     </label>
     <input type="submit" value="Submit" />
 </form>

 - This form has the default HTML form behavior of browsing to a NEW PAGE when the user SUBMITS the form
 * */


/*
 If you want this behavior in React, it just works.
 But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.
 The standard way to achieve this is with a technique called CONTROLLED COMPONENTS.

 In React, mutable state is typically kept in the state property of components, and only updated with setState()
 We can make React state be the "single source of truth".
 An input form element whose value is controlled by React in the way bellow is called a "controlled component"
 */

//we can write the form as a controlled component:

/**Log the name when form is submitted */
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        //binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //With a controlled component, every state mutation will have an associated handler function.
    //This makes it straightforward to modify or validate user input
    handleChange(event) {
        //enforce that names are written with all uppercase letters
        this.setState({value: event.target.value.toUpperCase()});
        /**this.setState({value: event.target.value});*/
    }

    //process submit
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    //Since the value attribute is set on our form element, the displayed value will always be this.state.value
    //making the React state the source of truth.
    //Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
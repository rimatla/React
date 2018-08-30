/**
 Uncontrolled Components
 - In most cases, we recommend using controlled components to implement forms.
 - In a controlled component, form data is handled by a React component.
 - The alternative is UNCONTROLLED COMPONENTS, where form data is HANDLED by the DOM itself.

 - To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
 * */

//this code accepts a single name in an uncontrolled component
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('A name was submitted ' + this.input.value);
        e.preventDefault();
    }

    //In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM.
    //With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled.
    //To handle this case, you can specify a defaultValue attribute instead of value.

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        defaultValue="Bob Fritas"
                        type="text"
                        ref={(input) => this.input = input}/>
                    <input type="submit" value="submit"/>
                </label>
            </form>

            //Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea>
            //supports defaultValue.

        )
    }
}

ReactDOM.render (
  <NameForm/>,
  document.getElementById('root')
);

/**
 - Since an uncontrolled component keeps the source of truth in the DOM,
 - it is sometimes easier to integrate React and non-React code when using uncontrolled components.
 - It can also be slightly less code if you want to be quick and dirty.
 - Otherwise, you should usually use controlled components.
 * **/
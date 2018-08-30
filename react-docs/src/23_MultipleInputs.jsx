/**
 - Handling Multiple Inputs:
 - When you need to handle multiple controlled input elements,
 - you can add a name attribute to each element
 - and let the handler function choose what to do based on the value of
 - event.target.name
 */

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //let the handler function choose what to do based on the value of event.target.name
    handleInputChange(e) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            //ES6 'computed property name' syntax to update the state key corresponding to the given input name
            [name] : value
        });
    }

    render() {
        return (
            <form>
                <label>
                    <input
                     name="isGoing"
                     type="checkbox"
                     checked={this.state.isGoing}
                     onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}

ReactDOM.render (
  <Reservation/>,
  document.getElementById('root')
);

/**
 - It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component.
 - This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library.
 - In these situations, you might want to check out UNCONTROLLED COMPONENTS, an alternative technique for implementing input forms.
 * */
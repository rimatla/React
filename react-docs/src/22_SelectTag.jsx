/**
 The select Tag
 - n HTML, <select> creates a drop-down list
     <select>
         <option value="grapefruit">Grapefruit</option>
         <option value="lime">Lime</option>
         <option selected value="coconut">Coconut</option>
         <option value="mango">Mango</option>
     </select>

 - Coconut option is initially selected, because of the 'selected' attribute
 **/

//React, instead of using this 'selected' attribute,
//uses a value attribute on the ROOT select tag.
//This is more convenient in a controlled component because you only need to update it in ONE place

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        //binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
        alert('Your favorite flavor is '+ this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render (
    <FlavorForm/>,
    document.getElementById('root')
);

/**
 - Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly
 - they all accept a value attribute that you can use to implement a controlled component.
 */

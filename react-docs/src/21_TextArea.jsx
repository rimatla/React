/**
 The textarea Tag
 - In HTML, a <textarea> element defines its text by its children
    <textarea>
        Hello there, this is some text in a text area
    </textarea>

 - In React, a <textarea> uses a value attribute instead.
 - This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input
 */
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite Soccer Team.'
        };

        //Binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //set state to value inserted on input field
    handleChange(e) {
        this.setState({value: event.target.value});
    }

    //process submit
    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    {/*Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.*/}
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
);
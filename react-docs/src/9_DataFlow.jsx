/**
 - Do Not Modify State Directly
 - The only place where you can assign this.state is the constructor: ie constructor(props) { super(props); this.state = {code}}
 - Wrong: this.state.comment = 'Hello';
 - Correct, use SetState : this.setState({comment: 'Hello'});

 - State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
 * */

/**ONE WAY DATA FLOW*/
//The Data Flows Down
/**
 - A component may choose to pass its state down as props to its child components:
    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
 - This also works for user-defined components:
    <FormattedDate date={this.state.date} />
 -
 */

//The FormattedDate component would receive the date in its props and wouldn't know whether it came from the Clock's state, from the Clock's props, or was typed by hand
//This is called a "top-down" or "unidirectional" data flow

/**************************************************************************************************************************************************************************/

//FormattedDate Component
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

/**************************************************************************************************************************************************************************/

//Clock Component
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}
/**************************************************************************************************************************************************************************/
//create an App component that renders 3 <Clock>s:

//App Component
function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

/**************************************************************************************************************************************************************************/
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/**
 - Any state is always owned by some specific component
 - And any data or UI derived from that state can only affect components "below" them in the tree
 - In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time.
 - You can use stateless components inside stateful components, and vice versa.
 * */
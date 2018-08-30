/**- React events are named using camelCase, rather than lowercase.*/
/**************************************************************************************************************************************************************************/
//With JSX you pass a function as the event handler, rather than a STRING

//plain html/js syntax
/**
<button onclick="activateLasers()">Activate Lasers</button>
*/

//JSX/React
/**<button onClick={activateLasers}>Activate Lasers</button>
 */

/**************************************************************************************************************************************************************************/
//Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
//plain html/js syntax
/**
 <a href="#" onclick="console.log('The link was clicked.'); return false">Click me</a>
 */

//JSX/React
function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('Link was clicked!')
    }
    return (
        <a href="#" onClick={handleClick}>Click me</a>
    )
}

/**************************************************************************************************************************************************************************/
//When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class

/**ON - OFF Toggle Button*/
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    //handleClick() event handler as a method on its class
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
        <div className="handleEventsContainer">
            <div className="button">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        </div>
        )
    }

}

/**************************************************************************************************************************************************************************/
//One way to get around calling bind in the example of the constructor above:

class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

/**
 The problem with this syntax is that a different callback is created each time the LoggingButton renders.
 In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
 We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem.
 **/

/**************************************************************************************************************************************************************************/
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li>
                        <ActionLink/>
                    </li>
                    <li>
                        <Toggle/>
                    </li>
                    <li>
                        <LoggingButton/>
                    </li>
                </ul>
            </div>
        )
    }
}

/**************************************************************************************************************************************************************************/
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

/**
 - ATTENTION
 - In JavaScript, class methods are not bound by default.
 - If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
 - This is  how functions work in JavaScript.
 - Generally, if you refer to a method without () after it,
 ie: onClick={this.handleClick}, you should bind that method.
 */




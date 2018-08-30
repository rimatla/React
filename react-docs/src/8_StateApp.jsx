/**
 - PROPS ARE READ ONLY
 - React is pretty flexible but it has a single strict rule:
 - All React components must act like PURE FUNCTIONS
 (functions that do not attempt to change their inputs, and always return the same result for the same inputs) with respect to their props
 - Application UIs are dynamic and change over time.
 - State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
 - State is similar to props, but it is private and fully controlled by the component.
 * */

/**ps use 4_RenderElements.jsx as reference*/
//Make component truly reusable and encapsulated

/**1-Convert functional component to a CLASS COMPONENT*/
//ps: Now replace props to 'this.props'

/**2- Add State to the Clock Component*/
class Clock extends React.Component {
    //add a class constructor that sets the INITIAL STATE
    constructor(props) {
        //pass props to the base constructor
        super(props);
        this.state = {date: new Date()}
    }

    /**
     - Adding Lifecycle Methods to a Class
     - Make the Clock set up its own timer and update itself every second
     - These methods are called "lifecycle hooks".
     - The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
     */

    //set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.
    componentDidMount() {
        //save the timer ID right on this
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    //clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.
    componentWillUnmount() {
        //tear down the timer lifecycle hook
        clearInterval(this.timerID);
    }

    //implement tick() that runs every second
    tick(){
        //set state
        this.setState({
            date: new Date()
        })
    }

    //render
    render() {
        return(
            <div>
                <h1>What time is it?</h1>
                {/*Replace this.props.date with this.state.date */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


/**
 - SUMMARY
 1) When <Clock /> is passed to ReactDOM.render(),
 React calls the CONSTRUCTOR of the Clock component.
 Since Clock needs to display the current time, it initializes 'this.state with an object including the current time'. We will later update this state.


 2) React then calls the Clock component's render() method.
 This is how React learns what should be displayed on the screen.
 React then updates the DOM to match the Clock's render output.

 3) When the Clock output is inserted in the DOM,
 React calls the componentDidMount() lifecycle hook. Inside it,
 the Clock component asks the browser to set up a timer to call tick() once a second.

 4) Every second the browser calls the tick() method. Inside it,
 the Clock component schedules a UI update by calling setState() with an object containing the current time.
 Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen.
 This time, this.state.date in the render() method will be different, and so the render output will include the updated time.
 React updates the DOM accordingly.

 !!!
 5) If the Clock component is ever removed from the DOM,
 React calls the componentWillUnmount() lifecycle hook so the timer is stopped.
 * */


/**
 - SHOW/HIDE TOGGLE BUTTON EXAMPLE
 In rare cases you might want a component to hide itself even though it was rendered by another component.
 */

// To do this return null instead of its render output
function WarningBanner(props){
    // If the value of the prop is false, then the component does not render.
    if(!props.warn) {
        return null;
    }
    /*
     Returning null from a component's render method does not affect the firing of the component's lifecycle methods.
     For instance, componentWillUpdate and componentDidUpdate
     will still be called.
     */

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick =  this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    //<WarningBanner /> is rendered depending on the value of the prop called warn.
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
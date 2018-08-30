import React, {Component} from 'react';
//Ps: only class components contain state. Functional Components, do not.
class SearchBar extends Component {
    //set State
    constructor(props){ //initialize state and variables here
        super(props);
        this.state = { search: ''} //object properties
    }
    render(){
        //pass event handler to the element that you want it to monitor for events
        return (
            <div className="search-bar">
                <input
                    //controlled field/input (whose value is set by the state)
                    value={this.state.search}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
    //add event handlers
    onInputChange(search) {
        this.setState({search});
        this.props.onSearchTermChange(search);
    }
}

export default SearchBar;

/*
 - On 'index.js' We Refactored the youtube search into its own method
 - We passed the method down to SearchBar under the prop
 - SearchBar calls onInputChange()
 - onInputChange has two proposes, sets the state, and fire up the call back function onSearchTermChange
 */





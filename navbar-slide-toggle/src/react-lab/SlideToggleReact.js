import React from "react";


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: 'panel' };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ visible: this.state.visible == 'panel' ? 'panel visible' : 'panel' });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{!this.state.visible == 'panel' ? 'Slide up' : 'Slide down'}>cick</button>
                <div className={this.state.visible}>
                    <p>This is some dynamic content!</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        )
    }
}

export default Toggle;


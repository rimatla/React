import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';


const Child = () => (
    <div>
        <ul>
            <li>
                <ul>
                    <li>Dodge</li>
                    <li>Ford</li>
                    <li>Chevy</li>
                </ul>
            </li>
        </ul>
    </div>
)


class Examples extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.slideToggle();

        this.$sh = $(this.el);
        this.$sh.toggle();
    }

    componentWillUnmount() {
        this.$el.slideToggle('destroy');
        this.$sh.toggle('destroy');
    }

    handleShow = () => {
        const sh = findDOMNode(this.refs.show); //this is the ref passed 
        $(sh).toggle();
    }

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        //jquery
        $(el).slideToggle();
    }


    render() {
        return (
            <div>
                <img className="app-logo" src={logo} alt="" />
                <ul className="profileInfo">
                <li><span className="info-title">User Name:</span> Jenga Jay</li>
                </ul>

                {/* Let’s now set the reference naming ‘toggle’ mentioned earlier , in JSX. */}
                <ul className="profile-info additional-profile-info-list" ref="toggle">
                    <li><span className="info-email">Office-email</span>hdisf@id.com</li>
                </ul>

                {/* The div element where we will fire the ‘handleToggle’ on onClick. */}
                <div className="ellipsis-click" onClick={this.handleToggle}>
                    <i>+</i>
                </div>


                <div className="hide" ref="show">
                    <p>Hey ya</p>
                </div>
                <button onClick={this.handleShow}>Show</button>



                {/* React way */}
                <div>
                    <div onClick={this.toggleHidden}>Trucks</div>{!this.state.isHidden && <Child />}
                </div>
            </div>

        );
    }
}

export default Examples;

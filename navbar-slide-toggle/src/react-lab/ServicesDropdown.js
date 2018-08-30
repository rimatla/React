import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export class ServicesDropdown extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.slideToggle();
    }

    componentWillUnmount() {
        this.$sl.slideToggle('destroy');
    }

    handleToggle = (event) => {
        const el = findDOMNode(event); //this is the ref passed 
        $(el).slideToggle();
    }

    render() {
        return (
            <li>
                <a href="#!" onClick={() => this.handleToggle(this.refs.ptoggle)}>Services</a>
                <ul className="nav-dropdown" ref="ptoggle">
                    <li>
                        <a href="#!">Web Design</a>
                    </li>
                    <li>
                        <a href="#!">Web Development</a>
                    </li>
                    <li>
                        <a href="#!">Graphic Design</a>
                    </li>
                </ul>
            </li>
        )
    }

}
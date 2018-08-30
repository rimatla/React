import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import 'animate.css/animate.min.css';

    // CASE 1 Show Hide on click 
    class ServicesDropdown extends Component {
        constructor() {
            super();
            this.state = {
                dropdown: false,
                visible: 'panel'
            };
        }
        
        handleToggle = () => {
            this.setState({ visible: this.state.visible == 'panel' ? 'panel visible' : 'panel' }); 
        }
    
        handleClick = () => {
            if (!this.state.dropdown) {
                // attach/remove event handler
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }

            this.setState(prevState => ({
                dropdown: !prevState.dropdown,
            }));
        }

        handleOutsideClick = (e) => {
            // ignore clicks on the component itself
            if (this.node.contains(e.target)) {
                return;
            }
            this.handleClick();
        }

        render() {
            return (
                <li ref={node => { this.node = node; }}>
                    <a href="#!" onClick={this.handleClick}>Services +</a>
                    {this.state.dropdown && 
                    (
                        <ul className="nav-dropdown" ref={node => { this.node = node; }}>
                        <li><a href="#!">Web Design</a></li>
                        <li><a href="#!">Web Development</a></li>
                        <li><a href="#!">Graphic Design</a></li>
                        </ul>
                    
                    )}
                   
                </li>
            )
        }
    }

// CASE 2 SlideToggle With jQuery
class Portifolio extends Component {
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
                <a href="#!" onClick={() => this.handleToggle(this.refs.toggle)}>Portfolio</a>
                <ul className="nav-dropdown" ref="toggle">
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

class Navigation extends Component {
      render () {
          //Hamburger to X toggle
          return (
            <section className="navigation">
            <div className="nav-container">
                      <div className="brand animated lightSpeedIn">
                          <a href="#!">Logo</a>
                </div>
                <nav>
                    <div className="nav-mobile">
                        <a id="nav-toggle" className="" href="#!">
                            <span></span>
                        </a>
                    </div>
                    <ul className="nav-list" >
                        <li>
                            <a href="#!">Home</a>
                        </li>
                        <li>
                            <a href="#!">About</a>
                        </li>
                        <ServicesDropdown/>
                        <li>
                            <a href="#!">Pricing</a>
                        </li>
                        <Portifolio/>
                        <li>
                            <a href="#!">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
          )
      }
   
}
export default Navigation;
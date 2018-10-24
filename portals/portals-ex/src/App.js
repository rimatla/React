import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import './App.css'

// These two containers are siblings in the DOM (see index.html)
const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor(props) {
    super(props)

    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple modal components into the modal container.
    this.el = document.createElement('div')
    this.el.className = 'modal-root-wrapper'
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount(){
    // Remove the element from the DOM when we unmount
    modalRoot.removeChild(this.el)
  }

  render() {
    // Use a portal to render the children into the element
    return createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el
    )
  }
}

/* 
The Modal component is a normal React component, so we can
render it wherever we like without needing to know that it's
implemented with portals.
*/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  // show modal on page load
  // componentDidMount() {
  //   this.setState({ showModal: true })
  // }

  // methods
  handleShow = () =>{
    this.setState({ showModal: true })
  }

  handleHide = () => {
    this.setState({ showModal: false })
  }

  render() {
    //show or hide a modal on click
    const modal = this.state.showModal ? <Modal>
        <div className="modal">
          <div className="heading">
            <p>
              With a portal, we can render content into a different part of
              the DOM, as if it were any other React child.
            </p>
            <p>This is being rendered inside the #modal-root div.</p>
          </div>
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal> : null

    // main content   
    return <div className="app">
        <p>This div has overflow: hidden.</p>
        <button onClick={this.handleShow}>Show Modal</button>
        {modal}
      </div>
  }
}

export default App;

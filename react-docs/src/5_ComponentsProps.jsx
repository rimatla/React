/**
 - Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
 - Conceptually, components are like JavaScript functions. They accept IN arbitrary inputs ("props") and return OUT React elements describing what should appear on the screen.
 - The bellow two components are equivalent from React's point of view.
  */

/**FUNCTIONAL AND CLASS COMPONENTS*/

/**You can use an ES6 class to define a component.*/
//CLASS COMPONENT
/**
 class Welcome extends React.Component {
    render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
 */
//Classes have some additional features that we will discuss later. Until then, use functional components for their conciseness.

/**
- The simplest way to define a component is to write a JavaScript function.
- The function bellow accepts a single "props" object argument with data and returns a React element.
- We call such components "functional" because they are literally JavaScript functions.
*/
//FUNCTIONAL COMPONENT
function Welcome(props){
    return <h1>Hello {props.name}</h1>;

}
/**
- RENDERING A COMPONENT
- elements can also represent user-defined components.
- React sees an element representing a user-defined component (Welcome), it passes JSX attributes to this component as a single object. We call this object "props".
*/
const element = <Welcome name="Sara!" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);

/**
 - NOTE:
 - Always start component names with a capital letter.
 - <div/> is a DOM tag
 - <Welcome /> is a COMPONENT!
 */
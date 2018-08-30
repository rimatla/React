/**
 - Components can refer to other components in their output.
 - A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
 */

//create an 'App Component' that renders 'Tic Component' and  'Welcome Component' many times

//Welcome Component
function Welcome(props){
    return <h1>Hello {props.name}</h1>;
}

// Tic Component
function Tic(){
    return (
        <div>
            <h2>Today is {new Date().toLocaleDateString()}.</h2>
        </div>
    );
}

//App Component
function App(){
    return (
        <div>
            <Welcome name="Judite"/>
            <Welcome name="Judas"/>
            <Welcome name="Jucilei"/>
            <Tic/>
        </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

/**
 - NOTE:
 - Typically, new React apps have a single App component at the very top.
 - However, if you integrate React into an existing app, you might start bottom-up with a small component,
 - like Button and gradually work your way to the top of the view hierarchy.
 */
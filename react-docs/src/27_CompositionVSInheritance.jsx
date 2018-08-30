/**
 Composition vs Inheritance
 Reusable CODE

 - React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components
 - Bellow a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition
 */

/*
 Containment
 - Some components don't know their children ahead of time.
 - This is especially common for components like Sidebar or Dialog that represent generic "boxes"
 */

/*******************************************************************************************************************************
 */
//We recommend that such components use the special 'children' prop to pass 'children' elements directly into their output
function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

//This lets other components pass arbitrary children to them by nesting the JSX
function WelcomeDialog(){
    //Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

/*******************************************************************************************************************************
 */

//While this is less common, sometimes you might need multiple "holes" in a component.
//In such cases you may come up with your own convention instead of using children.
function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

//React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data.
function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}
/*******************************************************************************************************************************
 */

ReactDOM.render(
    //<WelcomeDialog/>,
    <App/>,
    document.getElementById('root')
);
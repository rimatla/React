/**
 CONDITIONAL RENDERING
 - In React, you can create distinct components that encapsulate behavior you need.
 - Then, you can render only some of them, depending on the state of your application.
 */
/**************************************************************************************************************************************************************************/

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

/**************************************************************************************************************************************************************************/

//create a Greeting component that displays either of these components depending on whether a user is logged in:
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}
/**************************************************************************************************************************************************************************/
ReactDOM.render(
    //Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);
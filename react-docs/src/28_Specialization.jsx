/**
   Specialization
 - Sometimes we think about components as being "special cases" of other components.
 - For example, we might say that a WelcomeDialog is a special case of Dialog.
 **/

//In React, this is also achieved by composition,
//where a more "specific" component renders a more "generic" one and configures it with props
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);

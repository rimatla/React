/**
 You may embed any expressions in JSX by wrapping them in curly braces.
 This includes the JavaScript logical && operator
 This syntax can be handy for conditionally including an element:
 *  */

//Inline If with Logical && Operator

//It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>You Have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    )
}

const messages = ['React','Re: React', 'Re:Re: React', 'Reply Message' ];

ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
);
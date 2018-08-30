/**
 - EXTRACTING COMPONENTS
 - Split components into smaller components
 * */

// formatDate()
function formatDate(date) {
    return date.toLocaleDateString();
}

// Avatar Component
function Avatar(props){
    return (
        <img className="Avatar"
            src= {props.user.avatarUrl}
            alt= {props.user.name}
        />
    )
}

// UserInfo Component
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

//Component accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.
const comment = {
    date: new Date(),
    text: 'I hope you\'re enjoying learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />,
    document.getElementById('root')
);

/**
 - NOTE:
 - Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.
 - A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar),
 - or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.
 * */

/*
 function Comment(props) {
     return (
     <div className="Comment">
         <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
         </div>
         <div className="Comment-text">
            {props.text}
         </div>
         <div className="Comment-date">
            {formatDate(props.date)}
         </div>
     </div>
     );
 }
 */
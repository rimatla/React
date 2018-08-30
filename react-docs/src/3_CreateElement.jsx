//These two examples are identical:
const elementOne = (
    <h1 className="greeting">
        Hello tiny world!
    </h1>
);

const elementTwo = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello big world'
);

//comment one and un-comment the other to see the difference
ReactDOM.render(
    // elementOne,
    elementTwo,
    document.getElementById('root')
);



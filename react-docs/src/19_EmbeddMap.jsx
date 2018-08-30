//previously we declared a separate listItems variable and included it in JSX

// JSX allows embedding any expressions in curly braces so we could inline the map() result
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        //embedding expression
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number} />
            )}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);


/**
 Sometimes this results in clearer code, but this style can also be abused.
 Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability.
 Keep in mind that if the map() body is too nested, it might be a good time to extract a component.
 **/
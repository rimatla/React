/**
 BASIC LIST COMPONENT
 */

/**Usually you would render lists inside a component.*/

//component that accepts an array of numbers and outputs an unordered list of elements
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            I'm {number}
        </li>
        );

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

/**
 When you run this code, you'll be given a warning that a key should be provided for list items.
 A "key" is a special string attribute you need to include when creating lists of elements.
 */

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
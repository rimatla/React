/**
 Keys help React identify which items have changed, are added, or are removed
 */

// Keys should be given to the elements inside the array to give the elements a stable IDENTITY
const numbs = [1, 2, 3, 4, 5];
const listItems = numbs.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);

// The best way to pick a key is to
// use a string that uniquely identifies a list item among its siblings
// Most often you would use IDs from your data as keys:
// const todoItems = todos.map((todo) =>
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// );

//When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort
// const todoItem = todos.map((todo, index) =>
//     // Only do this if items have no stable IDs
//     <li key={index}>
//         {todo.text}
//     </li>
// );
/**
 We don't recommend using indexes for keys if the items can reorder, as that would be slow.
 */

/*
 Extracting Components with Keys
 Keys only make sense in the context of the surrounding array
 If you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the root <li> element in the ListItem itself.
 */

//ie: Incorrect Key Usage
function ListWrong(props){
    const value = props.value;
    // Wrong! There is no need to specify the key here:
    return (
        <li key={value.toString()}>
            {value}
        </li>
    )
}

function NumberListWrong(props){
    const numbers = props.numbers;
    const listItem = numbers.map((number) =>
        // Wrong! The key should have been specified here:
        <ListItem value={number} />
    );
    return (
        <ul>
            {listItem}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];


//ie: Correct Key Usage
function ListBanana(props){
    //Correct! There is no need to specify the key here
    return <li>{props.value} Bananas</li>
}

function NumbersList(props){
    const bananas = props.bananas;
    const allListItems = bananas.map((numberOfBananas) =>
        // Correct! Key should be specified inside the array.
        <ListBanana key={numberOfBananas.toString()} value={numberOfBananas}/>
    );

    return (
        <ul>
            {allListItems}
        </ul>
    )
}
const bananas = [1, 2, 3, 4, 5];
ReactDOM.render(
    // <NumberList numbers={numbs} />,
    <NumbersList bananas={bananas}/>,
    document.getElementById('root')
);
//A good rule of thumb is that elements inside the map() call need keys.


//we use the map() function to take an array of numbers and double their values.
// We assign the new array returned by map() to the variable doubled
// and log it:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number)=> number * 2);
console.log(doubled); //[2, 4, 6, 8, 10]

/**
 RENDERING MULTIPLE COMPONENTS
 * */

//You can build collections of elements and include them in JSX using curly braces {}
//loop through the numbers array using the Javascript map()
const listItems = numbers.map((number) => //return an <li> element for each item
    <li>{number}</li>
);

//Finally, we assign the resulting array of elements to listItems
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);
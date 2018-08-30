/**
 - Thinking in React
 - React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.
 */

/**Start With A Mock*/
//Imagine that we already have a JSON API and a mock from our designer.
//Our JSON API returns some data that looks like this: (also see img on folder)

/*
 [
 {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
 {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
 {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
 {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
 {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
 {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
 ];
 */

/**
 - Step 1: Break The UI Into A Component Hierarchy
 - Single responsibility principle, that is, a component should ideally only do one thing.
 - If it ends up growing, it should be decomposed into smaller subcomponents.
 */

/*
 Components that appear within another component in the mock should appear as a child in the hierarchy:
     FilterableProductTable
        SearchBar
            ProductTable
                ProductCategoryRow
                    ProductRow
 */

/**
 - Step 2: Build A Static Version in React aka skeleton
 */


/**
- Step 3: Identify The Minimal (but complete) Representation Of UI State
- Stay DRY, Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.
 * Let's go through each one and figure out which one is state. Simply ask three questions about each piece of data:

 1- Is it passed in from a parent via props? If so, it probably isn't state.
 2- Does it remain unchanged over time? If so, it probably isn't state.
 3- Can you compute it based on any other state or props in your component? If so, it isn't state.

 In This project:
 1- The original list of products is passed in as props, so that's not state.
 2- The search text AND the checkbox seem to be state since they change over time and can't be computed from anything.
 3- The filtered list of products isn't state because it can be computed by combining the original list of products with the search text and value of the checkbox.

 So finally, our state is:
 1- The search text the user has entered
 2- The value of the checkbox
 */



/**
 Step 4: Identify Where Your State Should Live
 - Next, we need to identify which component mutates, or owns, this state.

 - Remember: React is all about one-way data flow down the component hierarchy.
 - It may not be immediately clear which component should own what state.
 - This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:

 *For each piece of state in your application:
 1- Identify every component that renders something based on that state.
 2- Find a common owner component (a single component above all the components that need the state in the hierarchy).
 3- Either the common owner or another component higher up in the hierarchy should own the state.
 4- If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

 *Let's run through this strategy for our application:
 1- ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and checked state.
 2- The common owner component is FilterableProductTable.
 3- It conceptually makes sense for the filter text and checked value to live in FilterableProductTable
 */


/**
 Step 5: Add Inverse Data Flow
 - Now it's time to support data flowing the other way:
 - The form components deep in the hierarchy need to update the state in FilterableProductTable
 - If you try to type or check the box in the current version of the example,
 - you'll see that React ignores your input. This is intentional, as we've set the value prop of the input to always be equal to the state passed in from FilterableProductTable.

 *Let's think about what we want to happen.
 - We want to make sure that whenever the user changes the form, we update the state to reflect the user input.
 - Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.
 - We can use the onChange event on the inputs to be notified of it.
 - The callbacks passed by FilterableProductTable will call setState(), and the app will be updated.

 *Though this sounds complex, it's really just a few lines of code. And it's really explicit how your data is flowing throughout the app.
 */

/*
 React makes this data flow explicit to make it easy to understand how your program works,
 but it does require a little more typing than traditional two-way data binding.
 */

//ProductRowCategory Component
class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}

//ProductRow Component
class ProductRow extends React.Component {
    render() {
        //if true ie: in stock
        let name = this.props.product.stocked ? this.props.product.name :
            //else
            <span style={{color: 'tomato'}}>
            {this.props.product.name}
            </span>;
        return (
                <tr>
                    <td>{name}</td>
                    <td>{this.props.product.price}</td>
                </tr>
        )
    }
}

//ProductTable Component
class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        let userSearch = null;

        this.props.products.forEach((product) => {

            /*Make it so search is case insensitive ie: 'i'*/
            userSearch = new RegExp(this.props.filterText, 'i');

            /**pass filterText and inStockOnly as a prop*/
            //if not match kill the search
            if (product.name.search(userSearch) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }

            //if not null - push up results
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }

            //else
                rows.push(<ProductRow product={product} key={product.name}/>);
                lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

//SearchBar Component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    //handleFilterText()
    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    //handleInStock()
    handleInStockInputChange(e) {
        this.props.onShowOnlyInStockInput(e.target.checked);
    }


    render() {
        return (
            //pass filterText and inStockOnly as a prop
            <form>
                <input
                    className="searchBar"
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
                <p className="onlyShow">
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

//FilterableProductTable Component
class FilterableProductTable extends React.Component {
    //add initial state
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false //set it to false
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    //handleFilterTextInput()
    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    //handleInStockInput()
    handleInStockInput(inStockOnly) {
        this.setState({ //set to true
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onShowOnlyInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Volleyball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$499.99', stocked: true, name: 'iPhone 6'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);

/**
 - The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.
 - It's best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.
 - You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with FilterableProductTable) or with the ones lower in it (ProductRow).
 - In simpler examples, it's usually easier to go top-down, and on larger projects, it's easier to go bottom-up and write tests as you build.
 */
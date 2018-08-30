/**
 - Elements are the smallest building blocks of React apps.
 - An element describes what you want to see on the screen.
 - Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
 - Elements are what components are "made of".
 */

/**
 - Applications built with just React usually have a single root DOM node.
 - If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
 - To render a React element into a root DOM node, pass both to ReactDOM.render():
 **/

/**
 - UPDATING THE RENDERED ELEMENT
 - React elements are immutable. Once you create an element, you can't change its children or attributes.
 */

function tick(){
    const element = (
        <div>
            <h1>Hello World</h1>
            {/*ReactDOM Only Updates What's Necessary. Inspect it on console*/}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

//calls ReactDOM.render() every second from a setInterval() callback.
setInterval(tick, 1000);

/**
 - NOTE:
 - In practice, most React apps only call ReactDOM.render() once.
 * */
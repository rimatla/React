const {createElement} = React;
const {render} = ReactDOM;

//styles
const styleApp = {
    backgroundColor: '#222222',
    color: '#00d8ff',
    fontFamily: 'verdana',
    width: '400px',
    borderRadius: '2px',
    textAlign: 'center',
    margin: '0 auto'
};

//create element
const title = createElement(
    'h1',
    {id:'title', className: 'header', style: styleApp},
    'Hello World'
);

render (
    //name of element to render
    title,
    //where to render it in the DOM
    document.getElementById('react-container')
);
// get root html element
var rootHtmlElement = document.getElementById('root');

//initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic heading root react element
var headingReactSectionElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from React'
    ),
    React.createElement(
        'h2',
        null,
        'JSX IS AWESOME'
    ),
    React.createElement(
        'p',
        null,
        'This is the greatest lesson I have ever learned!'
    )
);

rootReactElement.render(headingReactSectionElement);
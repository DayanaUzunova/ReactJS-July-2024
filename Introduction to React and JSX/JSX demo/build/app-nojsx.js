// get root html element
var rootHtmlElement = document.getElementById('root');

//initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic heading root react element
var headingReactElement = React.createElement('h1', null, 'Hello User!');
var secondHeadingReactElement = React.createElement('h2', null, 'JSX IS AWESOME!');

var headingReactSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);

rootReactElement.render(headingReactSectionElement);
// get root html element
const rootHtmlElement = document.getElementById('root');


//initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic heading root react element
const headingReactElement = React.createElement('h1', null, 'Hello User!');
const secondHeadingReactElement = React.createElement('h2', null, 'JSX IS AWESOME!');

const headingReactSectionElement = React.createElement(
    'header',
    null,
    headingReactElement,
    secondHeadingReactElement
);

rootReactElement.render(headingReactSectionElement);

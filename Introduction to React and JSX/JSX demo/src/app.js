// get root html element
const rootHtmlElement = document.getElementById('root');

//initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//create basic heading root react element
const headingReactSectionElement = (
    <header>
        <h1>Hello JSX from React</h1>
        <h2>JSX IS AWESOME</h2>
        <p>This is the greatest lesson I have ever learned!</p>
    </header>
);

rootReactElement.render(headingReactSectionElement);

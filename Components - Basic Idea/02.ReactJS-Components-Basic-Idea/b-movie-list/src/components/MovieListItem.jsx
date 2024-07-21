export default function MovieListItem(props) {
    return (
        <li style={{ color: 'pink' }}>
            <a href={props.url || '#'} target="_blank" rel="noreferrer">
                {props.children}
            </a>
        </li>
    );
}

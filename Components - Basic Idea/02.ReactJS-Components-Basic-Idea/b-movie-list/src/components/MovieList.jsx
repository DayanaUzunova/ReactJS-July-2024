import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
    return (
        <>
            <h1>{props.title}</h1>

            <ul>
                <MovieListItem url="https://www.imdb.com/title/tt0133093/">
                    {props.movies[0]}
                </MovieListItem>
                <MovieListItem url="https://www.google.com/search?q=man+of+steel&oq=man+of+st&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBggDEEUYOTIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8">
                {props.movies[1]}
                </MovieListItem>
                <MovieListItem url="https://www.imdb.com/title/tt0120737/">
                {props.movies[2]}
                </MovieListItem>
                <MovieListItem url="https://www.imdb.com/title/tt6113488/">
                    {props.movies[3]}
                </MovieListItem>
            </ul>
        </>
    );
}

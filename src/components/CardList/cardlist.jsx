import { useState, useEffect } from "react";
import CardItem from "../CardItem/carditem";
import { GET } from "../../Utils/Http";
import "./stayles.css";

function CardList({ searchInput }) {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        GET().then((data) => setMoviesData(data));

    }, []);

    return (
        <div className="CardList">
            <div className="CardList__wrapper">
                {moviesData &&
                    moviesData.filter((movie) =>
                        movie.title.toLowerCase().includes(searchInput.toLowerCase())
                        ||
                        movie.genres.toString().toLowerCase().includes(searchInput.toLowerCase())
                    )
                        .map((movie) => <CardItem
                            cardData={movie} key={movie.id} />
                        )}
            </div>
        </div>
    );
}

export default CardList;
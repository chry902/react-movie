import { useState, useEffect } from "react";
import CardItem from "../CardItem/carditem";
import { GET } from "../../Utils/Http";
import "./stayles.css";

function CardList({ searchInput, }) {
    const [moviesData, setMoviesData] = useState([]);



    useEffect(() => {
        GET().then((data) => setMoviesData(data));
        console.log("render partito");
    }, []);


    // const hadleDeleted = (id) => {
    //     DELETE(id);
    //     // .then(() => { window.location.reload() });
    //     setRender(true)
    //     console.log("deleted");
    // }





    return (
        <div className="CardList">
            <div className="CardList__wrapper">
                {moviesData &&
                    moviesData.filter((movie) =>
                        movie.title.toLowerCase().includes(searchInput.toLowerCase())
                        ||
                        movie.genres.toString().toLowerCase().includes(searchInput.toLowerCase())
                    )
                        .map((movie) => <CardItem setMoviesData={setMoviesData}
                            cardData={movie} key={movie.id} />
                        )}
            </div>
        </div>
    );
}

export default CardList;
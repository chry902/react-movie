import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AddMovie } from "../../Pages/AddMovie/AddMovie";
import { POST, PUT } from "../../Utils/Http";

// import { InputCard } from "./inputCard";
import styles from "./styles.module.scss";

export function CreateCardForm({ setIsModalVisible, callType }) {
    // const [visible, setVisible] = useState(false)


    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    const unStringifyGenres = (genres) => genres.split(",");

    const location = useLocation();
    const movieId = location.pathname.split("/").reverse()[0];

    const addNewMovie = (e) => {
        e.preventDefault();

        if (callType === "POST") {
            POST({
                title,
                year,
                poster,
                genres: unStringifyGenres(genres),
                description,
            });

            setIsModalVisible({
                visible: true,
                content: "il post è stato publicato",

            });


        } else {
            PUT(movieId, {
                title,
                year,
                poster,
                genres: unStringifyGenres(genres),
                description,
            });
        }

    };



    return (
        <div className={styles.CreateCardForm}>


            <form onSubmit={addNewMovie} className={styles.form}>
                <label htmlFor="title">Title:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    name="title"
                    required
                />

                <label htmlFor="year">Year:</label>
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="text"
                    id="year"
                    name="year"
                    required
                />

                <label htmlFor="poster">Poster:</label>
                <input
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    type="text"
                    id="poster"
                    name="poster"
                    required
                />

                <label htmlFor="genres">Genres:</label>
                <input
                    value={genres}
                    onChange={(e) => setGenres(e.target.value)}
                    type="text"
                    id="genres"
                    name="genres"
                    required
                />

                <label htmlFor="description">Description:</label>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    id="description"
                    name="description"
                    required
                />

                <input type="submit" value="Send it!" />
            </form>
        </div>
    );
}


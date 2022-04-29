import { useState } from "react";
import { POST } from "../../Utils/Http";
// import { InputCard } from "./inputCard";
import "./style.css";

export function CreateCardForm() {
    const [visible, setVisible] = useState(false)

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState("");
    const [genres, setGenres] = useState("");
    const [description, setDescription] = useState("");

    const unStringifyGenres = (genres) => genres.split(",");

    const addNewMovie = (e) => {
        e.preventDefault();
        console.log("===>", e);
        const controll = e.targhet.index._wrapperState.controlled;
        console.log("this controll---->", controll);
        POST({
            title,
            year,
            poster,
            genres: unStringifyGenres(genres),
            description,
        })
        // .then(() => window.location.reload(false))
    };
    const timeModale = (event) => {
        setVisible(true);
        setTimeout(function () { setVisible(false) }, 3000);

    }

    return (
        <div className="CreateCardForm">
            {
                visible &&
                <div className="modale_add_post">
                    <h2>Post creato con successo!</h2>
                </div>
            }

            <form onSubmit={addNewMovie} className="CreateCardForm__form">
                <label htmlFor="title">Title:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    name="title"
                    required
                />
                {/* <InputCard  title={title} value={title} usestate={setTitle} id={title} name={title} /> */}
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

                <input type="submit" value="Send it!" onClick={() => timeModale()} />
            </form>
        </div>
    );
}


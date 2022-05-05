
import { Link } from "react-router-dom";
import { DELETE, GET } from "../../Utils/Http";



import styles from "./stayles.module.scss";


function CardItem({ cardData, setMoviesData }) {


    const hadleDeleted = (id) => {
        DELETE(id).then(() => GET().then((data) => setMoviesData(data)))
        // setRender(true);
        console.log("deleted");
    }






    return (
        <div className={styles.CardItem}>
            <div className={styles.titleCardContain}>
                <div className={styles.buttonContainer}>
                    <button onClick={() => hadleDeleted(cardData.id)}>deleted</button>
                </div>
                <Link to={`/edit-movie/${cardData.id}`}>
                    <h2>{cardData.title}</h2>
                </Link>
            </div>

            <p className={styles.yearsContainerCard}>{cardData.year}</p>

            <div className={styles.imgContainerCard}>
                <img src={cardData.poster} alt={cardData.title} />
            </div>

            <p className={styles.descrCard}>{cardData.description}</p>

            <div className={styles.genre}>
                <ul>
                    {cardData && Array.isArray(cardData.genres) ? (
                        cardData.genres.map((genre, index) => <li key={index}>{genre}</li>)
                    ) : (
                        <li>{cardData.genres}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default CardItem;
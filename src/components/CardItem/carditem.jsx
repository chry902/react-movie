
import { Link } from "react-router-dom";
import { DELETE } from "../../Utils/Http";
import styles from "./stayles.module.scss";


function CardItem({ cardData }) {
    const hadleDeleted = (id) => {
        DELETE(id).then(() => { window.location.reload() });
    }

    return (
        <div className={styles.CardItem}>
            <div className={styles.title_card_contain}>
                <div className={styles.button_container}>
                    <button onClick={() => hadleDeleted(cardData.id)}>deleted</button>
                </div>
                <Link to={`/edit-movie/${cardData.id}`}>
                    <h2>{cardData.title}</h2>
                </Link>
            </div>

            <p className={styles.years_container_card}>{cardData.year}</p>

            <div className={styles.img_contaner_card}>
                <img src={cardData.poster} alt={cardData.title} />
            </div>

            <p className={styles.descr_card}>{cardData.description}</p>

            <div className={styles.genre}>
                <ul>
                    {cardData.genres &&
                        cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default CardItem;
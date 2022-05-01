
import { Link } from "react-router-dom";
import { DELETE } from "../../Utils/Http";
import "./stayles.css";


function CardItem({ cardData }) {
    const hadleDeleted = (id) => {
        DELETE(id).then(() => { window.location.reload() });
    }

    return (
        <div className="CardItem">
            <div className="title_card_contain">
                <Link to={`/edit-movie/${cardData.id}`}>
                    <h2>{cardData.title}</h2>
                </Link>

                <button onClick={() => hadleDeleted(cardData.id)}>deleted</button>
            </div>
            <p>{cardData.year}</p>
            <div className="img_contaner_card">
                <img src={cardData.poster} alt={cardData.title} />
            </div>
            <p className="descr_card">{cardData.description}</p>
            <div className="genre">
                <ul>
                    {cardData.genres &&
                        cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default CardItem;
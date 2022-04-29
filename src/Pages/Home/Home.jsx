
import CardList from "../../components/CardList/cardlist";
/* import { Modal } from "../components/Modal/modal"; */
import "./style.css";

export function Home() {
    return (
        <div className="Home">
            <div className="title_home">
                <h1>Lista dei film</h1>
                <div className="search_input_home">
                    <label htmlFor="search">Search by title or categories:</label>
                    <input type="text" id="search" name="search" />
                </div>

            </div>

            <CardList />
        </div>
    );
}


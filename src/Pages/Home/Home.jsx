
import { useState } from "react";
import CardList from "../../components/CardList/cardlist";
import { Categories } from "../categories/Categories";

import "./style.css";

export function Home() {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className="Home">
            <div className="title_home">
                <h1>Lista dei film</h1>
                <div className="search_input_home">
                    <label htmlFor="search">Search by title or categories:</label>
                    <input type="text" id="search" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                </div>
                <Categories />

            </div>
            <CardList />
        </div>
    );
}


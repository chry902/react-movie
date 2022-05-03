
import { useState } from "react";
import CardList from "../../components/CardList/cardlist";
import { Categories } from "../categories/Categories";

import styles from "./styles.module.css";

export function Home() {
    const [searchInput, setSearchInput] = useState("");

    const searchItem = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
    };

    return (
        <div className={styles.Home}>
            <div className={styles.titleHome}>
                <h1>Lista dei film</h1>

                <div className={styles.searchInputHome}>
                    <input className={styles.searchInput}
                        onChange={(e) => searchItem(e.target.value)}
                        type="text"
                        id="search"
                        name="search"
                        value={searchInput}
                        placeholder="Search" />
                </div>

                <Categories />

            </div>
            <CardList searchInput={searchInput} />
        </div>
    );
}


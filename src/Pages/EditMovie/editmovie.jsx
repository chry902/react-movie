import styles from "./styles.module.scss"

import { useState, useEffect } from "react";
import { GET } from "../../Utils/Http";
import { useLocation } from "react-router-dom"

import CardItem from "../../components/CardItem/carditem";
import { CreateCardForm } from "../../components/CreateCardForm/form";

export function EditMomvie() {
    const location = useLocation();
    const [movieData, setMovieData] = useState({});
    const movieId = location.pathname.split("/").reverse()[0];

    useEffect(() => {
        GET(movieId).then((data) => setMovieData(data));
    }, [movieId]);

    return (
        <>
            <div className={styles.EditMomvie}>
                <CardItem cardData={movieData} />
                <CreateCardForm setIsModalVisible={false} callType="PUT" />
            </div>
        </>
    )
}
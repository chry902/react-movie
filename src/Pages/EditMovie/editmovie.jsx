import styles from "./styles.module.scss"

import { useState, useEffect } from "react";
import { GET } from "../../Utils/Http";
import { useNavigate, useLocation } from "react-router-dom"
// import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem/carditem";
import { CreateCardForm } from "../../components/CreateCardForm/form";

export function EditMomvie({ setIsModalVisible, editSuccess }) {
    const location = useLocation();

    const [movieData, setMovieData] = useState({});
    const movieId = location.pathname.split("/").reverse()[0];

    const [editIsVisible, setEditIsVisible] = useState("")
    const navigate = useNavigate();
    console.log("edit", setEditIsVisible);

    useEffect(() => {
        addSuccess(editIsVisible);
        if (editIsVisible.visible === true) {
            navigate("/");
        };

    }, [editIsVisible]);

    function addSuccess(value) {
        editSuccess(value);
        console.log("valore da funzione edit", value);
    }


    useEffect(() => {
        GET(movieId).then((data) => setMovieData(data));
        /*  navigate("/"); */
    }, [movieId]);

    return (
        <>
            <div className={styles.EditMovie}>
                <div className={styles.card_edit_container}>
                    <CardItem className={styles.card_item} cardData={movieData} />
                </div>
                <div className={styles.form_edit_container}>
                    <CreateCardForm className={styles.card_form} setIsModalVisible={setIsModalVisible} setEditIsVisible={setEditIsVisible} callType="PUT" />
                </div>
            </div>
        </>
    )
}
import { useState, useEffect } from "react";
import styles from "./styles.Modul.scss";
import { useNavigate } from "react-router-dom";
import { CreateCardForm } from "../../components/CreateCardForm/form"
import { Modal } from "../../components/Modal/modal"

export function AddMovie(props) {
    const [isModalVisible, setIsModalVisible] = useState("")

    const navigate = useNavigate();


    useEffect(() => {
        addSuccess(isModalVisible);
        if (isModalVisible.visible === true) {


            navigate("/");
        };
    }, [isModalVisible])





    function addSuccess(value) {
        props.editSuccess(value);

    }



    return (
        <div className={styles.AddMovie}>
            <h1>ad new movieee</h1>
            <CreateCardForm setIsModalVisible={setIsModalVisible} callType="POST" />
            {/* <Modal text="sono la modale" isVisible={isModalVisible} /> */}


        </div>
    );
}
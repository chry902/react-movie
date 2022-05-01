import { useState, useEffect } from "react";
import styles from "./styles.Modul.scss";

import { CreateCardForm } from "../../components/CreateCardForm/form"
import { Modal } from "../../components/Modal/modal"

export function AddMovie() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsModalVisible(false)
        }, 3000)
    }, [isModalVisible]);

    return (
        <div className={styles.AddMovie}>
            <h1>ad new movieee</h1>
            <CreateCardForm setIsModalVisible={setIsModalVisible} />
            <Modal text="sono la modale" isVisible={isModalVisible} />

        </div>
    );
}
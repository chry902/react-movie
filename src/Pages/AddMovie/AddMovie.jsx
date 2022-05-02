import { useState, useEffect } from "react";
import styles from "./styles.Modul.scss";
import { useNavigate } from "react-router-dom";
import { CreateCardForm } from "../../components/CreateCardForm/form"
import { Modal } from "../../components/Modal/modal"
import { Alert } from "../../components/Alert/alert";

export function AddMovie(props) {
    const [isModalVisible, setIsModalVisible] = useState("")

    const navigate = useNavigate();

    const newModal = isModalVisible;
    addSuccess(newModal);

    //     useEffect(() => {
    //         // setTimeout(() => {
    //         //     setAlert(isModalVisible)
    //         // }, 3000)
    //         setAlert({
    //             visible: true,
    //             content: "il post è stato publicato",

    //         });

    // }, [isModalVisible]);
    console.log("----> addmov", newModal);


    // const addSuccess = (newModal) => {
    //     /* setTimeout(() => {
    //         setIsModalVisible(false)
    //     }, 3000) */
    //     props.editSuccess(newModal)
    //     console.log("==>>funzione app", newModal);
    // };
    function addSuccess(bottiglie) {
        props.editSuccess(bottiglie)
        console.log("==>>funzione app", bottiglie);
        navigate("/");
    }

    return (
        <div className={styles.AddMovie}>
            <h1>ad new movieee</h1>
            <CreateCardForm setIsModalVisible={setIsModalVisible} callType="POST" />
            {/* <Modal text="sono la modale" isVisible={isModalVisible} /> */}
            {/* <Alert alert={isModalVisible} /> */}

        </div>
    );
}
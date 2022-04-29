import styles from "./styles.Modul.scss";

import { CreateCardForm } from "../../components/CreateCardForm/form"
import { Modal } from "../../components/Modal/modal"

export function AddMovie() {

    return (
        <div className={styles.AddMovie}>
            <h1>ad new movieee</h1>
            <CreateCardForm />
            <Modal />
        </div>
    );
}
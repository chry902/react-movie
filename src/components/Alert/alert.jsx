import { useState } from "react";
import styles from "./styles.module.scss"


export const Alert = ({ alert }) => {
    const [add, setAdd] = useState({
        visible: false,
        content: "",

    });

    console.log(alert);



    const visible = alert.visible || false;
    const content = alert.content || "";

    //classe alert sempre presente, se props visible è true aggiungimi la classe visible altrimenti stringa vuota
    const classes = [styles.alert, visible ? styles.visible : ""];

    return (
        <div className={classes.join(" ")}>{content}</div>
    )
}

import { useState, useEffect } from "react";
import styles from "./styles.module.scss"


export const Alert = ({ alert, timeCallBack }) => {
    const [add, setAdd] = useState({
        visible: false,
        content: "",
    });

    useEffect(() => {
        if (visible === true) {

            setTimeout(() =>
                timeCallBack()
                , 3000);


        };
        console.log("è partito lo use effect");
    }, [alert.visible])




    const visible = alert.visible || false;
    const content = alert.content || "";

    //classe alert sempre presente, se props visible è true aggiungimi la classe visible altrimenti stringa vuota
    const classes = [styles.alert, visible ? styles.visible : ""];

    return (
        <div className={classes.join(" ")}>
            <h3>
                {content}
            </h3>
        </div>
    )
}

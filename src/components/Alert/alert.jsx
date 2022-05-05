import { useEffect } from "react";
import styles from "./styles.module.scss"


export const Alert = ({ alert, timeCallBack }) => {


    useEffect(() => {
        if (visible === true) {

            setTimeout(() =>
                timeCallBack()
                , 3000);


        };
        // eslint-disable-next-line
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

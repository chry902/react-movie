import styles from "./styles.module.scss";

export function Categories() {

    const categoryValue = (e) => {
        // e.preventDefault();
        const controll = e.targhet.index._wrapperState.controlled;
        console.log("=>>>", controll);
    }

    return (
        <>
            <div className={styles.checkbox_contain}>

                <label htmlFor="Avventura">Avventura</label>
                <input type="checkbox" id="Avventura" value="avventura" name="Avventuras" onChange={(e) => categoryValue()} />

                <label htmlFor="Sci-Fi">Sci-Fi</label>
                <input type="checkbox" id="Sci-Fi" value="sci-fi" name="Sci-Fi" />

                <label htmlFor="Horror">Horror</label>
                <input type="checkbox" id="Horror" value="horror" name="Horror" />

            </div>
        </>
    )
}
import styles from "./styles.module.css";

export default function StartScreen(props) {
    const {setGameStart} = props;
    function handleButtonClick(){
        setGameStart(true);
    }

    return (
        <div className={styles.buttonContainer}>
            <h1></h1>
            <p></p>
            <button onClick={handleButtonClick}>Enter Game</button>
        </div>
    )
}
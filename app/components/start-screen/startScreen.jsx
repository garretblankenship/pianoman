import styles from "./styles.module.css";

export default function StartScreen(props) {
    const {setGameStart} = props;
    function handleButtonClick(){
        setGameStart(true);
    }

    return (
        <div className={styles.buttonContainer}>
            <h1>Piano Man!</h1>
            <p>lorem ipsum yatta yatta</p>
            <button onClick={handleButtonClick}>Start Game</button>
        </div>
    )
}
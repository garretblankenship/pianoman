import styles from "./styles.module.css";

export default function StartScreen(props) {
    const {setGameStart} = props;
    function handleButtonClick(){
        setGameStart(true);
    }

    return (
        <div className={styles.buttonContainer}>
            <h1></h1>
            <p>How many keys can you play before time runs out!?</p>
            <button onClick={handleButtonClick}>Start Game</button>
        </div>
    )
}
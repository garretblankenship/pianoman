'use client'
import styles from "@/app/page.module.css"
import { useState } from "react";
import StartScreen from "./components/start-screen/startScreen";
import GameScreen from "./components/game-screen/gameScreen";

export default function Home() {
    const [gameStart, setGameStart] = useState(false);

    function CurrentScreen() {
        if (!gameStart) {
            return <StartScreen setGameStart={setGameStart} />
        } else {
            return <GameScreen />
        }
    }

    return (
        <main>
            <CurrentScreen />
        </main>
    );
}

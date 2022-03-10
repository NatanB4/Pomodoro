import styles from '../styles/Pomodoro.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import writeUserData from '../helper/firebaseDB'
import ButtonCreateTask from './ButtonCreateTask'

let COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 MINUTES

export default function PomodoroEngine(props) {
    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)
    const [textButton, setTextButton] = useState('iniciar')
    const [onSystem, setOnSystem] = useState(false)

    useEffect(() => {
        if (secondsAmount > 0 && onSystem == true) {
            setTimeout(() => {
                setSecondsAmount(state => state - 1);
            }, 1000)
        } else if (secondsAmount <= 25) {
            alert('Chegou ao fim')
            return
        }
    }, [secondsAmount, onSystem, textButton]);

    function start() {
        if (onSystem == false) {
            setOnSystem(true)
            setTextButton('parar')
            return
        } else {
            setOnSystem(false)
            setTextButton('iniciar')
        }
    }

    function more() {
        setSecondsAmount(state => state + 60)
    }

    function less() {
        if (secondsAmount <= 0) {
            return
        }
        setSecondsAmount(state => state - 60)
    }


    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    return (
            <div className={styles.container_pomodoro}>
                <div className={styles.numbers}>
                    <span>{String(minutes).padStart(2, '0')}</span>
                    <span>:</span>
                    <span>{String(seconds).padStart(2, '0')}</span>
                </div>
                <div className={styles.container_buttons}>
                    <button className={styles.button} onClick={() => { start() }} style={{ marginRight: '6em' }}>{textButton}</button>
                    <button className={styles.button_shaft} onClick={() => { less() }}>
                        <Image src="/setaPraBaixo.svg" alt="seta" layout="intrinsic" width="30px" height="40px" />
                    </button>
                    <button className={styles.button_shaft} onClick={() => { more() }}>
                        <Image src="/setaPraCima.svg" alt="seta" layout="intrinsic" width="30px" height="40px" />
                    </button>
                </div>
                {props.children}
                <div className={styles.container_task}>
                <h3>ToDo-List</h3>
                <hr />
                <ul>
                    {props.task.length == 0 ? "Você ainda não criou nenhuma tarefa" : ""}
                </ul>
            </div>
            </div>
    )
}
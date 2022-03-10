import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import styles from '../styles/Pomodoro.module.css'
import Task from './Task'
import useInput from './Input'

//Ideia inicila: Pegar o id do usuario do cookie e salvar no dale
export default function CreateTask(props) {
    const [text, textInput] = useInput({ type: "text" });

    
    function createTask(){
        const length = props.task.length + 1
        props.func([...props.task, {"nome": text, "indice":length}])
    }

    return (
        <div>
            <div className={styles.container_input}>
                {textInput}
                <button onClick={createTask}>CRIAR</button>
            </div>
        </div>
    )
}
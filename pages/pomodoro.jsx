import PomodoroEngine from '../components/PomodoroEngine'
import styles from '../styles/Pomodoro.module.css'
import TaskContainer from '../components/TaskContainer'
import ButtonCreateTask from '../components/ButtonCreateTask'
import { useState } from 'react'


export default function Pomodoro(){
    const [tasks, setTask] = useState([])

    return (<>
        <div className={styles.container}>
            <PomodoroEngine task={tasks}>
                <ButtonCreateTask  task={tasks} func={setTask}/>
            </PomodoroEngine>
            <TaskContainer task={tasks} setTask={setTask}/>
        </div>
    </>)
}
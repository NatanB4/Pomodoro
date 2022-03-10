import styles from '../styles/Pomodoro.module.css'
import Task from './Task'

export default function TaskContainer(props) {
    const array = [...props.task]

    function removeTask(nome){
        const filtro = props.task.filter((item) => {console.log(item); return item.nome !== nome})
        props.setTask(filtro)
    }
    
    return (
        <div className={styles.container_tasks}>
            {array.map((el,i) => {
                return (
                    <div className={styles.animate} >
                        <Task removeTask={removeTask} nome={el.nome} key={i} task={el} />
                    </div>
                )
            })}
        </div>
    )
}
import styles from '../styles/Pomodoro.module.css'

export default function Task(props) {
    console.log(props)
    return (
        <div className={styles.task}>
            <span></span>
            <label className={styles.container_input_checkbox}>
                <input onClick={() => { props.removeTask(props.nome) }} type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <p>{props.nome}</p>
        </div>
    )
}
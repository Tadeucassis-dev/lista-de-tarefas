import React from 'react'
import styles from '../components/TaskForm.module.css'

interface Props {
 btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
 return (
  <form className={styles.form}>
   <div className={styles.inputContainer}>
    <label htmlFor='title'>Titulo:</label>
    <input type='text' name='title' placeholder=' Titulo da tarefa' />
   </div >
   <div className={styles.inputContainer}>
    <label htmlFor='title'>Dificuldade:</label>
    <input type='text' name='difficulty' placeholder=' Dificuldade da tarefa' />
   </div>
   <input type='submit' value={btnText} />
  </form>
 )
}

export default TaskForm;
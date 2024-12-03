import { Header } from './components/Header';

import './App.module.css';
import styles from './App.module.css';
import { ClipboardText, PlusCircle } from 'phosphor-react';
import { Task } from './components/Task';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <form>
          <input required placeholder='Adicione uma nova tarefa' />

          <button type='submit'>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.containerTasks}>
          <div className={styles.reports}>
            <div className={styles.tasksCreated}>
              Tarefas criadas <span>0</span>
            </div>
            <div className={styles.tasksConcluded}>
              Concluídas <span>2 de 5</span>
            </div>
          </div>

          {/* <div className={styles.noTaskCompleted}>
            <ClipboardText size={56} className={styles.listIcon} />

            <strong>
              Você ainda não tem tarefas cadastradas
            </strong>
            <p>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div> */}

          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  )
}
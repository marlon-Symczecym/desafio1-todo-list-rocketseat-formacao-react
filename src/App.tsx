import { PlusCircle, ClipboardText } from 'phosphor-react';
import { Header } from './components/Header';
import { Task, TaskTypes } from './components/Task';

import styles from './App.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

export function App() {

  const [tasks, setTasks] = useState(Array<TaskTypes>);
  const [newTask, setNewTask] = useState('');

  const tasksConcluded = tasks.filter(task => task.status).length;

  function onNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    const newTaskk: TaskTypes = {
      id: Math.random(),
      content: newTask,
      status: false
    }
    setTasks([...tasks, newTaskk])
    setNewTask('');
  }

  function onDeleteTask(id: number) {
    const newListTasks = tasks.filter(task => task.id !== id);

    setTasks(newListTasks);
  }

  function onStatusChange(id: number, status: boolean) {

    const taskChange = tasks.map(task => {
      if (task.id === id) {
        task.status = !status;
      }

      return task;
    })

    setTasks(taskChange);
  }

  const textTaskConcluded = () => {
    if (tasks.length === 0) {
      return <span>0</span>
    } else if (tasks.length === tasksConcluded && tasks.length !== 0) {
      return <span>TODAS</span>
    } else {
      return <span>{tasksConcluded} de {tasks.length}</span>
    }
  }

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form onSubmit={handleNewTask}>
          <input onChange={onNewTaskChange} value={newTask} required placeholder='Adicione uma nova tarefa' />

          <button disabled={newTask.length === 0} type='submit'>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.containerTasks}>
          <div className={styles.reports}>
            <div className={styles.tasksCreated}>
              Tarefas criadas <span>{tasks.length}</span>
            </div>
            <div className={styles.tasksConcluded}>
              Concluídas
              {textTaskConcluded()}
            </div>
          </div>

          {
            tasks.length === 0
              ?

              <div className={styles.noTaskCompleted}>
                <ClipboardText size={56} className={styles.listIcon} />

                <strong>
                  Você ainda não tem tarefas cadastradas
                </strong>
                <p>
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>

              :

              tasks.map(task => {
                return <Task key={task.id} {...task} onDeleteTask={onDeleteTask} onStatusChange={onStatusChange} />
              })
          }
        </div>
      </div>
    </>
  )
}
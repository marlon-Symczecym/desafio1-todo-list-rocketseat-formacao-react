import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskTypes {
  id: number;
  content: string;
  status: boolean;
}

interface TaskProps extends TaskTypes {
  onDeleteTask: (id: number) => void;
  onStatusChange: (id: number, status: boolean) => void;
}

export function Task({ id, status, content, onDeleteTask, onStatusChange }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleStatusChange() {
    onStatusChange(id, status);
  }

  return (
    <div className={!status ? styles.task : styles.taskConcluded}>
      <button onClick={handleStatusChange} type='button'>
        {!status ? <Circle size={24} /> : <CheckCircle size={24} weight='fill' />}
      </button>
      <article>
        {content}
      </article>
      <Trash onClick={handleDeleteTask} size={18} className={styles.trashIcon} />
    </div>
  )
}
import { Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  function olaButton() {
    console.log("Clicando")
  }
  return (
    <div className={styles.task}>
      <button type='button' onClick={olaButton}>
        <Circle size={24} />
      </button>
      <article>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </article>
      <Trash size={18} className={styles.trashIcon} />
    </div>
  )
}
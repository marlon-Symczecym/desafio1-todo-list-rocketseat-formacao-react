import { Header } from './components/Header';

import './App.module.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';

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
      </div>
    </>
  )
}
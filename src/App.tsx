import React from 'react';
import Header from '../src/components/Header.tsx';
import Footer from '../src/components/Footer.tsx';
import styles from '../src/App.module.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';


function App() {
 return (
  <div >
   <Header />      
   <main className={styles.main}>
    <div>
     <h2>O que você vai fazer?</h2>
     <TaskForm btnText='Criar Tarefa' />
    </div>
    <div>
     <h2>Suas tarefas:</h2>
     <TaskList />
    </div>
   </main>
   <Footer />

  </div>
 );
}

export default App;

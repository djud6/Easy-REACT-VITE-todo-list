import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};

export default App;

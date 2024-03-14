import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
      >
        {todo.text}
      </span>
      <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

export const Header = () => {

  return (
    <header className={styles.header}>
      <Link to="/">Главная</Link>
      <Link to="/employees">Сотрудники</Link>
    </header>
  ) 
}
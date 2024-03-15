import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <span>Todo List - TS + REACT</span> &copy; 2022
      </footer>
    </div>
  )
}

export default Footer
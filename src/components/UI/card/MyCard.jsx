import React from 'react'
import styles from './MyCard.module.css'

const MyCard = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>{children}</div>
      <div className={styles.back}>{children}</div>
    </div>
  )
}

export default MyCard

import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import gym from '../images/gym2.jpeg'


function Main() {
  return (
    <>
    <div className={styles['container']}>
     
      <div className={styles['text']}>
        <h1><span> IGNITE SHIFT</span> & UNITE YOUR STRENGTH</h1>
      </div>
      <div className={styles['Image']}>
        <Image src={gym} alt=''></Image>
      </div>
      </div>
    </>
  )
}

export default Main

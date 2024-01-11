import React from 'react'
import styles from './Scane.module.scss'
import Image from 'next/image'
import scane from '../../public/scane.jpeg'

const Scane = () => {
  return (
    <div>
        <div className={styles.scane}>
            <Image src={scane} alt=''/>
        </div>
    </div>
  )
}

export default Scane
import React from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'

interface cardPorps {
     imageUrl: string
     title: string
     description: string
}

const Card: React.FC<cardPorps> = ({ imageUrl, title, description }) => {
     return (
          <section className={styles.card_con}>
               <div className={styles.imageContainer}>
                    <Image src={imageUrl} alt={title} className={styles.image} layout='fill' />
               </div>
               <div className={styles.textContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    {Array.isArray(description) ? (
                         <ul className={styles.desc}>
                              {description.map((item, index) => (
                                   <li key={index} className={styles.bulletItem}>
                                        {item}
                                   </li>
                              ))}
                         </ul>
                    ) : (
                         <p className={styles.desc}>{description}</p>
                    )}
               </div>
          </section>
     )
}

export default Card

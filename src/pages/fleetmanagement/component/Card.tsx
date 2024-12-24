import React from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'

interface cardPorps {
     imageUrl: string
     title: string
     description: string
     link?: string
}

const Card: React.FC<cardPorps> = ({ imageUrl, title, description, link }) => {
     return (
          <section id={link} className={styles.card_con}>
               <div className={styles.imageContainer}>
                    <Image src={imageUrl} alt={title} className={styles.image} layout='fill' />
               </div>
               <div className={styles.textContainer}>
                    <TertiaryHeading className={styles.title}>{title}</TertiaryHeading>
                    {Array.isArray(description) ? (
                         <ul className={styles.desc}>
                              {description.map((item, index) => (
                                   <li key={index} className={styles.bulletItem}>
                                        {item}
                                   </li>
                              ))}
                         </ul>
                    ) : (
                         <TertiaryPara className={styles.desc}>{description}</TertiaryPara>
                    )}
               </div>
          </section>
     )
}

export default Card

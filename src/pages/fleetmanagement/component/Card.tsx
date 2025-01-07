'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
interface cardPorps {
     imageUrl: string
     title: string
     description: string
     link?: string
     index: number
}

const Card: React.FC<cardPorps> = ({ imageUrl, title, description, link, index }) => {
     const cardRef = useRef<HTMLDivElement>(null)

     const initialFunc = useCallback(async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (cardRef.current) {
                    gsap.fromTo(
                         cardRef.current,
                         { opacity: 0, y: 50 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: index * 0.2,
                              scrollTrigger: {
                                   trigger: cardRef.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                              },
                         },
                    )
               }
          }
     }, [index])

     useEffect(() => {
          initialFunc()
     }, [initialFunc])

     return (
          <section id={link} className={styles.card_con} ref={cardRef}>
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

'use client'
import React, { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './ProfileCard.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
interface ProfileCardProps {
     image: StaticImageData
     title: string
     position: string
     location: string
     index: any
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, title, position, location, index }) => {
     const cardRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
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
                         delay: index * 0.3,
                         scrollTrigger: {
                              trigger: cardRef.current,
                              start: 'top 80%',
                              toggleActions: 'play none none none',
                         },
                    },
               )
          }
     }, [index])
     return (
          <div className={styles.card} ref={cardRef}>
               <div className={styles.imageWrapper}>
                    <Image
                         src={image}
                         alt={title}
                         width={200}
                         height={200}
                         className={styles.image}
                    />
               </div>
               <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.position}>{position}</p>
                    <p className={styles.location}>{location}</p>
               </div>
          </div>
     )
}

export default ProfileCard

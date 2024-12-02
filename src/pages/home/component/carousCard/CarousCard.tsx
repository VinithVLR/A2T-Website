'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './CarousCard.module.scss'
import profile from '../.../../../../../assets/images/img_profile.svg'
import bgProfile from '../.../../../../../assets/images/img_profile.png'
interface CarousCardData {
     bgImage: string
     iconImage: string
     title: string
     des: string
     overLayer: string
     titleColor: string
     desColor: string
}

interface CarousCardProps {
     indexNumber: number
     item: CarousCardData
}

const CarousCard = ({ indexNumber, item }: CarousCardProps) => {
     useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 1000)
          return () => clearTimeout(timer)
     }, [])
     const [isLoading, setIsLoading] = useState(true)
     const [isHovered, setIsHovered] = useState(false)

     useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 1000)
          return () => clearTimeout(timer)
     }, [])

     return (
          <div
               className={styles.carous_cars}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          >
               <div className={styles.card_content}>
                    <div
                         className={styles.card_overlay}
                         style={{
                              zIndex: 25 - indexNumber,
                              backgroundImage: `url(${isHovered ? bgProfile.src : item.bgImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                         }}
                    >
                         <p className={styles.quote}>
                              <span className={styles.quoteMark}>&#8220;</span>
                              A2 Technologies provided exceptional manpower and engineering
                              services. Their expertise helped us streamline operations and improve
                              efficiency.
                         </p>
                         <div className={styles.author}>
                              <Image
                                   src={profile}
                                   alt='Jane Smith'
                                   width={50}
                                   height={50}
                                   className={styles.avatar}
                              />
                              <div>
                                   <h4 className={styles.name}>Jane Smith</h4>
                                   <p className={styles.position}>Head of SEO Banca Sella</p>
                              </div>
                         </div>
                    </div>
                    <div className={styles.main_container}>
                         <div className={styles.image_container}>
                              <div className={styles.author}>
                                   <Image
                                        src={profile}
                                        alt='Jane Smith'
                                        width={50}
                                        height={50}
                                        className={styles.avatar}
                                   />
                                   <div>
                                        <h4 className={styles.name}>Jane Smith</h4>
                                        <p className={styles.position}>Head of SEO Banca Sella</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default CarousCard

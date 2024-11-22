'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './FleetCard.module.scss'
import tool_pic from '../../assets/icons/ic_tool.svg'
import Skeleton from '../skelton/Skeleton'
import picture from '../../assets/images/pexel.jpeg'

interface FleetCardData {
     bgImage: string
     iconImage: string
     title: string
     des: string
     overLayer: string
     titleColor: string
     desColor: string
}

interface FleetCardProps {
     indexNumber: number
     item: FleetCardData
}

const FleetCard = ({ indexNumber, item }: FleetCardProps) => {
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 1000)
          return () => clearTimeout(timer)
     }, [])

     return (
          <div className={styles.fleet_card}>
               {isLoading ? (
                    <Skeleton />
               ) : (
                    <div className={styles.card_content}>
                         <div className={styles.main_container}>
                              <div className={styles.image_container}>
                                   <Image
                                        src={picture}
                                        alt='Fleet Management'
                                        className={styles.card_image}
                                   />
                              </div>
                         </div>
                         <div
                              className={styles.card_overlay}
                              style={{ zIndex: 25 - indexNumber, backgroundColor: item.overLayer }}
                         >
                              <div className={styles.img_wrapper}>
                                   <Image
                                        src={item.iconImage}
                                        alt=''
                                        className={`${styles.image}`}
                                   />
                              </div>
                              <h3 className={styles.title} style={{ color: item.titleColor }}>
                                   {item.title}
                              </h3>
                              <hr className={styles.separator} />
                              <p className={styles.description} style={{ color: item.desColor }}>
                                   {item.des}
                              </p>
                         </div>
                    </div>
               )}
          </div>
     )
}

export default FleetCard

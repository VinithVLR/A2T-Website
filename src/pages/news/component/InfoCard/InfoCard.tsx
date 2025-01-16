'use client'
import Image from 'next/image'
import styles from './InfoCard.module.scss'
import calendarIcon from '../../../../assets/icons/ic_calendar.svg'
import { Inter } from 'next/font/google'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import NewsCardSkeleton from '../skeleton/NewsCardSkeleton'
import { forwardRef, useRef } from 'react'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '700'],
     style: ['normal'],
})
const InfoCard = forwardRef(({ data, isLoading }: any, forwardRefs: any) => {
     const cardRefs = useRef<(HTMLDivElement | null)[]>([])
     const arr = ['Automotive', 'Technology']

     return (
          <>
               {data.map((item: any, index: any) =>
                    false ? (
                         <NewsCardSkeleton
                              key={index}
                              style={{ display: 'flex', width: '35rem' }}
                         />
                    ) : (
                         <div
                              key={index}
                              className={`${styles.card} ${inter.className}`}
                              ref={(el: any) => (forwardRefs.current[index] = el)}
                         >
                              <div className={styles.imageContainer}>
                                   <Image
                                        src={item.img}
                                        alt={item.title}
                                        priority
                                        className={styles.image}
                                   />
                              </div>
                              <div className={styles.content}>
                                   <div className={styles.date}>
                                        <Image src={calendarIcon} alt='calendar_icon' />
                                        <TertiaryPara className={styles.datelable}>
                                             {item.date}
                                        </TertiaryPara>
                                   </div>
                                   <TertiaryHeading className={styles.title}>
                                        {item.title}
                                   </TertiaryHeading>
                                   <TertiaryPara className={styles.description}>
                                        {item.para}
                                   </TertiaryPara>
                                   <div className={styles.tags}>
                                        {arr.map((tag: any, tagIndex: any) => (
                                             <span key={tagIndex} className={styles.tag}>
                                                  {tag}
                                             </span>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    ),
               )}
          </>
     )
})

InfoCard.displayName = 'InfoCard'

export default InfoCard

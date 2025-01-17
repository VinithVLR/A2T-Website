import Image from 'next/image'
import styles from './UpdateCard.module.scss'
import calendarIcon from '../../assets/icons/ic_calendar.svg'
import { Inter } from 'next/font/google'
import { forwardRef, useCallback, useEffect, useRef } from 'react'
import { TertiaryHeading, TertiaryPara } from '../typography/Typography'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '700'],
     style: ['normal'],
})
const UpdateCard = forwardRef(
     (
          {
               imageUrl,
               date,
               title,
               description,
               tags,
               index,
               sectionStyle,
               tagStyle,
               isFlag,
               flexCon,
          }: any,
          forwardRef: any,
     ) => {
          const cardRef = useRef<HTMLDivElement>(null)

          const initialFunc = useCallback(async () => {
               if (typeof window != 'undefined') {
                    const { gsap } = await import('gsap')
                    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
                    gsap.registerPlugin(ScrollTrigger)
                    if (cardRef.current) {
                         gsap.fromTo(
                              cardRef.current,
                              { opacity: 0, y: 100 },
                              {
                                   opacity: 1,
                                   y: 0,
                                   duration: 1,
                                   ease: 'power3.out',
                                   scrollTrigger: {
                                        trigger: cardRef.current,
                                        start: 'top 90%',
                                        end: 'bottom 20%',
                                        toggleActions: 'play none none none',
                                        // markers: true,
                                   },
                              },
                         )
                    }
               }
          }, [])

          useEffect(() => {
               initialFunc()
          }, [initialFunc])

          return (
               <div
                    className={`${styles.card} ${inter.className}`}
                    style={{ ...sectionStyle }}
                    ref={isFlag ? cardRef : forwardRef}
               >
                    <div className={styles.imageContainer}>
                         <Image src={imageUrl} alt={'title'} priority className={styles.image} />
                    </div>
                    <div className={styles.content}>
                         <div className={styles.date}>
                              <Image src={calendarIcon} alt='calendar_icon' />
                              <TertiaryPara> {date}</TertiaryPara>
                         </div>
                         <div className={styles.flexCon}>
                              <div className={styles.titleSec}>
                                   <TertiaryHeading className={styles.header}>
                                        {title}
                                   </TertiaryHeading>
                                   <TertiaryPara className={styles.sub_header}>
                                        {description}
                                   </TertiaryPara>
                              </div>

                              <div className={styles.tags}>
                                   {tags.map((tag: any, index: any) => (
                                        <span
                                             key={index}
                                             className={styles.tag}
                                             style={{ ...tagStyle }}
                                        >
                                             {tag}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          )
     },
)
UpdateCard.displayName = 'UpdateCard'

export default UpdateCard

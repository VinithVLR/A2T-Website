import Image from 'next/image'
import styles from './UpdateCard.module.scss'
import calendarIcon from '../../assets/icons/ic_calendar.svg'
import { Inter } from 'next/font/google'
import { useCallback, useEffect, useRef } from 'react'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '700'],
     style: ['normal'],
})
const UpdateCard = ({ imageUrl, date, title, description, tags, index }: any) => {
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
                              duration: 2,
                              ease: 'power3.out',
                              scrollTrigger: {
                                   trigger: cardRef.current,
                                   start: 'top 50%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
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
          <div className={`${styles.card} ${inter.className}`} ref={cardRef}>
               <div className={styles.imageContainer}>
                    <Image src={imageUrl} alt={'title'} priority className={styles.image} />
               </div>
               <div className={styles.content}>
                    <div className={styles.date}>
                         <Image src={calendarIcon} alt='calendar_icon' />
                         {date}
                    </div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.tags}>
                         {tags.map((tag: any, index: any) => (
                              <span key={index} className={styles.tag}>
                                   {tag}
                              </span>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default UpdateCard

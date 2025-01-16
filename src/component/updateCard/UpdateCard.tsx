import Image from 'next/image'
import styles from './UpdateCard.module.scss'
import calendarIcon from '../../assets/icons/ic_calendar.svg'
import { Inter } from 'next/font/google'
import { forwardRef } from 'react'
import { TertiaryHeading, TertiaryPara } from '../typography/Typography'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '700'],
     style: ['normal'],
})
const UpdateCard = forwardRef(
     (
          { imageUrl, date, title, description, tags, index, sectionStyle, tagStyle }: any,
          forwardRef: any,
     ) => {
          return (
               <div
                    className={`${styles.card} ${inter.className}`}
                    style={{ ...sectionStyle }}
                    ref={forwardRef}
               >
                    <div className={styles.imageContainer}>
                         <Image src={imageUrl} alt={'title'} priority className={styles.image} />
                    </div>
                    <div className={styles.content}>
                         <div className={styles.date}>
                              <Image src={calendarIcon} alt='calendar_icon' />
                              <TertiaryPara> {date}</TertiaryPara>
                         </div>
                         <TertiaryHeading className={styles.title}>{title}</TertiaryHeading>
                         <TertiaryPara className={styles.description}>{description}</TertiaryPara>
                         <div className={styles.tags}>
                              {tags.map((tag: any, index: any) => (
                                   <span key={index} className={styles.tag} style={{ ...tagStyle }}>
                                        {tag}
                                   </span>
                              ))}
                         </div>
                    </div>
               </div>
          )
     },
)
UpdateCard.displayName = 'UpdateCard'

export default UpdateCard

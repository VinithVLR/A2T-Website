import Image from 'next/image'
import styles from './UpdateCard.module.scss'
import calendarIcon from '../../assets/icons/ic_calendar.svg'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '700'],
     style: ['normal'],
})
const UpdateCard = ({ imageUrl, date, title, description, tags }: any) => {
     return (
          <div className={`${styles.card} ${inter.className}`}>
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

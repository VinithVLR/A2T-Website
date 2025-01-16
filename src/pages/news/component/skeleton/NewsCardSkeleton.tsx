import styles from './NewsCardSkeleton.module.scss'

interface SkeletonProps {
     style?: React.CSSProperties
}

export default function NewsCardSkeleton({ style }: SkeletonProps) {
     return (
          <div className={styles['card-skeleton']} style={{ height: '100%', ...style }}>
               <div className={styles['image-container']}>
                    <div className={styles.image} />
               </div>
               <div className={styles.content}>
                    <div className={styles.date}>
                         <div className={styles['calendar-icon']} />
                         <div className={styles['date-label']} />
                    </div>
                    <div className={styles.title} />
                    <div className={styles.description}>
                         <div className={styles.line} />
                         <div className={styles.line} />
                    </div>
                    <div className={styles.tags}>
                         {[1, 2].map((_, index) => (
                              <div key={index} className={styles.tag} />
                         ))}
                    </div>
               </div>
          </div>
     )
}

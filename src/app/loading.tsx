import styles from './loading.module.scss'
import './loading.module.scss'

export default function Loading() {
     return (
          <div className={styles.loadingContainer}>
               <div className={styles.loader}></div>
          </div>
     )
}

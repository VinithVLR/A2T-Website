import Button from '@/component/button/Button'
import styles from './JobCard.module.scss'

function JobCard({ data }: any) {
     return (
          <div className={styles.cardContainer}>
               <h2>{data?.title}</h2>
               <p>{data?.description}</p>
               <Button
                    label='Apply now'
                    disabled={false}
                    icon
                    className={styles.applyBtn}
                    loading={false}
                    labestyle={{
                         fontSize: '0.925rem',
                    }}
               />
          </div>
     )
}

export default JobCard

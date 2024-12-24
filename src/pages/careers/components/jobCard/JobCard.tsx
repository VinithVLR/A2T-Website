import Button from '@/component/button/Button'
import styles from './JobCard.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'

function JobCard({ data }: any) {
     return (
          <div className={styles.cardContainer}>
               <h2>
                    <TertiaryHeading>{data?.title}</TertiaryHeading>
               </h2>
               <p>
                    <TertiaryPara>{data?.description}</TertiaryPara>
               </p>
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

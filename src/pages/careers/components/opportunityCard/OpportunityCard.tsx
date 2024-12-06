import React from 'react'
import styles from './OpportunityCard.module.scss'
import { JobsType } from '../../types/opportunityTypes'
import Button from '@/component/button/Button'
import Location from '../../../../assets/icons/ic_location_green.svg'

interface OpportunityCardProps {
     data: JobsType
}

const OpportunityCard = ({ data }: OpportunityCardProps) => {
     return (
          <div className={styles.cardContainer}>
               <div className={styles.detailContainer}>
                    <h2>{data.title}</h2>
                    <span className={`${styles.location} flex align-center`}>
                         <img src={Location.src} /> {data.location}
                    </span>
                    <p>{data.description}</p>
               </div>
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

export default OpportunityCard

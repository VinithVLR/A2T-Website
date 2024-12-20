import React from 'react'
import styles from './OpportunityCard.module.scss'
import Button from '@/component/button/Button'
import Location from '../../../../assets/icons/ic_location_green.svg'
import Image from 'next/image'

interface OpportunityCardProps {
     data: any
}

const OpportunityCard = ({ data }: any) => {
     return (
          <div className={styles.cardContainer}>
               <div className={styles.detailContainer}>
                    <h2>{data?.title}</h2>
                    <span className={`${styles.location} flex align-center`}>
                         <Image src={Location} alt='Location' /> {data?.location}
                    </span>
                    <p>{data?.description}</p>
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

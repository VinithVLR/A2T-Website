import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
     image: StaticImageData
     title: string
     position: string
     location: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, title, position, location }) => {
     return (
          <div className={styles.card}>
               <div className={styles.imageWrapper}>
                    <Image
                         src={image}
                         alt={title}
                         width={200}
                         height={200}
                         className={styles.image}
                    />
               </div>
               <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.position}>{position}</p>
                    <p className={styles.location}>{location}</p>
               </div>
          </div>
     )
}

export default ProfileCard

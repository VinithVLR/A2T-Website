'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './CarousCard.module.scss'
import profile from '../.../../../../../assets/images/img_profile.svg'
import bgProfile from '../.../../../../../assets/images/img_profile.png'
import quoteIcon from '../../../../assets/icons/ic_quote.svg'
import quoteWhiteIcon from '../../../../assets/icons/ic_quote_white.svg'

const CarousCard = ({ indexNumber, item }: any) => {
     return (
          <div className={styles.carous_cars}>
               <div className={styles.card_content}>
                    <div className={styles.card_overlay}>
                         <Image
                              src={quoteIcon}
                              alt=''
                              className={`${styles.quoteIcon} ${styles.whiteIcon}`}
                         />
                         <Image src={quoteWhiteIcon} alt='' className={styles.quoteIcon} />

                         <p className={styles.quote}>{item?.quote}</p>
                         <div className={styles.author}>
                              <Image
                                   src={item?.profileImg}
                                   alt='Jane Smith'
                                   width={50}
                                   height={50}
                                   className={styles.avatar}
                              />
                              <div>
                                   <h4 className={styles.name}>{item?.name}</h4>
                                   <p className={styles.position}>{item?.position}</p>
                              </div>
                         </div>
                    </div>
                    <div className={`${styles.imgBackground}`}>
                         <Image src={bgProfile} alt='' />
                    </div>
               </div>
          </div>
     )
}

export default CarousCard

'use client'
import React, { useState } from 'react'
import styles from './LogisticsOptimization.module.scss'
import Image from 'next/image'
import playBtn from '../../../assets/icons/ic_play_btn.png'
import img from '../../../assets/images/fleet/img_lan_1.png'
import img1 from '../../../assets/images/fleet/img_lan_2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const LogisticsOptimization = () => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)
     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)

     return (
          <section className={styles.main_con}>
               <div className={styles.container_wrp}>
                    <div className={styles.img_wrapper}>
                         {!isModalOpen && (
                              <div className={styles.thumb_nailWrapper_con}>
                                   <div className={styles.thumb_nailWrapper} onClick={openModal}>
                                        <Image
                                             src={img}
                                             alt='Thumbnail'
                                             className={styles.image}
                                             width={300}
                                             height={200}
                                        />
                                        <div className={styles.playbtn}>
                                             <Image src={playBtn} alt='Play btn' />
                                        </div>
                                   </div>
                              </div>
                         )}

                         {isModalOpen && (
                              <div className={styles.modalOverlay} onClick={closeModal}>
                                   <div
                                        className={styles.modalContent}
                                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                                   >
                                        <button className={styles.closeButton} onClick={closeModal}>
                                             &times;
                                        </button>
                                        <video
                                             className={styles.videoPlayer}
                                             controls
                                             autoPlay
                                             src={
                                                  'https://cdn.pixabay.com/video/2017/11/01/12714-241674172_large.mp4'
                                             }
                                        />
                                   </div>
                              </div>
                         )}
                    </div>
                    <div className={styles.details_con}>
                         <label className={styles.label}>Fleet management Services</label>
                         <MainHeading className={styles.heading}>
                              Optimized <span>Fleet Management</span> for Seamless Logistics
                              Operations
                         </MainHeading>
                         <MainPara className={styles.desc}>
                              From vehicle tracking to maintenance, we provide comprehensive fleet
                              solutions tailored to your business needs.
                         </MainPara>
                    </div>
               </div>
               <div className={styles.img_Stretch_Full}>
                    <div className={styles.img_wrapper}>
                         <Image
                              src={img1}
                              alt=''
                              priority
                              placeholder='blur'
                              className={styles.fullimage}
                         />
                    </div>
               </div>
          </section>
     )
}

export default LogisticsOptimization

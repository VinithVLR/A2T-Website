'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from './PrimaryLanding .module.scss'
import Image, { StaticImageData } from 'next/image'
import img_contact from '../../assets/images/img_contact.png'
import { Inter } from 'next/font/google'
import thumb_nail from '../../assets/images/img_contact_thumb.png'
import Spinner from '../spinner/Spinner'
import { MainHeading, MainPara } from '../typography/Typography'
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})

interface heading {
     title: string
     heading: ReactElement<any, any>
     description: string
     isReverse?: boolean
     bigImageSrc?: StaticImageData
     smallImageSrc?: StaticImageData
     isThumbnailHidden?: boolean
     style?: any
     layoutMod?: boolean
     flexRow?: any
     enableModal?: boolean
}
const PrimaryLanding = ({
     title,
     heading,
     description,
     isReverse = false,
     bigImageSrc,
     smallImageSrc,
     isThumbnailHidden,
     style,
     layoutMod,
     flexRow,
     enableModal,
}: heading) => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)
     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const handleResize = () => {
                    setIsSmallScreen(window.innerWidth <= 768)
               }

               handleResize()
               window.addEventListener('resize', handleResize)

               return () => {
                    window.removeEventListener('resize', handleResize)
               }
          }
     }, [])
     return (
          <section
               className={`${styles.main_con} ${inter.className}`}
               style={{
                    flexDirection: isReverse
                         ? flexRow && isSmallScreen
                              ? 'row-reverse'
                              : isSmallScreen
                                ? 'column'
                                : 'row-reverse'
                         : flexRow && isSmallScreen
                           ? 'row'
                           : undefined,
                    paddingBlockStart: layoutMod && isSmallScreen ? '8rem' : undefined,
               }}
          >
               <div
                    className={styles.image_section}
                    style={{
                         flex: layoutMod ? '0.25' : undefined,
                         paddingBlockStart: layoutMod && isSmallScreen ? '0rem' : undefined,
                    }}
               >
                    <div className={styles.image_wrapper}>
                         <Image
                              src={bigImageSrc ? bigImageSrc : img_contact}
                              alt='image'
                              priority
                              placeholder='blur'
                              className={styles.image}
                         />
                    </div>
               </div>
               <div
                    className={styles.details_section}
                    style={{
                         flex: layoutMod ? '0.85' : undefined,
                         paddingBlockStart: layoutMod && isSmallScreen ? '0rem' : undefined,
                    }}
               >
                    <div
                         className={styles.con_wrapper}
                         style={isSmallScreen ? undefined : { ...style }}
                    >
                         <div className={`${styles.btn_container} ${styles.semiBoldText}`}>
                              {title}
                         </div>
                         <MainHeading className={`${styles.heading}  ${styles.blackText}`}>
                              {heading}
                         </MainHeading>
                         <MainPara className={`${styles.description} ${styles.regularText}`}>
                              {description}
                         </MainPara>

                         {enableModal ? (
                              <>
                                   {!isModalOpen && (
                                        <div className={styles.thumb_nailWrapper_con}>
                                             <div
                                                  className={styles.thumb_nailWrapper}
                                                  onClick={openModal}
                                             >
                                                  <Image
                                                       src={smallImageSrc || thumb_nail}
                                                       alt='Thumbnail'
                                                       className={styles.image}
                                                       width={300}
                                                       priority
                                                       placeholder='blur'
                                                       height={200}
                                                  />
                                             </div>
                                        </div>
                                   )}

                                   {isModalOpen && (
                                        <div className={styles.modalOverlay} onClick={closeModal}>
                                             <div
                                                  className={styles.modalContent}
                                                  onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                                             >
                                                  <button
                                                       className={styles.closeButton}
                                                       onClick={closeModal}
                                                  >
                                                       &times;
                                                  </button>
                                                  <video
                                                       className={styles.videoPlayer}
                                                       controls
                                                       autoPlay
                                                       src={
                                                            'https://cdn.pixabay.com/video/2021/03/09/67460-522170651_large.mp4'
                                                       }
                                                  />
                                             </div>
                                        </div>
                                   )}
                              </>
                         ) : (
                              <>
                                   {!isThumbnailHidden && (
                                        <div className={styles.thumb_nailWrapper_con}>
                                             <div className={styles.thumb_nailWrapper}>
                                                  <Image
                                                       src={
                                                            smallImageSrc
                                                                 ? smallImageSrc
                                                                 : thumb_nail
                                                       }
                                                       alt=''
                                                       priority
                                                       placeholder='blur'
                                                       className={styles.image}
                                                  />
                                             </div>
                                        </div>
                                   )}
                              </>
                         )}
                    </div>
               </div>
          </section>
     )
}

export default PrimaryLanding

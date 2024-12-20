'use client'

import React, { useEffect, useState } from 'react'
import styles from './OurLeaders.module.scss'
import bgImage from '../../../assets/images/img_ourLeader_bg.png'
import clientImage from '../../../assets/images/img_ourLeader_.png'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import Header from '@/component/header/Header'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import { Inter } from 'next/font/google'
import ProfileCard from '../component/profileCard/ProfileCard'
import profilePic from '../../../assets/images/img_profile.png'
import profilePic2 from '../../../assets/images/img_profile_2.png'
import profilePic3 from '../../../assets/images/img_profile_3.png'
import profilePic4 from '../../../assets/images/img_profile_4.png'

const OurLeaders = () => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)

     useEffect(() => {
          const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 768)
          }

          handleResize()
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }
     }, [])

     let profileArr = [
          {
               id: 1,
               title: 'Operations Head',
               position: 'European Operations',
               location: 'Copenhagen, DENMARK',
               image: profilePic,
          },
          {
               id: 2,
               title: 'HR - Lead',
               position: ' A2T Talent Manager',
               location: 'Copenhagen, DENMARK',
               image: profilePic2,
          },
          {
               id: 3,
               title: 'HR - Specialist',
               position: 'A2T Sourcing Specialist',
               location: 'Copenhagen, DENMARK',
               image: profilePic3,
          },
          {
               id: 4,
               title: 'HR - Statutory Compliance',
               position: 'Founder & CEO',
               location: 'Copenhagen, DENMARK',
               image: profilePic4,
          },
     ]

     return (
          <section className={styles.sec_con}>
               <Header title={'Meet Our Leadership'} />
               <div className={styles.content_Wrapper}>
                    <div className={styles.image_section}>
                         <div
                              className={styles.img_wrapper}
                              style={{
                                   textAlign: 'center',
                              }}
                         >
                              <OverlapImage
                                   bgImage={bgImage}
                                   img={clientImage}
                                   // bgStyle={{ height: '380px' }}
                                   imgWrapper={{ width: '80%', height: '90%' }}
                              />
                         </div>
                    </div>
                    <div className={styles.details_con} style={{}}>
                         <TitleDescriptionWithIcon
                              style={{
                                   paddingInline: '0rem',
                                   display: isSmallScreen && 'flex',
                                   flexDirection: isSmallScreen && 'column',
                                   alignItems: isSmallScreen && 'center',
                              }}
                              title={'Arunkumar NT'}
                              subTitle={'Founder & CEO'}
                              description={
                                   'With over two decades of experience in the industry, Arunkumar leads A2 Technologies with a vision to drive innovation and sustainability in engineering and workforce solutions.'
                              }
                              paraStyle={{
                                   width: isSmallScreen && '80%',
                                   textAlign: isSmallScreen && 'center',
                                   paddingBlockEnd: isSmallScreen && '2rem',
                              }}
                         />
                    </div>
               </div>
               <div className={styles.four_card_layout}>
                    {profileArr.map((item: any, index) => (
                         <ProfileCard
                              key={index}
                              image={item.image}
                              title={item.title}
                              position={item.position}
                              location={item.location}
                         />
                    ))}
               </div>
          </section>
     )
}

export default OurLeaders

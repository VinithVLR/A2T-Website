'use client'

import React, { useRef, useState } from 'react'
import styles from './WelcomeLanding.module.scss'
import { Inter } from 'next/font/google'
import Button from '@/component/button/Button'
import logoIcon from '../../../assets/icons/ic_logo.svg'
import icon_arrow from '../../../assets/icons/ic_btn_arrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MainHeading, MainPara } from '@/component/typography/Typography'
import 'react-datepicker/dist/react-datepicker.css'
// import { FaCalendarAlt } from 'react-icons/fa' // Import your icon here
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const WelcomeLanding = () => {
     const router = useRouter()

     return (
          <section className={`${styles.main_container}`}>
               <video className={`${styles.video_background}`} autoPlay loop muted playsInline>
                    <source
                         src='https://cdn.pixabay.com/video/2020/06/23/42923-434300950_large.mp4'
                         type='video/mp4'
                    />
                    Your browser does not support the video tag.
               </video>
               <div className={`${styles.container}`}>
                    <MainHeading className={`${styles.heading}`}>
                         Pioneering Engineering Solutions for a <span>Greener Tomorrow</span>
                    </MainHeading>
                    <MainPara className={`${styles.para}`}>
                         Delivering innovative engineering solutions that minimize environmental
                         impact and foster sustainable growth for a cleaner, greener future.
                    </MainPara>
                    <div className={`${styles.flex_con}`}>
                         <Button
                              label={'Contact us'}
                              disabled={false}
                              style={{
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   borderRadius: '7px',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                              }}
                              loading={false}
                              iconleft={logoIcon}
                              onClick={() => {
                                   router.push('contact-us')
                              }}
                              labestyle={{ marginLeft: '0px', fontSize: '1rem' }}
                         />
                         <Link href={'/about-us'}>
                              <label style={{ cursor: 'pointer' }}>
                                   Know more about us
                                   <Image
                                        src={icon_arrow}
                                        alt='arrow-icon'
                                        className={`${styles.icon}`}
                                   />
                              </label>
                         </Link>
                    </div>
               </div>
          </section>
     )
}

export default WelcomeLanding

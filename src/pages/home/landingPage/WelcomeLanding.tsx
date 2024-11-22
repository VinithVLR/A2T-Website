import React from 'react'
import styles from './WelcomeLanding.module.scss'
import Navbar from '@/component/navbar/Navbar'
import { Inter } from 'next/font/google'
import Button from '@/component/button/Button'
import logoIcon from '../../../assets/icons/ic_logo.svg'
import icon_arrow from '../../../assets/icons/ic_btn_arrow.svg'
import Image from 'next/image'
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const WelcomeLanding = () => {
     return (
          <section className={`${styles.main_container} ${inter.className} `}>
               <div className={`${styles.container}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Pioneering Engineering Solutions for a <span>Greener Tomorrow</span>
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Delivering innovative engineering solutions that minimize environmental
                         impact and foster sustainable growth for a cleaner, greener future.
                    </p>
                    <div className={`${styles.flex_con}`}>
                         <Button
                              label={'Contact us'}
                              disabled={false}
                              style={{
                                   width: '14rem',
                                   height: ' 3.5rem',
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   borderRadius: '7px',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                              }}
                              loading={false}
                              iconleft={logoIcon}
                              labestyle={{ marginLeft: '0px', fontSize: '1.2rem' }}
                         />
                         <label>
                              Know more about us
                              <Image
                                   src={icon_arrow}
                                   alt='arrow-icon'
                                   className={`${styles.icon}`}
                              />
                         </label>
                    </div>
               </div>
          </section>
     )
}

export default WelcomeLanding

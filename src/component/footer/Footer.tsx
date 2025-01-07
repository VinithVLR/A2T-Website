import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'
import youtubeIcon from '../../assets/icons/ic_youtube.svg'
import linkedIcon from '../../assets/icons/ic_link.svg'
import xIcon from '../../assets/icons/ic_x.svg'
import companyLogo from '../../assets/images/img_companyLogo.svg'
import { Inter } from 'next/font/google'
import iconLoc from '../../assets/icons/ic_location.svg'
import iconMob from '../../assets/icons/ic_phone.svg'
import iconEmail from '../../assets/icons/ic_mail.svg'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Footer = () => {
     let arrImage = [youtubeIcon, linkedIcon, xIcon]

     let arr = [
          {
               icon: iconLoc,
               label: 'Chennai',
               locationUrl: 'https://www.google.com/maps?q=Chennai',
          },
          {
               icon: iconMob,
               label: '+91 98866 40104',
               locationUrl: 'tel:+919886640104',
          },
          {
               icon: iconEmail,
               label: 'arun@a2tgroup.com , finance@a2group.com',
               locationUrl: 'mailto:arun@a2group.com,finance@a2group.com',
          },
     ]

     return (
          <section className={`${styles.main}  ${inter.className}`}>
               <div className={styles.flex_con_right}>
                    <p className={styles.para}>
                         <span>A2 Technologies </span>is proudly 🌈 inclusive and anti-racist,
                         creating solutions for a better world. Born in Chennai, with a vision to
                         innovate for the world. 🌍
                    </p>
                    <ul className={styles.unOrder_list_con}>
                         <li>
                              <Link href='/about-us'>About Us</Link>
                         </li>
                         <li>
                              <Link href='/contact-us'>Services</Link>
                         </li>
                         <li>
                              <Link href='/purpose'>Purpose</Link>
                         </li>
                         <li>
                              <Link href='/careers'>Careers</Link>
                         </li>
                         {/* <li>
                              <Link href='#'>News</Link>
                         </li> */}
                    </ul>
                    <div></div>
               </div>
               <div className={styles.flex_con_left}>
                    <div
                         style={{ display: 'flex', gap: '1rem' }}
                         className={styles.social_icon_con}
                    >
                         {arrImage.map((item: any, index: any) => {
                              return (
                                   <div className={styles.icon_con} key={index}>
                                        {/* <Image src={item} className={styles.icon} alt='icon' /> */}
                                        <Image src={item} alt={`Social Icon ${index + 1}`} />
                                   </div>
                              )
                         })}
                    </div>

                    <div className={styles.iconAndText}>
                         {/* {arr.map((item: any, index: any) => {
                              return (
                                   <div className={styles.map_con} key={index}>
                                        <Link href={item.label} className={styles.label}>
                                             {item.label}
                                        </Link>
                                        <div className={styles.icon_content}>
                                             <Image
                                                  src={item.icon}
                                                  className={styles.icon}
                                                  alt='icon'
                                             />
                                        </div>
                                   </div>
                              )
                         })} */}
                         {arr.map((item, index) => {
                              return (
                                   <div className={styles.map_con} key={index}>
                                        {item.locationUrl ? (
                                             <Link
                                                  href={item.locationUrl}
                                                  passHref
                                                  className={styles.label}
                                                  target='_blank'
                                             >
                                                  {item.label}
                                             </Link>
                                        ) : (
                                             <Link href={item.label} className={styles.label}>
                                                  {item.label}
                                             </Link>
                                        )}
                                        <div className={styles.icon_content}>
                                             <Image
                                                  src={item.icon}
                                                  className={styles.icon}
                                                  alt='icon'
                                             />
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </div>
               <div className={styles.condition_con_wrapper}>
                    <div className={styles.condition_con}>
                         <div className={styles.label}>Terms of service </div>
                         <div className={styles.label}> Privacy policy</div>
                         <div className={styles.label}> © 2022, All Rights Reserved</div>
                    </div>
                    <div className={styles.image_wrapper}>
                         <div className={styles.logo_con}>
                              <Image src={companyLogo} alt='icon' className={styles.icon} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Footer

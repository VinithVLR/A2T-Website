'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './GlobalTrustSection.module.scss'
import Image from 'next/image'
import img1 from '../../../assets/images/trust_company/img_1.png'
import img2 from '../../../assets/images/trust_company/img_2.png'
import img3 from '../../../assets/images/trust_company/img_3.png'
import img4 from '../../../assets/images/trust_company/img_4.png'
import img5 from '../../../assets/images/trust_company/img_5.png'
import img6 from '../../../assets/images/trust_company/img_6.png'
import { gsap } from 'gsap'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
})
const GlobalTrustSection = () => {
     let arr = [img1, img2, img3, img4, img5, img6]
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )

     useEffect(() => {
          const flexCon = document.querySelector(`.${styles.flex_con}`)
          if (flexCon) {
               const duplicateContent = flexCon.innerHTML
               flexCon.innerHTML += duplicateContent
          }

          const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })

          tl.to(`.${styles.flex_con}`, {
               x: '-50%',
               duration: 10,
               ease: 'linear',
               onRepeat: () => {
                    gsap.set(`.${styles.flex_con}`, { x: 0 })
               },
          })
     }, [])

     useEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

     const rowOneRef = useRef(null)
     const rowTwoRef = useRef(null)

     useEffect(() => {
          const rowOne = rowOneRef.current
          const rowTwo = rowTwoRef.current

          if (rowOne && rowTwo) {
               const timeline = gsap.timeline({
                    repeat: -1,
                    defaults: { ease: 'linear', duration: 10 },
               })

               // Row One Animation - Left to Right
               timeline
                    .to(rowOne, { x: '100%' }) // Move Row One to the right
                    .set(rowOne, { x: '-100%' }) // Reset Row One to the left

               // Row Two Animation - Right to Left (starts simultaneously)
               timeline
                    .to(
                         rowTwo,
                         { x: '-100%' },
                         0, // Ensures both rows start at the same time
                    )
                    .set(rowTwo, { x: '100%' }) // Reset Row Two to the right
          }
     }, [])
     return (
          <>
               {windowWidth <= 768 ? (
                    <section className={`${styles.main_container} ${inter.className}`}>
                         <p className={`${styles.para} ${styles.regularText}`}>
                              Trusted By Global Companies
                         </p>

                         {/* Row 1 L to R */}
                         <div className={styles.flex_row} ref={rowOneRef}>
                              {arr.map((item, index) => (
                                   <div key={index} className='img-wrapper'>
                                        <Image src={item} alt={`Image ${index}`} />
                                   </div>
                              ))}
                         </div>

                         {/* Row 2 R to L */}
                         <div className={styles.flex_row} ref={rowTwoRef}>
                              {arr.map((item, index) => (
                                   <div key={index} className='img-wrapper'>
                                        <Image src={item} alt={`Image ${index}`} />
                                   </div>
                              ))}
                         </div>
                    </section>
               ) : (
                    <section className={`${styles.main_container} ${inter.className}`}>
                         <p className={`${styles.para} ${styles.regularText}`}>
                              Trusted By Global Companies
                         </p>
                         <div className={styles.flex_con}>
                              {arr.map((item: any, index: any) => (
                                   <div key={index} className={styles.img_wrapper}>
                                        <Image src={item} alt='' />
                                   </div>
                              ))}
                         </div>
                    </section>
               )}
          </>
     )
}

export default GlobalTrustSection

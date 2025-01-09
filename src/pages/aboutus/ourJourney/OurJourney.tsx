'use client'

import Header from '@/component/header/Header'
import styles from './OurJourney.module.scss'
import groupPhoto from '../../../assets/images/img_journey.png'
import canvaImage from '../../../assets/images/canva_journey.svg'
import yellowCanvaImage from '../../../assets/images/canva_yellow_journey.svg'
import pinkCanvaImage from '../../../assets/images/canva_pink_journey.svg'
import Image from 'next/image'
import { SecondaryHeading, SecondaryPara } from '@/component/typography/Typography'
import { useEffect, useRef } from 'react'

function OurJourney() {
     const initialFunc = async () => {
          const { gsap } = await import('gsap')
          const { ScrollTrigger } = await import('gsap/ScrollTrigger')
          gsap.registerPlugin(ScrollTrigger)

          const dots = document.querySelectorAll(`.${styles.dot}`)
          const detailsContainer = document.querySelectorAll(`.${styles.period}`)
          const imagesContainer = document.querySelectorAll(`.${styles.imageGallary}`)

          console.log('dots', dots)
          dots.forEach((dot, index) => {
               const detailContainer = detailsContainer[index]
               const imageContainer = imagesContainer[index]

               if (!detailContainer) return

               ScrollTrigger.create({
                    trigger: dot,
                    start: 'top center+=100',
                    toggleClass: {
                         targets: dot,
                         className: styles.appear,
                    },
                    toggleActions: 'play none none none',
               })

               // Create ScrollTrigger for image container class toggle
               ScrollTrigger.create({
                    trigger: dot,
                    start: 'top center+=100',
                    toggleClass: {
                         targets: imageContainer,
                         className: styles.active, // Add this class to handle stack animation in CSS
                    },
                    toggleActions: 'play none none none',
               })

               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: dot,
                         start: 'top center+=100',
                         toggleActions: 'play none none none',
                    },
               })

               timeline
                    .from(dot, {
                         duration: 0.5,
                         ease: 'back.out(1.7)',
                    })
                    .from(
                         [detailContainer],
                         {
                              y: 50,
                              opacity: 0,
                              duration: 0.8,
                              ease: 'power2.out',
                              stagger: 0,
                         },
                         0,
                    )

               const nextLine = dot.nextElementSibling
               if (nextLine && nextLine.classList.contains(styles.line)) {
                    const nextDot = dots[index + 1]

                    if (nextDot) {
                         gsap.timeline({
                              scrollTrigger: {
                                   trigger: dot,
                                   start: 'center center',
                                   endTrigger: nextDot,
                                   end: 'top center+=100',
                                   scrub: 1,
                              },
                         }).fromTo(
                              nextLine,
                              {
                                   scaleY: 0,
                                   transformOrigin: 'top',
                              },
                              {
                                   scaleY: 1,
                                   duration: 1,
                                   ease: 'none',
                              },
                         )
                    }
               }
          })
     }

     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <section className={styles.maincon}>
               <Header
                    title='Our Journey'
                    subTitle='A story of innovation and growth, leading us from our roots to becoming industry pioneers.'
               ></Header>
               <div className={styles.gridContainer}>
                    <div className={`${styles.period} ${styles.periodone}`}>
                         <SecondaryHeading>2022</SecondaryHeading>
                         <SecondaryPara>Founded in Chennai, India</SecondaryPara>
                    </div>
                    <div className={styles.timeLine}>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.one}`}>
                         <Image src={groupPhoto} className={styles.firstimg} alt='' />
                         <Image src={canvaImage} className={styles.canvaimg} alt='' />
                         <Image src={groupPhoto} className={styles.secondimg} alt='' />
                         <Image src={groupPhoto} className={styles.thirdimg} alt='' />
                         <Image src={canvaImage} className={styles.canvasecimg} alt='' />
                         <Image src={groupPhoto} className={styles.fourimg} alt='' />
                    </div>
                    <div className={`${styles.period} ${styles.periodsecond}`}>
                         <SecondaryHeading>2022</SecondaryHeading>
                         <SecondaryPara>Founded in Chennai, India</SecondaryPara>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.two}`}>
                         <Image src={groupPhoto} className={styles.firstimg} alt='' />
                         <Image src={yellowCanvaImage} className={styles.canvaimg} alt='' />
                         <Image src={groupPhoto} className={styles.secondimg} alt='' />
                         <Image src={groupPhoto} className={styles.thirdimg} alt='' />
                         <Image src={yellowCanvaImage} className={styles.canvasecimg} alt='' />
                         <Image src={groupPhoto} className={styles.fourimg} alt='' />
                    </div>
                    <div className={`${styles.period} ${styles.periodthird}`}>
                         <SecondaryHeading>2022</SecondaryHeading>
                         <SecondaryPara>Founded in Chennai, India</SecondaryPara>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.three}`}>
                         <Image src={groupPhoto} className={styles.firstimg} alt='' />
                         <Image src={pinkCanvaImage} className={styles.canvaimg} alt='' />
                         <Image src={groupPhoto} className={styles.secondimg} alt='' />
                         <Image src={groupPhoto} className={styles.thirdimg} alt='' />
                         <Image src={pinkCanvaImage} className={styles.canvasecimg} alt='' />
                         <Image src={groupPhoto} className={styles.fourimg} alt='' />
                    </div>
               </div>
          </section>
     )
}

export default OurJourney

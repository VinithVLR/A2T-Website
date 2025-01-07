'use client'

import bgImage from '../../../assets/images/img_contact_bg.png'
import styles from './Address.module.scss'
import locationIcon from '../../../assets/icons/ic_social_location.svg'
import urlIcon from '../../../assets/icons/ic_social_link_url.svg'
import youtubeIcon from '../../../assets/icons/ic_social_youtube.svg'
import linkedin from '../../../assets/icons/ic_social_linkedin.svg'
import xicon from '../../../assets/icons/ic_social_x.svg'
import twitterIcon from '../../../assets/icons/ic_social_twitter.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

function Address() {
     const sectionRef: any = useRef(null)
     const firstSectionRef: any = useRef(null)
     const secondSectionRef: any = useRef(null)

     const initial = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)

               if (window.innerWidth >= 768) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: secondSectionRef.current,
                              start: 'top center+=100',
                              toggleActions: 'play none none none',
                         },
                    })
                    timeline
                         .fromTo(
                              secondSectionRef.current,
                              {
                                   y: 100,
                                   opacity: 0,
                                   markers: true,
                              },
                              {
                                   y: 0,
                                   opacity: 1,
                                   duration: 0.8,
                                   ease: 'power3.out',
                                   markers: true,
                              },
                         )
                         .fromTo(
                              firstSectionRef.current,
                              {
                                   y: 100,
                                   opacity: 0,
                                   markers: true,
                              },
                              {
                                   y: 0,
                                   opacity: 1,
                                   duration: 0.8,
                                   ease: 'power3.out',
                                   markers: true,
                              },
                              0.5,
                         )
               } else {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: firstSectionRef.current,
                              start: 'top center+=100',
                              toggleActions: 'play none none none',
                         },
                    })
                    timeline
                         .fromTo(
                              firstSectionRef.current,
                              {
                                   y: 100,
                                   opacity: 0,
                                   markers: true,
                              },
                              {
                                   y: 0,
                                   opacity: 1,
                                   duration: 0.8,
                                   ease: 'power3.out',
                                   markers: true,
                              },
                         )
                         .fromTo(
                              secondSectionRef.current,
                              {
                                   y: 100,
                                   opacity: 0,
                                   markers: true,
                              },
                              {
                                   y: 0,
                                   opacity: 1,
                                   duration: 0.8,
                                   ease: 'power3.out',
                                   markers: true,
                              },
                         )
               }
          }
     }
     useEffect(() => {
          initial()
     }, [])
     return (
          <section className={styles.maincon} ref={sectionRef}>
               <div className={styles.firstChild} ref={firstSectionRef}>
                    <div className={`${styles.card} ${styles.third}`}>
                         <Image src={urlIcon} className={styles.cardImage} alt='' />
                         <div className={styles.socialCont}>
                              <Image src={youtubeIcon} alt='' />
                              <Image src={linkedin} alt='' />
                              <Image src={twitterIcon} alt='' />
                              <Image src={xicon} alt='' />
                         </div>
                    </div>
                    <Link href={'https://maps.app.goo.gl/22X5Yc4HREAY7auJ8'} target='_blank'>
                         <div className={styles.card}>
                              <Image src={locationIcon} className={styles.cardImage} alt='' />

                              <h3>
                                   No 29, Cenotaph Rd, First Lane,
                                   <br /> Seethammal Extension,
                                   <br /> Teynampet, Chennai,
                                   <br /> Tamil Nadu 600018
                              </h3>
                         </div>
                    </Link>
               </div>
               <div className={styles.secondChild} ref={secondSectionRef}>
                    <Image src={bgImage} alt='' />
               </div>
          </section>
     )
}

export default Address

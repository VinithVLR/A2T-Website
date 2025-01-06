'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import styles from './GlobalImpact.module.scss'
import imageLeft from '../../../assets/images/img_global_left.png'
import imageRight from '../../../assets/images/img_global_right.png'
import Image from 'next/image'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const GlobalImpact = () => {
     let arr = [
          {
               image: imageLeft,
               title: 'Through our sustainability initiatives, we aim to reduce carbon emissions',
          },
          {
               image: imageRight,
               title: "Contribute to the UN's Sustainable Development by Promoting inclusive and sustainable economic growth, employment, and decent work for all.",
          },
     ]

     const cardRef = useRef<HTMLDivElement>(null)

     const initialFunc = useCallback(async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (cardRef.current) {
                    gsap.fromTo(
                         cardRef.current,
                         { opacity: 0, y: 50 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 2,
                              ease: 'power3.out',
                              scrollTrigger: {
                                   trigger: cardRef.current,
                                   start: 'top 50%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                              },
                         },
                    )
               }
          }
     }, [])

     useEffect(() => {
          initialFunc()
     }, [initialFunc])
     return (
          <section className={styles.global_impact_sec}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         We are Making a Global Impact
                    </MainHeading>
               </header>

               <div className={styles.flex_content} ref={cardRef}>
                    {arr.map((item: any, index) => (
                         <div key={index} className={styles.details_content}>
                              <MainPara className={styles.para}>{item.title}</MainPara>
                              <div className={styles.img_wrapper}>
                                   <Image src={item.image} alt='image' className={styles.image} />
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default GlobalImpact

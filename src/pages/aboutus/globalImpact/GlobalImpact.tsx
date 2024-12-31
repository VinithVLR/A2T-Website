'use client'
import React, { useEffect, useRef } from 'react'
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

     const containerRef = useRef<HTMLDivElement | null>(null)
     const cardRefs = useRef<HTMLDivElement[]>([])

     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const tl = gsap.timeline({
                    scrollTrigger: {
                         trigger: containerRef.current,
                         start: 'top 80%',
                         toggleActions: 'play none none none',
                    },
               })

               tl.fromTo(
                    cardRefs.current,
                    { opacity: 0, y: 50 },
                    {
                         opacity: 1,
                         y: 0,
                         duration: 1,
                         ease: 'power3.out',
                         stagger: 0.2,
                    },
               )
          }
     }
     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <section className={styles.global_impact_sec}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         We are Making a Global Impact
                    </MainHeading>
               </header>

               <div className={styles.flex_content}>
                    {arr.map((item: any, index) => (
                         <div
                              key={index}
                              className={styles.details_content}
                              ref={(el: any) => (cardRefs.current[index] = el)}
                         >
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

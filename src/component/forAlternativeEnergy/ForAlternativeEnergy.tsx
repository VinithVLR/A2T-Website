'use client'
import React, { useEffect, useRef } from 'react'
import styles from './ForAlternativeEnergy.module.scss'

const ForAlternativeEnergy = ({ title, id }: any) => {
     const detailsRef = useRef<HTMLDivElement | null>(null)
     const linerightRef = useRef(null)
     const titleRef = useRef<HTMLDivElement | null>(null)

     const initial = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: detailsRef.current,
                         start: 'bottom center+=200',
                         toggleActions: 'play none none none',
                    },
               })

               timeline
                    .fromTo(
                         titleRef.current,
                         {
                              y: -40,
                              opacity: 0,
                         },
                         {
                              y: 0,
                              opacity: 1,
                              duration: 0.6,
                              ease: 'power3.out',
                         },
                    )
                    .fromTo(
                         linerightRef.current,
                         {
                              scaleX: 0,
                              overflow: 'hidden',
                         },
                         {
                              scaleX: 1,
                              duration: 0.8,
                              ease: 'power3.out',
                         },
                    )
          }
     }
     useEffect(() => {
          initial()
     }, [])
     return (
          <section id={id ? id : ''} ref={detailsRef} className={styles.wrapper}>
               <hr className={styles.line_left} ref={linerightRef}></hr>
               <div className={styles.text} ref={titleRef}>
                    {title}
               </div>
          </section>
     )
}

export default ForAlternativeEnergy

'use client'
import React, { useEffect, useRef } from 'react'
import styles from './ForAlternativeEnergy.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const ForAlternativeEnergy = ({ title, id }: any) => {
     const detailsRef = useRef<HTMLDivElement | null>(null)
     const linerightRef = useRef(null)
     const lineleftRef = useRef(null)

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: detailsRef.current,
                         start: 'top 50%',
                         end: 'bottom 20%',
                         toggleActions: 'play none none none',
                    },
               })

               timeline
                    .fromTo(
                         linerightRef.current,
                         {
                              x: '-500%',
                              opacity: 0,
                              overflow: 'hidden',
                              // clipPath: 'inset(0 -500% 0 0)',
                         },
                         {
                              x: '0%',
                              // clipPath: 'inset(0 0 0 0)',
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                    )
                    .fromTo(
                         lineleftRef.current,
                         {
                              x: '500%',
                              opacity: 0,
                              overflow: 'hidden',
                              // clipPath: 'inset(0 500% 0 0)',
                         },
                         {
                              x: '0%',
                              // clipPath: 'inset(0 0 0 0)',
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                         0,
                    )
          }
     }, [])
     return (
          <section id={id ? id : ''} className={styles.wrapper}>
               <hr className={styles.line_left} ref={lineleftRef}></hr>
               <div className={styles.text}>{title}</div>
               <hr className={styles.line_right} ref={linerightRef}></hr>
          </section>
     )
}

export default ForAlternativeEnergy

'use client'

import Header from '@/component/header/Header'
import Form from '../component/Form'
import styles from './ContactForm.module.scss'
import { useEffect, useRef } from 'react'

function ContactForm() {
     const sectionRef: any = useRef(null)

     const initial = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: sectionRef.current,
                         start: 'top center+=100',
                         toggleActions: 'play none none none',
                    },
               })
               timeline.fromTo(
                    sectionRef.current,
                    {
                         y: 100,
                         opacity: 0,
                    },
                    {
                         y: 0,
                         opacity: 1,
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
          <section className={styles.maincon} ref={sectionRef}>
               <div className={styles.formCont}>
                    <Header title={'Send us a Message'} containerStyle={styles.headerContainer} />
                    <Form />
               </div>
               <div className={styles.mapCont}>
                    <iframe
                         title='Google Map'
                         src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.55447098253!2d78.0920565!3d9.9224115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf4c1cf6070b%3A0xb8ca08d29219d4ed!2sBytecompass!5e0!3m2!1sen!2sin!4v1707906150631!5m2!1sen!2sin&maptype=roadmap'
                         className={`${styles.map_iframe}`}
                         allowFullScreen
                         loading='lazy'
                         referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
               </div>
          </section>
     )
}

export default ContactForm

'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Carousel.module.scss'

const Carousel = ({ slides }: any) => {
     const carouselRef: any = useRef(null)
     const [progress, setProgress] = useState(0)

     useEffect(() => {
          const handleScroll = () => {
               if (carouselRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
                    const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100
                    setProgress(scrollProgress)
               }
          }

          const carousel: any = carouselRef.current
          if (carousel) {
               carousel.addEventListener('scroll', handleScroll)
          }

          return () => {
               if (carousel) {
                    carousel.removeEventListener('scroll', handleScroll)
               }
          }
     }, [])

     const handlePrevious = () => {
          if (carouselRef.current) {
               const { scrollLeft } = carouselRef.current
               carouselRef.current.scrollLeft = scrollLeft - carouselRef.current.clientWidth
          }
     }

     const handleNext = () => {
          if (carouselRef.current) {
               const { scrollLeft } = carouselRef.current
               carouselRef.current.scrollLeft = scrollLeft + carouselRef.current.clientWidth
          }
     }

     return (
          <div className={styles.carouselWrapper}>
               <div ref={carouselRef} className={styles.carouselContainer}>
                    {slides.map((slide: any, index: any) => (
                         <div key={index} className={styles.slideItem}>
                              <Image
                                   src={slide.src}
                                   alt={`Slide ${index + 1}`}
                                   layout='responsive'
                                   width={300}
                                   height={200}
                              />
                              <div className={styles.cardContent}>
                                   <h3>{slide.title}</h3>
                                   <p>{slide.description}</p>
                              </div>
                         </div>
                    ))}
               </div>

               <div className={styles.progressContainer}>
                    <button className={styles.navigationButton} onClick={handlePrevious}>
                         Previous
                    </button>
                    <div className={styles.progressBar}>
                         <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                    </div>
                    <button className={styles.navigationButton} onClick={handleNext}>
                         Next
                    </button>
               </div>
          </div>
     )
}

export default Carousel

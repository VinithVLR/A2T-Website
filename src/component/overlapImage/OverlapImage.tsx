'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './OverlapImage.module.scss'
import Image, { StaticImageData } from 'next/image'
gsap.registerPlugin(ScrollTrigger)
interface OverlapImageProps {
     bgImage: StaticImageData
     bgStyle?: any
     imgWrapper?: any
     img: StaticImageData
     style?: any
}

const OverlapImage: React.FC<OverlapImageProps> = ({
     bgImage,
     img,
     bgStyle,
     imgWrapper,
     style,
}) => {
     const imgOverlayRef = useRef(null)
     const bgImageWrapperRef = useRef(null)

     useEffect(() => {
          if (bgImageWrapperRef.current) {
               gsap.fromTo(
                    bgImageWrapperRef.current,
                    { opacity: 0 },
                    {
                         opacity: 1,
                         duration: 1.5,
                         ease: 'power3.out',
                         scrollTrigger: {
                              trigger: bgImageWrapperRef.current,
                              start: 'top 80%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    },
               )
          }

          if (imgOverlayRef.current) {
               gsap.fromTo(
                    imgOverlayRef.current,
                    { opacity: 0, scale: 0.8 },
                    {
                         opacity: 1,
                         scale: 1,
                         duration: 1.5,
                         ease: 'power3.out',
                         scrollTrigger: {
                              trigger: imgOverlayRef.current,
                              start: 'top 80%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    },
               )
          }
     }, [])
     return (
          <div
               className={styles.mainContainer}
               style={{ backgroundImage: `url(${bgImage.src})`, ...bgStyle }}
          >
               <div className={styles.imgWrapper} style={{ ...imgWrapper }}>
                    <div ref={bgImageWrapperRef} className={styles.bg_image}>
                         <Image src={bgImage} alt='Background Image' priority />
                    </div>
                    <div className={styles.imgWrapper_ab} ref={imgOverlayRef} style={{ ...style }}>
                         <Image src={img} alt='Overlay Image' priority />
                    </div>
               </div>
          </div>
     )
}

export default OverlapImage

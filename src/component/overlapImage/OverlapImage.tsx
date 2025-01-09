'use client'
import { useRef, useEffect } from 'react'
import styles from './OverlapImage.module.scss'
import Image, { StaticImageData } from 'next/image'

interface OverlapImageProps {
     bgImage: StaticImageData
     bgStyle?: any
     imgWrapper?: any
     img?: any
     style?: any
     hasMultipleImages?: boolean
     imageLayerOne?: any
     imageLayerTwo?: any
}

const OverlapImage: React.FC<OverlapImageProps> = ({
     bgImage,
     img,
     bgStyle,
     imgWrapper,
     style,
     hasMultipleImages,
     imageLayerOne,
     imageLayerTwo,
}) => {
     const imgOverlayRef = useRef(null)
     const bgImageWrapperRef = useRef(null)
     const firstLayerRef = useRef(null)
     const secondLayerRef = useRef(null)

     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (hasMultipleImages) {
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
                                        start: 'top 50%',
                                        end: 'bottom 20%',
                                        toggleActions: 'play none none none',
                                        once: true,
                                   },
                              },
                         )
                    }

                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: firstLayerRef.current,
                              start: 'top 80%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                         },
                    })

                    timeline.fromTo(
                         firstLayerRef.current,
                         { opacity: 0, scale: 0.8 },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                    )

                    timeline.fromTo(
                         secondLayerRef.current,
                         { opacity: 0.5, scale: 0.8 },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                         '<',
                    )
               } else {
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
                                        start: 'top 50%',
                                        end: 'bottom 20%',
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
                                        start: 'top 50%',
                                        end: 'bottom 20%',
                                        toggleActions: 'play none none none',
                                        once: true,
                                   },
                              },
                         )
                    }
               }
          }
     }

     useEffect(() => {
          initialFunc()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     return (
          <div
               className={styles.mainContainer}
               style={{ backgroundImage: `url(${bgImage.src})`, ...bgStyle }}
          >
               {hasMultipleImages ? (
                    <div className={styles.imgWrapper} style={{ ...imgWrapper }}>
                         <div ref={bgImageWrapperRef} className={styles.bg_image}>
                              <Image src={bgImage} alt='Background Image' priority />
                         </div>
                         <div className={styles.MulimgWrapper_ab} style={{ ...style }}>
                              <div className={styles.imgRel}>
                                   <Image
                                        src={imageLayerOne}
                                        ref={firstLayerRef}
                                        alt='bgImage'
                                        priority
                                        className={styles.mul_img}
                                   />
                              </div>

                              <div className={styles.imgAbs}>
                                   <Image
                                        src={imageLayerTwo}
                                        ref={secondLayerRef}
                                        alt='bgImage'
                                        priority
                                        className={styles.mul_img}
                                   />
                              </div>
                         </div>
                    </div>
               ) : (
                    <div className={styles.imgWrapper} style={{ ...imgWrapper }}>
                         <div ref={bgImageWrapperRef} className={styles.bg_image}>
                              <Image src={bgImage} alt='Background Image' priority />
                         </div>
                         <div
                              className={styles.imgWrapper_ab}
                              ref={imgOverlayRef}
                              style={{ ...style }}
                         >
                              <Image src={img} alt='Overlay Image' priority />
                         </div>
                    </div>
               )}
          </div>
     )
}

export default OverlapImage

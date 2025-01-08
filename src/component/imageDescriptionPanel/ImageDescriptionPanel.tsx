'use client'

import React, { useCallback, useRef, useLayoutEffect, useEffect, useState } from 'react'
import style from './ImageDescriptionPanel.module.scss'
import Image from 'next/image'
import toolpic from '../../assets/layer_img.png'
import Button from '../button/Button'
import { Inter } from 'next/font/google'

import { useRouter } from 'next/navigation'
import { MainHeading, MainPara } from '../typography/Typography'

interface ImageDescriptionPanelProps {
     bgImage?: any
     image?: string
     heading?: string
     subHeading?: string
     bgColor?: string
     btnColor: string
     link?: string
     index: any
     lyImage: any
}

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const ImageDescriptionPanel: React.FC<ImageDescriptionPanelProps> = ({
     bgImage,
     image,
     heading,
     subHeading,
     bgColor,
     btnColor,
     link,
     index,
     lyImage,
}) => {
     const router = useRouter()
     const detailsRef = useRef<HTMLDivElement | null>(null)
     const imageSectionRef = useRef(null)
     const imgWrapperRef = useRef(null)
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )

     const initialFunc = useCallback(async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: detailsRef.current,
                         start: 'top center',
                         // end: 'bottom 20%',
                         toggleActions: 'play none none none',
                    },
               })
               timeline
                    .fromTo(
                         imageSectionRef.current,
                         {
                              opacity: 0,
                         },
                         {
                              opacity: 1,
                              duration: 0.3,
                         },
                    )
                    .fromTo(
                         imgWrapperRef.current,
                         {
                              opacity: 0,
                              scale: 0.95,
                         },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                         },
                         0,
                    )
                    .fromTo(
                         detailsRef.current,
                         {
                              ...(windowWidth <= 768 ? { y: '50%' } : { x: '-100%' }),
                              opacity: 0,
                              overflow: 'hidden',
                         },
                         {
                              ...(windowWidth <= 768 ? { y: '0%' } : { x: '0%' }),
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                         0.3,
                    )
          }
     }, [windowWidth])
     useEffect(() => {
          initialFunc()
          const handleResize = () => setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [initialFunc])

     return (
          <div
               className={`${style.main_container} ${inter.className} `}
               style={{ backgroundColor: bgColor }}
          >
               <div className={style.bg_image_con}>
                    <div className={style.imgWrapper}>
                         <Image
                              ref={imageSectionRef}
                              src={bgImage}
                              alt='Background image'
                              priority
                              className={style.image}
                         />
                         <div className={style.img_ab}>
                              <Image
                                   ref={imgWrapperRef}
                                   src={lyImage}
                                   alt='Overlay image'
                                   priority
                                   className={style.image}
                              />
                         </div>
                    </div>
               </div>
               <div className={style.detailss_con} style={{ overflow: 'hidden' }}>
                    <div ref={detailsRef} className={`slideAnimation ${style.detailss_con}`}>
                         <MainHeading className={` ${style.blackText}`}>{heading}</MainHeading>
                         <MainPara className={` ${style.regularText}`}>{subHeading}</MainPara>
                         <Button
                              label={'Explore more'}
                              disabled={false}
                              style={{
                                   width: 'fit-content',
                                   height: 'fit-content',
                                   backgroundColor: btnColor,
                                   gap: '1rem',
                              }}
                              onClick={() => {
                                   router.push(link ? link : '')
                              }}
                              loading={false}
                              icon
                              labestyle={{ marginLeft: '0px', fontSize: '0.8rem' }}
                         />
                    </div>
               </div>
          </div>
     )
}

export default ImageDescriptionPanel

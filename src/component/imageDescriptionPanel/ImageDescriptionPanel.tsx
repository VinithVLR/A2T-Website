'use client'

import React, { useCallback, useRef, useLayoutEffect, useEffect } from 'react'
import style from './ImageDescriptionPanel.module.scss'
import Image from 'next/image'
import toolpic from '../../assets/layer_img.png'
import Button from '../button/Button'
import { Inter } from 'next/font/google'

import { useRouter } from 'next/navigation'
import { MainHeading, MainPara } from '../typography/Typography'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
                         detailsRef.current,
                         {
                              x: '-100%',
                              opacity: 0,
                              overflow: 'hidden',
                         },
                         {
                              x: '0%',
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                    )
                    .fromTo(
                         imgWrapperRef.current,
                         {
                              opacity: 0,
                              scale: 0.5,
                         },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                         },
                         0,
                    )
          }
     }, [index])

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

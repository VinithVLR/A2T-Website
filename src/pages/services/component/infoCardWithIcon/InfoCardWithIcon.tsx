'use client'
import React, { useEffect, useRef } from 'react'
import styles from './InfoCardWithIcon.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image from 'next/image'

interface InfoCardWithIconProps {
     icon?: string
     title: string
     description: string
     btnColor?: string
     rowReverse?: boolean
     dataImage: any
     hoverColor?: any
     key: any
     btn?: any
     label?: any
     labelStyle?: any
     link?: any
     id?: any
     isFlag: any
}
const InfoCardWithIcon: React.FC<InfoCardWithIconProps> = ({
     icon,
     title,
     description,
     btnColor,
     rowReverse = false,
     dataImage,
     hoverColor,
     key,
     btn,
     label,
     labelStyle,
     link,
     id,
     isFlag,
}) => {
     const objStyle: any = {
          paddingInline: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
     }

     const objParaStyle = {
          textAlign: 'end',
     }
     const imageSectionRef = useRef(null)
     const imgWrapperRef = useRef(null)

     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               gsap.fromTo(
                    imgWrapperRef.current,
                    {
                         opacity: 0,
                    },
                    {
                         opacity: 1,
                         scrollTrigger: {
                              trigger: imageSectionRef.current,
                              start: 'top 60%',
                              end: 'top 30%',
                              scrub: true,
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    },
               )
          }
     }

     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <div id={id ? id : ''} className={styles.secondary_section}>
               <div
                    className={rowReverse ? styles.content_Wrapper_reverse : styles.content_Wrapper}
               >
                    <div className={styles.image_section} ref={imageSectionRef}>
                         <div className={styles.img_wrapper} ref={imgWrapperRef}>
                              <Image src={dataImage} alt={'image'} className={styles.image} />
                         </div>
                    </div>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              btn={btn}
                              btnColor={btnColor}
                              rowReverse={rowReverse ? true : false}
                              style={rowReverse ? objStyle : { paddingInline: '2rem' }}
                              headingStyle={{ textAlign: rowReverse ? 'end' : undefined }}
                              icon={icon}
                              title={title}
                              description={description}
                              bgimage={dataImage}
                              paraStyle={rowReverse ? objParaStyle : {}}
                              label={label}
                              link={link}
                              labelStyle={labelStyle}
                              isFlag={isFlag}
                         />
                    </div>
               </div>
          </div>
     )
}

export default InfoCardWithIcon

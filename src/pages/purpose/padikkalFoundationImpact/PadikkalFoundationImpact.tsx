'use client'
import React, { useEffect, useRef } from 'react'
import styles from './PadikkalFoundationImpact.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import bgImage from '../../../assets/images/img_layer_bg.png'
import image from '../../../assets/images/img_enp_double.png'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import { MainHeading, MainPara } from '@/component/typography/Typography'
import firsLayerImg from '../../../assets/images/doubleimage/img_empow_ly1.png'
import seconLayerImg from '../../../assets/images/doubleimage/img_empow_ly2.png'

const PadikkalFoundationImpact = () => {
     const detailsRef = useRef<HTMLDivElement | null>(null)
     const textRef = useRef(null)

     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: detailsRef.current,
                         start: 'top 50%',
                         end: 'bottom 20%',
                         toggleActions: 'play none none none',
                    },
               })

               timeline.fromTo(
                    textRef.current,
                    {
                         opacity: 0,
                         y: '30%',
                    },
                    {
                         opacity: 1,
                         y: 0,
                         duration: 1,
                    },
               )
          }
     }

     useEffect(() => {
          initialFunc()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
     return (
          <section className={styles.main_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con} ref={textRef}>
                         <MainHeading className={styles.title}>
                              Empowering People, Transforming Communities through
                              <span> Padikkal Foundation</span>
                         </MainHeading>
                         <MainPara className={styles.para}>
                              We believe that true leadership in our industry comes from empowering
                              others. Our impact initiatives create a ripple effect—one where
                              businesses thrive, communities prosper, and the environment is
                              preserved for future generations. By choosing to work with us, you
                              become a part of this positive change.
                         </MainPara>
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage
                                   bgImage={bgImage}
                                   hasMultipleImages
                                   imageLayerOne={firsLayerImg}
                                   imageLayerTwo={seconLayerImg}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default PadikkalFoundationImpact

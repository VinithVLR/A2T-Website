'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './SustainableWorldGoals.module.scss'
import Header from '@/component/header/Header'
import Image from 'next/image'
import img_gender from '../../../assets/images/img_gender.png'
import img_decentWork from '../../../assets/images/img_decentWork.png'
import img_industry from '../../../assets/images/img_industry.png'
import img_inequal from '../../../assets/images/img_inequal.png'
import img_com_product from '../../../assets/images/img_com_product.png'
import img_climate from '../../../assets/images/img_climate.png'
import img_institutions from '../../../assets/images/img_institutions.png'
import ic_gender from '../../../assets/icons/ic_gender.svg'
import ic_decentWork from '../../../assets/icons/ic_decent.svg'
import ic_inequal from '../../../assets/icons/ic_inequal.svg'
import ic_com_product from '../../../assets/icons/ic_com_product.svg'
import ic_climate from '../../../assets/icons/ic_climate.svg'
import ic_industry from '../../../assets/icons/ic_industry.svg'
import ic_institutions from '../../../assets/icons/ic_institutions.svg'
import Consumption from '@/component/consumption/Consumption'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SustainableWorldGoals = () => {
     const lineRef = useRef(null)
     const svgContainerRef = useRef(null)
     const [isClient, setIsClient] = useState(false)
     const [windowWidth, setWindowWidth] = useState(window.innerWidth)
     useEffect(() => {
          setIsClient(true)

          if (lineRef.current && svgContainerRef.current) {
               ScrollTrigger.create({
                    trigger: svgContainerRef.current,
                    start: 'top bottom',
                    onEnter: () => {
                         gsap.fromTo(
                              lineRef.current,
                              { scaleY: 0, transformOrigin: 'top', opacity: 1 },
                              {
                                   scaleY: 1,
                                   opacity: 1,
                                   duration: 1.5,
                                   ease: 'power2.inOut',
                              },
                         )
                    },
                    end: 'bottom top',
                    scrub: true,
               })
          }
     }, [])

     let arr = [
          {
               no: 1,
               image: img_gender,
               icon: ic_gender,
               title: 'Gender Equality',
               description:
                    'Promoting equal opportunities and empowering all genders within the workplace and beyond.',
               target: [],
               bgColor: '#EF402D',
               hoverColor: '#FCE4E1',
          },
          {
               no: 2,
               image: img_decentWork,
               icon: ic_decentWork,
               title: 'Decent Work & Economic Growth',
               description:
                    'Ensuring inclusive and sustainable economic growth by creating safe, productive work environments.',
               target: [],
               bgColor: '#A31C44',
               hoverColor: '#F2DFE5',
          },
          {
               no: 3,
               image: img_industry,
               icon: ic_industry,
               title: 'Industry, innovation and infrastructure',
               description:
                    'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
               target: [],
               bgColor: '#F26A2E',
               hoverColor: '#FDEAE1',
          },
          {
               no: 4,
               image: img_inequal,
               icon: ic_inequal,
               title: 'Reduced Inequalities',
               description:
                    'Working to reduce disparities by fostering diversity, equity, and inclusion in every aspect of our business.',
               target: [],
               bgColor: '#E01483',
               hoverColor: '#FADEED',
          },
          {
               no: 5,
               image: img_com_product,
               icon: ic_com_product,
               title: 'Responsible Consumption & Production',
               description:
                    'Committing to sustainable practices that reduce waste and promote responsible resource management.',
               target: [],
               bgColor: '#BF8D2C',
               hoverColor: '#F6EFE1',
          },
          {
               no: 6,
               image: img_climate,
               icon: ic_climate,
               title: 'Climate action',
               description: 'Take urgent action to combat climatic change and its impacts.',
               target: [],
               bgColor: '#407F46',
               hoverColor: '#E4EDE5',
          },
          {
               no: 7,
               image: img_institutions,
               icon: ic_institutions,
               title: 'Peace, Justice, & Strong Institutions',
               description:
                    'Supporting strong, transparent institutions and promoting justice and peace for sustainable development.',
               target: [],
               bgColor: '#136A9F',
               hoverColor: '#DEEAF1',
          },
     ]

     useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [windowWidth])

     return (
          <section id='our-story' className={styles.main_container}>
               <Header
                    title={'Building a Better World with Sustainable Goals'}
                    subTitle={
                         'At A2 Technologies, we are committed to contributing to a sustainable and equitable future by aligning our practices with the United Nations Sustainable Development Goals (SDGs).'
                    }
               />
               {windowWidth <= 768 ? (
                    <div ref={svgContainerRef} className={styles.svglinecontainer_web}>
                         {arr.map((item: any, index: any) => (
                              <Consumption key={index} data={item} />
                         ))}
                    </div>
               ) : (
                    <div ref={svgContainerRef} className={styles.svglinecontainer_web}>
                         {arr.map((item: any, index: any) => (
                              <section key={index} className={styles.flex_con}>
                                   {index % 2 === 0 ? (
                                        <>
                                             <div className={styles.image_con}>
                                                  <Image
                                                       src={item.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                             </div>
                                             <div className={styles.details_con}>
                                                  <Consumption data={item} />
                                             </div>
                                        </>
                                   ) : (
                                        <>
                                             <div className={styles.details_con}>
                                                  <Consumption data={item} />
                                             </div>
                                             <div className={styles.image_con}>
                                                  <Image
                                                       src={item.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                             </div>
                                        </>
                                   )}
                              </section>
                         ))}
                         <svg className={styles.svgLine} width='2' height='100%'>
                              <line
                                   ref={lineRef}
                                   x1='1'
                                   y1='0'
                                   x2='1'
                                   y2='100%'
                                   stroke='#0E7B68'
                                   strokeWidth='2'
                              />
                         </svg>
                    </div>
               )}
          </section>
     )
}

export default SustainableWorldGoals

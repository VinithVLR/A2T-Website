import React from 'react'
import styles from './ServiceInnovation.module.scss'
import { Inter } from 'next/font/google'
import FleetCard from '@/component/fleetCard/FleetCard'
import iconMan from '../../../assets/icons/ic_n_ms.svg'
import iconEng from '../../../assets/icons/ic_n_es.svg'
import iconFleet from '../../../assets/icons/ic_n_fm.svg'
import iconEsg from '../../../assets/icons/ic_n_esg.svg'
import iconBusiness from '../../../assets/icons/ic_n_bc.svg'

import whiteFleet from '../../../assets/icons/ic_fleet_management_white.svg'
import whiteman from '../../../assets/icons/ic_manpower_white.svg'
import whiteEng from '../../../assets/icons/ic_engineering_white.svg'
import whiteEsg from '../../../assets/icons/ic_sustainability_white.svg'
import whiteBusiness from '../../../assets/icons/ic_business_consult_white.svg'

import img_1 from '../../../assets/images/img_bg_man.png'
import img_2 from '../../../assets/images/img_bg_ser.png'
import img_3 from '../../../assets/images/img_bg_flt.png'
import img_4 from '../../../assets/images/img_bg_esg.png'
import img_5 from '../../../assets/images/img_bg_bus.png'

import { MainHeading, MainPara } from '@/component/typography/Typography'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
interface FleetCardData {
     bgImage: string
     iconImage: any
     title: string
     des: string
     overLayer: string
     titleColor: string
     desColor: string
     hoverColor: string
}
const ServiceInnovation = () => {
     let arr: any = [
          {
               bgImage: img_1,
               overLayer: '#F5E8E9',
               iconImage: iconFleet,
               title: 'Fleet Management',
               titleColor: '#B91722',
               des: 'Comprehensive solutions that maximize efficiency, reduce costs, & ensure compliance.',
               desColor: '#9E686C',
               hoverColor: '#8535EB',
               fontColor: '#B91722',
               whiteIcon: whiteFleet,
          },
          {
               bgImage: img_2,
               overLayer: '#F0F3F6',
               iconImage: iconMan,
               title: 'Manpower Solutions',
               titleColor: '#003366',
               des: 'We provide skilled personnel and workforce management tailored to meet your specific needs.',
               desColor: '#47617B',
               hoverColor: '#003366',
               fontColor: '#003366',
               whiteIcon: whiteman,
          },
          {
               bgImage: img_3,
               overLayer: '#EBF5F5',
               iconImage: iconEng,
               title: 'Engineering Services',
               titleColor: '#008080',
               des: 'Innovative engineering services that combine expertise with creative problem-solving.',
               desColor: '#267575',
               hoverColor: '#8535EB',
               fontColor: '#008080',
               whiteIcon: whiteEng,
          },

          {
               bgImage: img_4,
               overLayer: '#EEF8F1',
               iconImage: iconEsg,
               title: 'ESG & Sustainability',
               titleColor: '#28A745',
               des: 'Strategic guidance to integrate environmental, social, and governance principles for growth.',
               desColor: '#67A074',
               hoverColor: '#8535EB',
               fontColor: '#28A745',
               whiteIcon: whiteEsg,
          },

          {
               bgImage: img_5,
               overLayer: '#F6EFFC',
               iconImage: iconBusiness,
               title: 'Business Consulting',
               titleColor: '#8E2FD2',
               des: 'Expert consulting to enhance performance, streamline operations, and achieve success.',
               desColor: '#8F72A4',
               hoverColor: '#8535EB',
               fontColor: '#8E2FD2',
               whiteIcon: whiteBusiness,
          },
     ]
     return (
          <section className={`${styles.main_container}  ${inter.className}`}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Driving Innovation and Efficiency Across Every Service We Offer
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         From skilled manpower solutions to sustainable engineering and business
                         consulting, our comprehensive services are designed to meet the evolving
                         needs of industries worldwide.
                    </MainPara>
               </header>
               <div className={styles.five_card_layout}>
                    {arr.map((data: any, index: any) => {
                         return <FleetCard key={data.title} indexNumber={index} item={data} />
                    })}
               </div>
          </section>
     )
}

export default ServiceInnovation

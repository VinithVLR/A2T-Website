import React from 'react'
import styles from './ServiceInnovation.module.scss'
import { Inter } from 'next/font/google'
import FleetCard from '@/component/fleetCard/FleetCard'
import iconMan from '../../../assets/icons/ic_manpower.png'
import iconEng from '../../../assets/icons/ic_engineering.png'
import iconFleet from '../../../assets/icons/ic_fleet.png'
import iconEsg from '../../../assets/icons/ic_esg.png'
import iconBusiness from '../../../assets/icons/ic_business.png'

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
}
const ServiceInnovation = () => {
     let arr: FleetCardData[] = [
          {
               bgImage: '',
               overLayer: '#F6F3FC',
               iconImage: iconMan,
               title: 'Manpower Solutions',
               titleColor: '#8535EB',
               des: 'We provide skilled personnel and workforce management tailored to meet your specific needs.',
               desColor: '#7C6993',
          },
          {
               bgImage: '',
               overLayer: '#FFF6F3',
               iconImage: iconEng,
               title: 'Engineering Services',
               titleColor: '#FF613F',
               des: 'Innovative engineering services that combine expertise with creative problem-solving.',
               desColor: '#9D736B',
          },
          {
               bgImage: '',
               overLayer: '#F3F5FC',
               iconImage: iconFleet,
               title: 'Fleet Management',
               titleColor: '#348AEF',
               des: 'Comprehensive solutions that maximize efficiency, reduce costs, & ensure compliance.',
               desColor: '#65798F',
          },
          {
               bgImage: '',
               overLayer: '#EFF5F0',
               iconImage: iconEsg,
               title: 'ESG & Sustainability',
               titleColor: '#1CB977',
               des: 'Strategic guidance to integrate environmental, social, and governance principles for growth.',
               desColor: '#608877',
          },

          {
               bgImage: '',
               overLayer: '#F3FBFC',
               iconImage: iconBusiness,
               title: 'Business Consulting',
               titleColor: '#3DCADB',
               des: 'Expert consulting to enhance performance, streamline operations, and achieve success.',
               desColor: '#5E9299',
          },
     ]
     return (
          <section className={`${styles.main_container}  ${inter.className}`}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Driving Innovation and Efficiency Across Every Service We Offer
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         From skilled manpower solutions to sustainable engineering and business
                         consulting, our comprehensive services are designed to meet the evolving
                         needs of industries worldwide.
                    </p>
               </header>
               <div className={styles.five_card_layout}>
                    {arr.map((data, index) => (
                         <FleetCard key={data.title} indexNumber={index} item={data} />
                    ))}
               </div>
          </section>
     )
}

export default ServiceInnovation

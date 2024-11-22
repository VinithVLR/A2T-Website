import React from 'react'
import style from './ClientTestimonials.module.scss'
import Header from '@/component/header/Header'
import bg_image from '../../../assets/images/pexel.jpeg'
import Image from 'next/image'
import FleetCard from '@/component/fleetCard/FleetCard'
import iconMan from '../../../assets/icons/ic_manpower.png'
import iconEng from '../../../assets/icons/ic_engineering.png'
import iconFleet from '../../../assets/icons/ic_fleet.png'
import iconEsg from '../../../assets/icons/ic_esg.png'
import Carousel from './component/Carousel'
import Pictures from '../../../assets/images/pexel.jpeg'
interface FleetCardData {
     bgImage: any
     iconImage: any
     title: string
     des: string
     overLayer: string
     titleColor: string
     desColor: string
}

const ClientTestimonials = () => {
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
               overLayer: '#348AEF',
               iconImage: iconFleet,
               title: 'Fleet Management',
               titleColor: '#FFFFFF',
               des: 'Comprehensive solutions that maximize efficiency, reduce costs, & ensure compliance.',
               desColor: '#FAFAFA',
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
     ]

     const slides = [Pictures, Pictures, Pictures, Pictures, Pictures, Pictures]
     return (
          <section className={style.main_container}>
               <Header
                    title='Hear What Our Clients Say'
                    titleStyle={{ width: '30%', paddingBlock: '2rem' }}
               />

               <Carousel slides={slides} />
          </section>
     )
}

export default ClientTestimonials

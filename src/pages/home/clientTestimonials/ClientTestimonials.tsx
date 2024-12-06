import React from 'react'
import styles from './ClientTestimonials.module.scss'
import Header from '@/component/header/Header'
import bg_image from '../../../assets/images/pexel.jpeg'
import Image from 'next/image'
import iconMan from '../../../assets/icons/ic_manpower.png'
import CarousCard from '../component/carousCard/CarousCard'

interface FleetCardData {
     bgImage: string
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
               overLayer: '#F6F3FC',
               iconImage: iconMan,
               title: 'Manpower Solutions',
               titleColor: '#8535EB',
               des: 'We provide skilled personnel and workforce management tailored to meet your specific needs.',
               desColor: '#7C6993',
          },
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
               overLayer: '#F6F3FC',
               iconImage: iconMan,
               title: 'Manpower Solutions',
               titleColor: '#8535EB',
               des: 'We provide skilled personnel and workforce management tailored to meet your specific needs.',
               desColor: '#7C6993',
          },
     ]
     return (
          <section className={styles.main_container}>
               <Header
                    title='Hear What Our Clients Say'
                    titleStyle={{ width: '30%', paddingBlock: '2rem' }}
               />
               <div className={styles.five_card_layout}>
                    {arr.map((data: any, index) => (
                         <CarousCard key={data.title} indexNumber={index} item={data} />
                    ))}
               </div>
          </section>
     )
}

export default ClientTestimonials

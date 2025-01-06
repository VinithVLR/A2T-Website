'use client'
import Header from '@/component/header/Header'
import React from 'react'
import img_electric from '../../../assets/images/img_electric.png'
import img_tech from '../../../assets/images/img_tech.png'
import img_wild from '../../../assets/images/img_wild.png'
import UpdateCard from '@/component/updateCard/UpdateCard'
import style from './LastestUpdates.module.scss'

const LatestUpdates = () => {
     let arr = [
          {
               img: img_electric,
               date: '24, March 23’',
               title: 'Automakers Shift to Electric Vehicle Production',
               para: 'Top automakers announce plans to transition towards fully electric vehicle production by 2030.',
          },
          {
               img: img_tech,
               date: '24, March 23’',
               title: 'Tech Firm Launches Revolutionary AI Platform',
               para: 'New AI technology promises faster data processing for businesses across various industries.',
          },
          {
               img: img_wild,
               date: '24, March 23’',
               title: 'New Wildlife Conservation Initiative Launched',
               para: 'Non-profits unite to protect endangered species through innovative conservation programs.',
          },
     ]
     return (
          <section className={style.main_container}>
               <Header
                    title={'Stay informed with the Latest Updates'}
                    titleStyle={{ width: '40%' }}
               />

               <div className={style.three_card_layout}>
                    {arr.map((item, index) => (
                         <UpdateCard
                              key={index}
                              imageUrl={item.img}
                              date={item.date}
                              title={item.title}
                              description={item.para}
                              tags={['Automotive', 'Technology']}
                              index={index}
                         />
                    ))}
               </div>
          </section>
     )
}

export default LatestUpdates

import React from 'react'
import Header from '@/component/header/Header'
import styles from './SustainabilityPath.module.scss'
import bgImage from '../../../assets/images/img_layer_bg.png'
import Image from '../../../assets/images/image.png'
import eyeIcon from '../../../assets/icons/ic_eye.svg'
import manpowerIcon from '../../../assets/icons/ic_manpower.svg'
import CardGrid from '../component/cardGrid/CardGrid'
import { Inter } from 'next/font/google'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import OverlapImage from '@/component/overlapImage/OverlapImage'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const SustainabilityPath = () => {
     return (
          <section className={styles.sec_con}>
               <Header
                    title={'Our path towards Shaping a Sustainable Future'}
                    titleStyle={{ width: '65%' }}
               />
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              icon={eyeIcon}
                              title={'Our vision'}
                              description={
                                   'Aims to be one of the best Global Workforce solution providers and a Global Player in Integrated Engineering Services.'
                              }
                         />
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage bgImage={bgImage} img={Image} />
                         </div>
                    </div>
               </div>
               <TitleDescriptionWithIcon
                    icon={manpowerIcon}
                    title={'Our Mission'}
                    description={
                         'Our mission is to provide innovative, sustainable solutions that empower industries and create lasting impact.'
                    }
               />
               <CardGrid />
          </section>
     )
}

export default SustainabilityPath

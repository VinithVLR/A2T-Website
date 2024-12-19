import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import Header from '@/component/header/Header'
import bgImage1 from '../../../assets/images/Sustainability/img_sus_bg1.png'
import image1 from '../../../assets/images/Sustainability/img_sus_1.png'
import bgImage2 from '../../../assets/images/Sustainability/img_sus_bg2.png'
import image2 from '../../../assets/images/Sustainability/img_sus_2.png'
import bgImage3 from '../../../assets/images/Sustainability/img_sus_bg3.png'
import image3 from '../../../assets/images/Sustainability/img_sus_3.png'

const ClimateActionTracker = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Emissions Assessment',
               description:
                    'Thorough analysis of Scope 1, 2, and 3 emissions for a complete environmental impact overview.',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Carbon Reduction Planning',
               description: 'Strategies to minimize carbon footprint and achieve net-zero goals.',
          },
          {
               bgImage: bgImage3,
               img: image3,
               title: 'Compliance and Reporting',
               description: 'Ensure alignment with global standards like the GHG Protocol.',
          },
     ]
     return (
          <section style={{ paddingBlock: '3rem' }}>
               <Header
                    title={'Effective Climate Action using Accurate GHG Accounting'}
                    titleStyle={{ width: '60%' }}
                    subtitleStyle={{ width: '80%' }}
                    subTitle={
                         'Embedding ESG principles early gives startups a strategic edge. Our tailored strategies help them build sustainable, attractive, and scalable business models.'
                    }
               />
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default ClimateActionTracker

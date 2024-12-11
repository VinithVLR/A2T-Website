import React from 'react'
import styles from './InfrastructureOptimization.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import bgImage from '../../../assets/images/Business/img_buz_lay1.png'
import Image from '../../../assets/images/Business/img_opt_lay2.png'

const InfrastructureOptimization = () => {
     return (
          <section className={styles.sec_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '3rem' }}
                              title={'Embrace Digital Change for  Business Growth'}
                              description={
                                   'Our experts develop tailored digital transformation strategies that align with your business goals. From cloud migration to cybersecurity, we provide end-to-end IT solutions for a seamless digital transition.'
                              }
                         />
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage bgImage={bgImage} img={Image} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default InfrastructureOptimization

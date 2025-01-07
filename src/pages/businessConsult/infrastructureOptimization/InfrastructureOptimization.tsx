import React from 'react'
import styles from './InfrastructureOptimization.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import bgImage from '../../../assets/images/Business/img_buz_lay1.png'
import Image from '../../../assets/images/Business/img_opt_lay2.png'
import firstLayerImg from '../../../assets/images/doubleimage/img_opt_ly1.png'
import secondLayerImg from '../../../assets/images/doubleimage/img_opt_ly2.png'

const InfrastructureOptimization = () => {
     return (
          <section id='IT-optimization' className={styles.sec_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '3rem' }}
                              title={'Optimize Your IT Infrastructure'}
                              description={
                                   'We provide IT infrastructure optimization, cloud consulting, and hybrid cloud solutions to enhance scalability, security, and agility.'
                              }
                         />
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage
                                   bgImage={bgImage}
                                   hasMultipleImages
                                   imageLayerOne={firstLayerImg}
                                   imageLayerTwo={secondLayerImg}
                                   imgWrapper={{ width: '90%' }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default InfrastructureOptimization

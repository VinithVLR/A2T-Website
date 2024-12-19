import React from 'react'
import styles from './PadikkalFoundationImpact.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import bgImage from '../../../assets/images/img_layer_bg.png'
import image from '../../../assets/images/img_enp_double.png'
import OverlapImage from '@/component/overlapImage/OverlapImage'

const PadikkalFoundationImpact = () => {
     return (
          <section className={styles.main_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <h2 className={styles.title}>
                              Empowering People, Transforming Communities through
                              <span> Padikkal Foundation</span>
                         </h2>
                         <p className={styles.para}>
                              We believe that true leadership in our industry comes from empowering
                              others. Our impact initiatives create a ripple effect—one where
                              businesses thrive, communities prosper, and the environment is
                              preserved for future generations. By choosing to work with us, you
                              become a part of this positive change.
                         </p>
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage bgImage={bgImage} img={image} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default PadikkalFoundationImpact

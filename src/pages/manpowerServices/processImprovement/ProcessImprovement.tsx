import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/man_power/img_prc_ly1.png'
import image2 from '../../../assets/images/man_power/img_prc_ly2.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
const ProcessImprovement = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Lean Manufacturing Experts',
               link: 'lean-manufacturing-experts',
               description:
                    'Skilled personnel for operating CNC machines, ensuring precision in manufacturing processes.',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Six Sigma Black Belts',
               link: 'six-sigma-black-belts',
               description:
                    'Process engineers trained in Six Sigma methodology for process optimization and quality improvement.',
          },
     ]
     return (
          <section
               id='process-improvement-specialists'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Process Improvement Specialists
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our Lean Manufacturing Experts and Six Sigma Black Belts optimize
                         production processes by implementing waste-reduction strategies and
                         improving product quality.
                    </p>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default ProcessImprovement

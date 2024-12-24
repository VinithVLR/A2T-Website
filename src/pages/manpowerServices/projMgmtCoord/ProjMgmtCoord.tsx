import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/man_power/img_prj_ly1.png'
import image2 from '../../../assets/images/man_power/img_prj_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const ProjMgmtCoord = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Construction and Site Managers',
               link: 'construction-and-site-managers',
               description:
                    'Managing large-scale projects, ensuring coordination between engineering teams, contractors, and vendors.',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Supply Chain & Procurement Experts',
               link: 'supply-chain-&-procurement-experts',
               description:
                    'Overseeing procurement and supply chain operations for energy, LNG, EV, and manufacturing projects.',
          },
     ]
     return (
          <section
               id='project-management-&-coordination'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Project Management & Coordination
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our Site Managers and Supply Chain Experts coordinate large-scale projects,
                         ensuring seamless collaboration between teams and vendors for efficient
                         project execution.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default ProjMgmtCoord

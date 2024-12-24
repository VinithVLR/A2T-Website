import React from 'react'
import styles from './ProjectConsultancy.module.scss'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import bgImage from '../../../assets/images/img_layer_bg.png'
import image from '../../../assets/images/eng-ser/img_prj_ly (1).png'
import { MainHeading } from '@/component/typography/Typography'

const ProjectConsultancy = () => {
     return (
          <section id='project-management-&-consultancy' className={styles.main_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <MainHeading className={styles.title}>
                              Project Management & Consultancy
                         </MainHeading>
                         <ul className={styles.para}>
                              <li className={styles.bulletItem}>
                                   Feasibility studies, financial analysis, and risk assessment for
                                   large-scale energy and manufacturing projects.
                              </li>
                              <li className={styles.bulletItem}>
                                   End-to-end project management for energy plant construction and
                                   manufacturing facility setup.
                              </li>
                         </ul>
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage
                                   bgImage={bgImage}
                                   img={image}
                                   style={{ width: '100%' }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ProjectConsultancy

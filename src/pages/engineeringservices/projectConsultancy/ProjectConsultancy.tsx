import React from 'react'
import styles from './ProjectConsultancy.module.scss'
import OverlapImage from '@/component/overlapImage/OverlapImage'
import bgImage from '../../../assets/images/img_layer_bg.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'
import firsLayerImg from '../../../assets/images/doubleimage/img_proj_ly1.png'
import seconLayerImg from '../../../assets/images/doubleimage/img_proj_ly2.png'

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
                                   <MainPara>
                                        Feasibility studies, financial analysis, and risk assessment
                                        for large-scale energy and manufacturing projects.
                                   </MainPara>
                              </li>
                              <li className={styles.bulletItem}>
                                   <MainPara>
                                        End-to-end project management for energy plant construction
                                        and manufacturing facility setup.
                                   </MainPara>
                              </li>
                         </ul>
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <OverlapImage
                                   bgImage={bgImage}
                                   hasMultipleImages
                                   imageLayerOne={firsLayerImg}
                                   imageLayerTwo={seconLayerImg}
                                   style={{ width: '100%' }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ProjectConsultancy

import React from 'react'
import styles from './DigitalGrowth.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image from 'next/image'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgAb1 from '../../../assets/images/Business/img_buz_ab1.png'
import imgAb2 from '../../../assets/images/Business/img_buz_ab2.png'
import imgAb3 from '../../../assets/images/Business/img_buz_ab3.png'

const DigitalGrowth = () => {
     return (
          <section id='drive-growth' className={styles.DigitalGrowth_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={
                                   <>
                                        <span>Drive Growth</span> with Strategic Digital
                                        Transformation
                                   </>
                              }
                              description={
                                   'We offer process consultancy services to enhance operational efficiency using IT tools like data analytics, process automation, and ERP systems. Our goal is to simplify workflows, reduce costs, and improve productivity.'
                              }
                              headingStyle={{ fontSize: '2.625rem', paddingBlockEnd: '1rem' }}
                              paraStyle={{ fontsize: '1.125rem', lineHeight: '1.3rem' }}
                         />
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper_index}>
                              <div className={styles.img_index_top}>
                                   <Image
                                        src={imgLayer1}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_right}>
                                   <Image
                                        src={imgLayer4}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_left}>
                                   <Image
                                        src={imgLayer5}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>

                              <div className={styles.img_wrapper_absolute}>
                                   <div className={styles.img_top_con}>
                                        <Image src={imgAb1} alt='image' className={styles.img_ab} />
                                   </div>
                                   <div className={styles.img_left_con}>
                                        <Image src={imgAb2} alt='image' className={styles.img_ab} />
                                   </div>
                                   <div className={styles.img_right_con}>
                                        <Image src={imgAb3} alt='image' className={styles.img_ab} />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default DigitalGrowth

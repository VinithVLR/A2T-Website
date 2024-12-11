import React from 'react'
import styles from './DigitalSecurity.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image from 'next/image'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgAb1 from '../../../assets/images/Business/img_sec_ab1.png'
import imgAb2 from '../../../assets/images/Business/img_sec_ab2.png'
import imgAb3 from '../../../assets/images/Business/img_sec_ab3.png'

const DigitalSecurity = () => {
     return (
          <section className={styles.DigitalSecurity_con}>
               <div className={styles.content_Wrapper}>
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
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={
                                   <>
                                        <span>Secure</span> Your Digital Assets
                                   </>
                              }
                              description={
                                   'Protect your business with our comprehensive cybersecurity services. We offer vulnerability assessments, risk management frameworks, and robust security measures.'
                              }
                              headingStyle={{ fontSize: '2.625rem', paddingBlockEnd: '1rem' }}
                              paraStyle={{ fontsize: '1.125rem', lineHeight: '1.3rem' }}
                         />
                    </div>
               </div>
          </section>
     )
}

export default DigitalSecurity

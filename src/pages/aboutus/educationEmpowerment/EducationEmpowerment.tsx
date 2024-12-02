import React from 'react'
import styles from './EducationEmpowerment.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Button from '@/component/button/Button'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer2 from '../../../assets/images/img_emp_2.png'
import imgLayer3 from '../../../assets/images/img_emp_3.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgLayer6 from '../../../assets/images/img_emp_6.png'
import imgLayer7 from '../../../assets/images/img_emp_7.png'

import Image from 'next/image'
const EducationEmpowerment = () => {
     return (
          <section className={styles.eduction_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <Button
                              label={'The Padikkal Foundation'}
                              disabled={false}
                              style={{
                                   height: '2rem',
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   marginBlock: '2rem',
                              }}
                              loading={false}
                              labestyle={{ marginLeft: '0px', fontSize: '0.9rem' }}
                         />
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={'Empowering Dreams Through Education'}
                              description={
                                   'The Padikkal Foundation is dedicated to empowering underprivileged individuals by providing access to quality education and professional training. We help aspiring talents pursue their desired careers by connecting them with renowned institutes, ensuring they receive the skills and opportunities needed for a brighter future.'
                              }
                         />
                         <Button
                              label='Explore our Purpose'
                              disabled={false}
                              icon
                              style={{
                                   height: '3rem',
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   borderRadius: '7px',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                                   marginBlock: '2rem',
                              }}
                              loading={false}
                              labestyle={{
                                   marginLeft: '0px',
                                   fontSize: '1.125rem',
                                   color: '#fff',
                                   fontWeight: '400',
                              }}
                         />
                    </div>

                    <div className={styles.image_section}>
                         {/* <div className={styles.img_wrapper}>
                              <Image src={imgLayer1} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_2}>
                              <Image src={imgLayer2} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_3}>
                              <Image src={imgLayer3} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_4}>
                              <Image src={imgLayer4} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_5}>
                              <Image src={imgLayer5} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_6}>
                              <Image src={imgLayer6} alt='image' className={styles.image} />
                         </div>
                         <div className={styles.img_wrapper_7}>
                              <Image src={imgLayer7} alt='image' className={styles.image} />
                         </div> */}

                         <div className={styles.img_wrapper_index}>
                              <Image
                                   src={imgLayer1}
                                   alt='image'
                                   style={{
                                        width: '45%',
                                        height: '45%',
                                        transform: ' translateX(15rem)  translateY(7rem)',
                                   }}
                              />
                              <Image
                                   src={imgLayer4}
                                   alt='image'
                                   style={{
                                        width: '45%',
                                        height: '45%',
                                        transform: 'translateX(3rem) translateY(3rem)',
                                   }}
                              />
                              <Image
                                   src={imgLayer5}
                                   alt='image'
                                   style={{
                                        width: '45%',
                                        height: '45%',
                                        transform: 'translateX(22rem) translateY(-2rem)',
                                   }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default EducationEmpowerment

import React from 'react'
import styles from './CallToAction.module.scss'
import Image from 'next/image'
import ImageCTA from '../../assets/images/img_calltoaction.png'
import Button from '../button/Button'
import logoGreen from '../../assets/icons/ic_logo_green.svg'

const CallToAction = ({ img, data }: { img?: boolean; data: any }) => {
     return (
          <section className={styles.call_to_action}>
               <div className={styles.call_to_action__container}>
                    {img && (
                         <div className={styles.content_wrapper}>
                              <Image src={ImageCTA} alt='image' priority className={styles.image} />
                         </div>
                    )}

                    <div className={img ? styles.details_section : styles.detailsCon}>
                         <div className={img ? styles.con_wrapper : styles.conWrapper}>
                              <h2 className={styles.title}>{data}</h2>
                              <Button
                                   label='Contact us'
                                   disabled={false}
                                   style={{
                                        width: '14rem',
                                        height: '3.5rem',
                                        backgroundColor: '#FFFFFF',
                                        gap: '1rem',
                                        borderRadius: '7px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                   }}
                                   iconleft={logoGreen}
                                   loading={false}
                                   labestyle={{
                                        marginLeft: '0px',
                                        fontSize: '1.2rem',
                                        color: '#0E7B68',
                                        fontWeight: '600',
                                   }}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default CallToAction

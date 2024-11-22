import React from 'react'
import styles from './AlternatingContentLayout.module.scss'
import Image from 'next/image'
import reverImage from '../../assets/images/img_rever.png'

const AlternatingContentLayout = () => {
     return (
          <div>
               {[...Array(4)].map((_, index) => {
                    const isOdd = index % 2 !== 0
                    return (
                         <section
                              key={index}
                              className={styles.main_con}
                              style={{
                                   justifyContent: isOdd ? 'flex-start' : 'center',
                              }}
                         >
                              <div className={styles.image_section}>
                                   <div className={styles.image_wrapper}>
                                        <Image
                                             src={reverImage}
                                             alt='image'
                                             priority
                                             className={styles.image}
                                        />
                                   </div>
                              </div>
                              <div className={styles.details_section}>
                                   <div className={styles.con_wrapper}>
                                        <h3 className={`${styles.heading} ${styles.blackText}`}>
                                             {isOdd ? 'Partnership' : 'Innovation'}
                                        </h3>
                                        <p
                                             className={`${styles.description} ${styles.regularText}`}
                                        >
                                             {isOdd
                                                  ? 'We build strong partnerships to achieve mutual success and enduring results.'
                                                  : 'We are committed to fostering a culture of innovation, continuously seeking new ways to improve and enhance our services.'}
                                        </p>
                                   </div>
                              </div>
                         </section>
                    )
               })}
          </div>
     )
}

export default AlternatingContentLayout

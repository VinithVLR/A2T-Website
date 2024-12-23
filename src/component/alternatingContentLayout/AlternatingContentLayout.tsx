import React from 'react'
import styles from './AlternatingContentLayout.module.scss'
import Image from 'next/image'
import reverImage from '../../assets/images/img_rever.png'
import bg_image from '../../assets/images/purpose/img_pur_bg1.png'
import image from '../../assets/images/purpose/img_pur_1.png'

interface AlternatingContentLayoutProps {
     content: Array<{
          title: string
          description: string
          image: string
          link?: string | undefined
     }>
}
const AlternatingContentLayout: React.FC<AlternatingContentLayoutProps> = ({ content }) => {
     return (
          <React.Fragment>
               {content.map((item: any, index: any) => {
                    const isOdd = index % 2 !== 0
                    return (
                         <section
                              id={item.link ? item?.link : ''}
                              key={index}
                              className={styles.main_con}
                              style={{
                                   justifyContent: isOdd ? 'flex-start' : 'center',
                              }}
                         >
                              <div className={styles.image_section}>
                                   <div className={styles.image_wrapper}>
                                        <Image
                                             src={item.bgImage}
                                             alt='image'
                                             priority
                                             className={styles.image}
                                        />
                                        <div className={styles.img_ab}>
                                             <Image
                                                  src={item.img}
                                                  alt='image'
                                                  priority
                                                  className={styles.image}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className={styles.details_section}>
                                   <div className={styles.con_wrapper}>
                                        <h3 className={`${styles.heading} ${styles.blackText}`}>
                                             {item.title}
                                        </h3>
                                        <p
                                             className={`${styles.description} ${styles.regularText}`}
                                        >
                                             {item.description}
                                        </p>
                                   </div>
                              </div>
                         </section>
                    )
               })}
          </React.Fragment>
     )
}

export default AlternatingContentLayout

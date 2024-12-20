import React from 'react'
import styles from './ImageDescriptionRow.module.scss'
import Image from 'next/image'
import imgLayer1 from '../../assets/images/img_row/img_bg_1.png'
import imgLayer2 from '../../assets/images/img_row/img_bg_2.png'
import imgLayer3 from '../../assets/images/img_row/img_bg_3.png'
import imgAb1 from '../../assets/images/img_row/img_buz_ab1.png'
import imgAb3 from '../../assets/images/img_row/img_buz_ab2.png'
import imgAb2 from '../../assets/images/img_row/img_buz_ab3.png'

import imgEng1 from '../../assets/images/img_row/img_eng-ser_ly1.png'
import imgEng2 from '../../assets/images/img_row/img_eng-ser_ly2.png'
import imgEng3 from '../../assets/images/img_row/img_eng-ser_ly3.png'
interface ImageDescriptionRowProps {
     keyProp?: boolean
}

const ImageDescriptionRow: React.FC<ImageDescriptionRowProps> = ({ keyProp }) => {
     return (
          <section className={styles.imgDesc_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.first_image_section}>
                         <div className={styles.frst_img_rel}>
                              <Image
                                   src={imgLayer1}
                                   alt='image'
                                   className={styles.frst_image_rel}
                              />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb1 : imgEng1}
                                        alt='image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
                    <div className={styles.sec_image_section}>
                         <div className={styles.sec_img_rel}>
                              <Image src={imgLayer2} alt='image' className={styles.sec_image_rel} />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb2 : imgEng2}
                                        alt='image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
                    <div className={styles.third_image_section}>
                         <div className={styles.third_img_rel}>
                              <Image
                                   src={imgLayer3}
                                   alt='image'
                                   className={styles.third_image_rel}
                              />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb3 : imgEng3}
                                        alt='image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ImageDescriptionRow

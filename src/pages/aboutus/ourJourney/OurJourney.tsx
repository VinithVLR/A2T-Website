import Header from '@/component/header/Header'
import styles from './OurJourney.module.scss'
import groupPhoto from '../../../assets/images/img_journey.png'
import canvaImage from '../../../assets/images/canva_journey.svg'
import yellowCanvaImage from '../../../assets/images/canva_yellow_journey.svg'
import pinkCanvaImage from '../../../assets/images/canva_pink_journey.svg'

function OurJourney() {
     return (
          <section className={styles.maincon}>
               <Header
                    title='Our Journey'
                    subTitle='A story of innovation and growth, leading us from our roots to becoming industry pioneers.'
               ></Header>
               <div className={styles.gridContainer}>
                    <div className={`${styles.period} ${styles.periodone}`}>
                         <h3>2022</h3>
                         <span>Founded in Chennai, India</span>
                    </div>
                    <div className={styles.timeLine}>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                         <div className={styles.line}></div>
                         <div className={styles.dot}>
                              <div className={styles.md}>
                                   <div className={styles.sd}></div>
                              </div>
                         </div>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.one}`}>
                         <img src={groupPhoto.src} className={styles.firstimg} alt='' />
                         <img src={canvaImage.src} className={styles.canvaimg} alt='' />
                         <img src={groupPhoto.src} className={styles.secondimg} alt='' />
                         <img src={groupPhoto.src} className={styles.thirdimg} alt='' />
                         <img src={canvaImage.src} className={styles.canvasecimg} alt='' />
                         <img src={groupPhoto.src} className={styles.fourimg} alt='' />
                    </div>
                    <div className={`${styles.period} ${styles.periodsecond}`}>
                         <h3>2023</h3>
                         <span>Founded in Chennai, India</span>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.two}`}>
                         <img src={groupPhoto.src} className={styles.firstimg} alt='' />
                         <img src={yellowCanvaImage.src} className={styles.canvaimg} alt='' />
                         <img src={groupPhoto.src} className={styles.secondimg} alt='' />
                         <img src={groupPhoto.src} className={styles.thirdimg} alt='' />
                         <img src={yellowCanvaImage.src} className={styles.canvasecimg} alt='' />
                         <img src={groupPhoto.src} className={styles.fourimg} alt='' />
                    </div>
                    <div className={`${styles.period} ${styles.periodthird}`}>
                         <h3>2024</h3>
                         <span>Founded in Chennai, India</span>
                    </div>
                    <div className={`${styles.imageGallary} ${styles.three}`}>
                         <img src={groupPhoto.src} className={styles.firstimg} alt='' />
                         <img src={pinkCanvaImage.src} className={styles.canvaimg} alt='' />
                         <img src={groupPhoto.src} className={styles.secondimg} alt='' />
                         <img src={groupPhoto.src} className={styles.thirdimg} alt='' />
                         <img src={pinkCanvaImage.src} className={styles.canvasecimg} alt='' />
                         <img src={groupPhoto.src} className={styles.fourimg} alt='' />
                    </div>
               </div>
          </section>
     )
}

export default OurJourney

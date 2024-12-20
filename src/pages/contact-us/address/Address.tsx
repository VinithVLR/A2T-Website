import bgImage from '../../../assets/images/img_contact_bg.png'
import styles from './Address.module.scss'
import locationIcon from '../../../assets/icons/ic_social_location.svg'
import urlIcon from '../../../assets/icons/ic_social_link_url.svg'
import youtubeIcon from '../../../assets/icons/ic_social_youtube.svg'
import linkedin from '../../../assets/icons/ic_social_linkedin.svg'
import xicon from '../../../assets/icons/ic_social_x.svg'
import twitterIcon from '../../../assets/icons/ic_social_twitter.svg'
import Link from 'next/link'

function Address() {
     return (
          <section className={styles.maincon}>
               <div className={styles.firstChild}>
                    <div className={`${styles.card} ${styles.third}`}>
                         <img src={urlIcon.src} className={styles.cardImage} alt='' />
                         <div className={styles.socialCont}>
                              <img src={youtubeIcon.src} alt='' />
                              <img src={linkedin.src} alt='' />
                              <img src={twitterIcon.src} alt='' />
                              <img src={xicon.src} alt='' />
                         </div>
                    </div>
                    <Link href={'https://maps.app.goo.gl/22X5Yc4HREAY7auJ8'} target='_blank'>
                         <div className={styles.card}>
                              <img src={locationIcon.src} className={styles.cardImage} alt='' />

                              <h3>
                                   No 29, Cenotaph Rd, First Lane,
                                   <br /> Seethammal Extension,
                                   <br /> Teynampet, Chennai,
                                   <br /> Tamil Nadu 600018
                              </h3>
                         </div>
                    </Link>
               </div>
               <div className={styles.secondChild}>
                    <img src={bgImage.src} alt='' />
               </div>
          </section>
     )
}

export default Address

import styles from './Landing.module.scss'
import phoneIcon from '../../../assets/icons/ic_social_phone.svg'
import mailIcon from '../../../assets/icons/ic_social_mail.svg'
import urlIcon from '../../../assets/icons/ic_social_link_url.svg'
import youtubeIcon from '../../../assets/icons/ic_social_youtube.svg'
import linkedin from '../../../assets/icons/ic_social_linkedin.svg'
import xicon from '../../../assets/icons/ic_social_x.svg'
import twitterIcon from '../../../assets/icons/ic_social_twitter.svg'
import Link from 'next/link'

function Landing() {
     return (
          <section className={`${styles.maincon}`}>
               <div></div>
               <div className={styles.centerContent}>
                    <span className={styles.title}>Contact us</span>
                    <h1>
                         We’re here to <span>Connect</span>, Collaborate & Assist
                    </h1>
                    <p>
                         Ready to take the next step? Contact us for personalized support and expert
                         guidance.
                    </p>
               </div>
               <div className={styles.footer}>
                    <Link href={'tel:+91-9150523409'} target='_blank'>
                         <div className={styles.card}>
                              <img src={phoneIcon.src} className={styles.cardImage} alt='' />
                              <h3>+91 98866 40104</h3>
                         </div>
                    </Link>
                    <Link href={'mailto:finance@a2tgroup.com'} target='_blank'>
                         <div className={styles.card}>
                              <img src={mailIcon.src} className={styles.cardImage} alt='' />
                              <h3 className={styles.email}>arun@a2tgroup.com,</h3>
                              <h3>finance@a2tgroup.com</h3>
                         </div>
                    </Link>
                    <div className={`${styles.card} ${styles.third}`}>
                         <img src={urlIcon.src} className={styles.cardImage} alt='' />
                         <div className={styles.socialCont}>
                              <img src={youtubeIcon.src} alt='' />
                              <img src={linkedin.src} alt='' />
                              <img src={twitterIcon.src} alt='' />
                              <img src={xicon.src} alt='' />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Landing

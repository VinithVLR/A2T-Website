import styles from './Landing.module.scss'
import phoneIcon from '../../../assets/icons/ic_social_phone.svg'
import mailIcon from '../../../assets/icons/ic_social_mail.svg'
import urlIcon from '../../../assets/icons/ic_social_link_url.svg'
import youtubeIcon from '../../../assets/icons/ic_social_youtube.svg'
import linkedin from '../../../assets/icons/ic_social_linkedin.svg'
import xicon from '../../../assets/icons/ic_social_x.svg'
import twitterIcon from '../../../assets/icons/ic_social_twitter.svg'
import Link from 'next/link'
import Image from 'next/image'

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
                              <Image src={phoneIcon} className={styles.cardImage} alt='' />
                              <h3>+91 98866 40104</h3>
                         </div>
                    </Link>
                    <Link href={'mailto:finance@a2tgroup.com'} target='_blank'>
                         <div className={styles.card}>
                              <Image src={mailIcon} className={styles.cardImage} alt='' />
                              <h3 className={styles.email}>arun@a2tgroup.com,</h3>
                              <h3>finance@a2tgroup.com</h3>
                         </div>
                    </Link>
                    <div className={`${styles.card} ${styles.third}`}>
                         <Image src={urlIcon} className={styles.cardImage} alt='' />
                         <div className={styles.socialCont}>
                              <Image src={youtubeIcon} alt='' />
                              <Image src={linkedin} alt='' />
                              <Image src={twitterIcon} alt='' />
                              <Image src={xicon} alt='' />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Landing

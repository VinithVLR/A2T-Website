import bgImage from '../../../assets/images/img_contact_bg.png'
import styles from './Address.module.scss'
import locationIcon from '../../../assets/icons/ic_social_location.svg'
import urlIcon from '../../../assets/icons/ic_social_link_url.svg'
import youtubeIcon from '../../../assets/icons/ic_social_youtube.svg'
import linkedin from '../../../assets/icons/ic_social_linkedin.svg'
import xicon from '../../../assets/icons/ic_social_x.svg'
import twitterIcon from '../../../assets/icons/ic_social_twitter.svg'
import Link from 'next/link'
import Image from 'next/image'

function Address() {
     return (
          <section className={styles.maincon}>
               <div className={styles.firstChild}>
                    <div className={`${styles.card} ${styles.third}`}>
                         <Image src={urlIcon} className={styles.cardImage} alt='' />
                         <div className={styles.socialCont}>
                              <Image src={youtubeIcon} alt='' />
                              <Image src={linkedin} alt='' />
                              <Image src={twitterIcon} alt='' />
                              <Image src={xicon} alt='' />
                         </div>
                    </div>
                    <Link href={'https://maps.app.goo.gl/22X5Yc4HREAY7auJ8'} target='_blank'>
                         <div className={styles.card}>
                              <Image src={locationIcon} className={styles.cardImage} alt='' />

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
                    <Image src={bgImage} alt='' />
               </div>
          </section>
     )
}

export default Address

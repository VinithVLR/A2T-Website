import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import styles from './Explore.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import image1 from '../../../assets/images/careers/img_explore_innovation.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image2 from '../../../assets/images/careers/img_explore_integrity.png'
import bgImage3 from '../../../assets/images/purpose/img_pur_bg3.png'
import image3 from '../../../assets/images/careers/img_explore_sustainability.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'
interface ContentItem {
     bgImage: any
     img: any
     title: string
     description: string
}
function Explore() {
     const arr: ContentItem[] = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Culture and Values',
               description:
                    "Our company culture is built on collaboration, respect, and a shared commitment to excellence. We believe in empowering our employees to take ownership of their work and contribute to the company's success.",
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Integrity',
               description:
                    'We understand the importance of work-life balance and offer flexible work arrangements, wellness programs, and other initiatives to help our employees thrive both professionally and personally.',
          },
          {
               bgImage: bgImage3,
               img: image3,
               title: 'Sustainability',
               description:
                    'We are proud of our social responsibility programs, including our initiatives in sustainability and community engagement. Join a company that values giving back and making a positive impact.',
          },
     ]
     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading
                         className={`${styles.heading} ${styles.blackText} ${styles.sectionHeading}`}
                    >
                         Explore about <br className={styles.break} />
                         Life at A2 Technologies
                    </MainHeading>
                    <MainPara
                         className={`${styles.para} ${styles.regularText} ${styles.sectionHeading}`}
                         style={{ marginBlock: '0px' }}
                    >
                         Discover a culture where creativity thrives, teamwork drives success, and
                         innovation is at the heart of everything we do. Join us in creating a
                         vibrant, dynamic work environment that values growth and collaboration.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default Explore

import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/fleet/img_glb_1.png'
import image2 from '../../../assets/images/fleet/img_glb_2.png'
import image3 from '../../../assets/images/fleet/img_glb_3.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const GlobalLocalExpertise = () => {
     let skillArr: any = [
          {
               img: image1,
               title: 'Local Expertise',
               description:
                    'Understanding regional requirements and tailoring solutions to fit local markets.',
               link: 'local-expertise',
          },
          {
               img: image2,
               title: 'International Standards',
               description:
                    ' Adherence to global logistics standards, ensuring reliability and trust.',
               link: 'international-standards',
          },
          {
               img: image3,
               title: 'Network of Partnerships',
               description:
                    'Strong relationships with key logistics players and regulatory bodies for smooth operations.',
               link: 'network-of-partnerships',
          },
     ]

     return (
          <section
               id={'global-reach-and-local-expertise'}
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Global Reach and Local Expertise
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We combine local insights with global logistics standards to ensure
                         efficient, reliable operations worldwide.
                    </MainPara>
               </header>
               {skillArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         link={item.link}
                         opacityAnimation={true}
                    />
               ))}
          </section>
     )
}

export default GlobalLocalExpertise

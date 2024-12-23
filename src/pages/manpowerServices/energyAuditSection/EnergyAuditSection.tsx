import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_aud_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_aud_ly2.png'

const EnergyAuditSection = () => {
     let engAudData = [
          {
               img: cardImage1,
               title: 'Energy Auditors',
               description:
                    'Certified professionals conducting energy audits for industrial and commercial facilities, helping reduce power consumption.',
               link: 'energy-auditors',
          },
          {
               img: cardImage2,
               title: 'Sustainability Consultants',
               description:
                    'Experts advising on green energy strategies, carbon footprint reduction, and energy optimization.',
               link: 'energy-auditors',
          },
     ]
     return (
          <section
               id='energy-auditors-&-consultants'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Energy Auditors & Consultants
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our Energy Auditors help optimize energy use and reduce consumption in
                         industrial and commercial facilities. Sustainability Consultants provide
                         expert guidance on green energy strategies and carbon reduction.
                    </p>
               </header>
               {engAudData.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         link={item.link}
                    />
               ))}
          </section>
     )
}

export default EnergyAuditSection

import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/eng-ser/img_winEng_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_winEng_ly2.png'
import image3 from '../../../assets/images/eng-ser/img_winEng_ly3.png'

const WindEnergy = () => {
     const windEngArr = [
          {
               img: image1,
               title: 'Wind Farm Development',
               description: [
                    'Wind resource assessment, site selection, and feasibility studies.',
                    'Design and development of wind turbines and wind farm layouts.',
               ],
          },
          {
               img: image2,
               title: 'Wind Energy EPC Services',
               description: [
                    'Installation of wind turbines, towers, and electrical systems.',
                    'Grid integration and transmission engineering for wind power.',
               ],
          },
          {
               img: image3,
               title: 'O&M for Wind Turbines',
               description: [
                    'Regular maintenance and performance optimization for wind turbines.Specialized in assessing environmental impacts, ensuring sustainability, and compliance with regulations.',
               ],
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Wind Energy</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         We offer wind farm development, including resource assessment, site
                         selection, and complete EPC services. Our O&M solutions ensure turbines
                         operate at peak performance.
                    </p>
               </header>
               {windEngArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                    />
               ))}
          </section>
     )
}

export default WindEnergy

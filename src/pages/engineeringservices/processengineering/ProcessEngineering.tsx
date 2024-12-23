import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/eng-ser/img_prc_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_prc_ly2.png'

const ProcessEngineering = () => {
     const processEngData = [
          {
               img: image1,
               title: 'Lean Manufacturing Consulting',
               link: 'lean-manufacturing-Consulting',
               description:
                    'Implementing lean principles to eliminate waste and optimize manufacturing processes.',
          },
          {
               img: image2,
               title: 'Six Sigma & Quality Engineering',
               link: 'six-sigma-&-quality-engineering',
               description: [
                    'Process improvement strategies using Six Sigma methodology to improve product quality and reduce defects.',
               ],
          },
     ]
     return (
          <section
               id='process-engineering'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Process Engineering</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Using lean manufacturing and Six Sigma principles, we streamline operations
                         and improve product quality.
                    </p>
               </header>
               {processEngData.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         label={item.label}
                         link={item.link}
                    />
               ))}
          </section>
     )
}

export default ProcessEngineering

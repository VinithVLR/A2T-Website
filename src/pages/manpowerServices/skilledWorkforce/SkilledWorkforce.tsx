import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_skl_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_skl_ly2.png'
import cardImage3 from '../../../assets/images/man_power/img_skl_ly3.png'

const SkilledWorkforce = () => {
     let skillWorkArr = [
          {
               img: cardImage1,
               title: 'CNC Machine Operators',
               description:
                    'Skilled personnel for operating CNC machines, ensuring precision in manufacturing processes.',
               link: 'CNC-machine-operators',
          },
          {
               img: cardImage2,
               title: '3D Printing Technicians',
               link: '3D-printing-technicians',
               description:
                    'Experts in additive manufacturing and rapid prototyping using 3D printing technologies.',
          },
          {
               img: cardImage3,
               title: 'Welders and Fabricators',
               link: 'welders-and-fabricators',
               description:
                    'Trained manpower for welding, fabrication, and assembly of metal components used in manufacturing.',
          },
     ]
     return (
          <section
               id='skilled-operators-&-technicians'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Skilled Operators & Technicians
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         CNC Machine Operators, 3D Printing Technicians, and Welders provide skilled
                         expertise in operating precision machinery, additive manufacturing, and
                         metal fabrication.
                    </p>
               </header>
               {skillWorkArr.map((item: any, index: any) => (
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

export default SkilledWorkforce

import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import image1 from '../../../assets/images/eng-ser/img_pdp_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_pdp_ly2.png'
import ImageDesc from '@/component/imageDesc/ImageDesc'
const ProductDesign = () => {
     const productData = [
          {
               img: image1,
               title: 'CAD/CAM/CAE Services',
               link: 'CAD/CAM/CAE-Services',
               description: [
                    'Design and development of mechanical components using computer-aided design (CAD) and engineering (CAE).',
                    'Rapid prototyping and 3D printing for product development.',
                    'Integration of robotics and automation in assembly lines for efficiency and productivity.',
               ],
          },
          {
               img: image2,
               title: 'Design for Manufacturing (DFM) and Design for Assembly (DFA)',
               link: 'design-for-manufacturing-and-design-for-assembly',
               description: [
                    'Optimization of product designs for ease of manufacturing and assembly.',
               ],
          },
     ]

     return (
          <section
               id='product-design-and-prototyping'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Product Design and Prototyping
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our CAD/CAM/CAE services help clients develop mechanical components, while
                         our rapid prototyping and 3D printing capabilities accelerate product
                         development.
                    </p>
               </header>
               {productData.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         link={item.link}
                    />
               ))}
          </section>
     )
}

export default ProductDesign

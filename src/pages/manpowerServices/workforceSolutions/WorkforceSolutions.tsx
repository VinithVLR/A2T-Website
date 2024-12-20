import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Header from '@/component/header/Header'
import ImageDescriptionRow from '@/component/imageDescriptionRow/ImageDescriptionRow'
interface WorkforceSolutionsProps {
     keyProp?: any
}
const WorkforceSolutions: React.FC<WorkforceSolutionsProps> = ({ keyProp }) => {
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <Header
                    title={keyProp ? 'Our Engineering Solutions' : 'Our Workforce Solutions'}
                    subTitle={
                         'Our workforce solutions provide skilled professionals in engineering, technical, and maintenance roles, ensuring smooth project execution. We tailor services to meet the evolving needs of innovative industries.'
                    }
               />
               <ImageDescriptionRow keyProp={keyProp} />
          </section>
     )
}

export default WorkforceSolutions

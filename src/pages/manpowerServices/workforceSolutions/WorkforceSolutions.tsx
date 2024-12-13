import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Header from '@/component/header/Header'
import ImageDescriptionRow from '@/component/imageDescriptionRow/ImageDescriptionRow'
const WorkforceSolutions = () => {
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <Header
                    title={'Our Workforce Solutions'}
                    subTitle={
                         'Our workforce solutions provide skilled professionals in engineering, technical, and maintenance roles, ensuring smooth project execution. We tailor services to meet the evolving needs of innovative industries.'
                    }
               />
               <ImageDescriptionRow />
          </section>
     )
}

export default WorkforceSolutions
